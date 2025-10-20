#!/usr/bin/env node

/**
 * Google Drive Photo Album Generator
 * Extracts folder ID from Google Drive URLs and generates Jekyll-compatible album data
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

function extractFolderId(url) {
    // Extract folder ID from various Google Drive URL formats
    const patterns = [
        /\/folders\/([a-zA-Z0-9-_]+)/,
        /id=([a-zA-Z0-9-_]+)/,
        /\/d\/([a-zA-Z0-9-_]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            return match[1];
        }
    }
    return null;
}

function generateImageUrl(fileId) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

function generateThumbnailUrl(fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w300`;
}

function generateAlbumData(folderId, albumTitle = 'Photo Album') {
    // Since we can't directly access Google Drive API without authentication,
    // we'll generate a template that users can fill in manually
    
    const albumData = {
        title: albumTitle,
        folderId: folderId,
        folderUrl: `https://drive.google.com/drive/folders/${folderId}`,
        images: [
            {
                id: "REPLACE_WITH_ACTUAL_FILE_ID_1",
                title: "Sample Image 1",
                description: "Replace with actual image description",
                url: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_1",
                thumbnail: "https://drive.google.com/thumbnail?id=REPLACE_WITH_ACTUAL_FILE_ID_1&sz=w300"
            },
            {
                id: "REPLACE_WITH_ACTUAL_FILE_ID_2", 
                title: "Sample Image 2",
                description: "Replace with actual image description",
                url: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_2",
                thumbnail: "https://drive.google.com/thumbnail?id=REPLACE_WITH_ACTUAL_FILE_ID_2&sz=w300"
            }
        ],
        instructions: [
            "1. Open the Google Drive folder in your browser",
            "2. Right-click on each image and select 'Get link' or 'Share'",
            "3. Copy the sharing link and extract the file ID (the long string after '/d/' or 'id=')",
            "4. Replace REPLACE_WITH_ACTUAL_FILE_ID_X with the actual file IDs",
            "5. Update titles and descriptions as needed",
            "6. Save this data to _data/albums/your-album-name.yml"
        ]
    };
    
    return albumData;
}

function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: node google_drive_album_generator.js <google_drive_folder_url> [album_title]');
        console.log('Example: node google_drive_album_generator.js "https://drive.google.com/drive/folders/1234567890" "My Photos"');
        process.exit(1);
    }
    
    const folderUrl = args[0];
    const albumTitle = args[1] || 'Photo Album';
    
    console.log('🔍 Processing Google Drive folder URL...');
    console.log('URL:', folderUrl);
    
    const folderId = extractFolderId(folderUrl);
    
    if (!folderId) {
        console.error('❌ Could not extract folder ID from URL');
        console.error('Make sure the URL is a valid Google Drive folder link');
        process.exit(1);
    }
    
    console.log('✅ Extracted folder ID:', folderId);
    
    const albumData = generateAlbumData(folderId, albumTitle);
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '..', '_data', 'albums');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Generate filename from album title
    const filename = albumTitle.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') + '.yml';
    
    const outputPath = path.join(outputDir, filename);
    
    // Convert to YAML format
    const yamlContent = `# Google Drive Photo Album: ${albumTitle}
# Generated on: ${new Date().toISOString()}
# Folder ID: ${folderId}
# Folder URL: ${albumData.folderUrl}

title: "${albumTitle}"
folder_id: "${folderId}"
folder_url: "${albumData.folderUrl}"

instructions: |
  ${albumData.instructions.join('\n  ')}

images:
  - id: "REPLACE_WITH_ACTUAL_FILE_ID_1"
    title: "Sample Image 1"
    description: "Replace with actual image description"
    url: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_1"
    thumbnail: "https://drive.google.com/thumbnail?id=REPLACE_WITH_ACTUAL_FILE_ID_1&sz=w300"
    
  - id: "REPLACE_WITH_ACTUAL_FILE_ID_2"
    title: "Sample Image 2" 
    description: "Replace with actual image description"
    url: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_2"
    thumbnail: "https://drive.google.com/thumbnail?id=REPLACE_WITH_ACTUAL_FILE_ID_2&sz=w300"

# Add more images by copying the above format
# To get file IDs:
# 1. Open each image in Google Drive
# 2. Right-click and select "Get link" 
# 3. Extract the ID from URLs like: https://drive.google.com/file/d/FILE_ID_HERE/view
`;
    
    fs.writeFileSync(outputPath, yamlContent);
    
    console.log('\n📁 Album data file created:');
    console.log('Path:', outputPath);
    console.log('\n📋 Next steps:');
    console.log('1. Open the Google Drive folder in your browser');
    console.log('2. For each image, right-click and select "Get link"');
    console.log('3. Extract the file ID from the sharing URL');
    console.log('4. Edit the generated YAML file and replace the placeholder IDs');
    console.log('5. Use in your Jekyll posts with:');
    console.log(`   {% include google_drive_photo_album.html album="${filename.replace('.yml', '')}" %}`);
    
    console.log('\n🔗 Your folder URL:', folderUrl);
    console.log('🆔 Extracted folder ID:', folderId);
}

if (require.main === module) {
    main();
}

module.exports = {
    extractFolderId,
    generateImageUrl,
    generateThumbnailUrl,
    generateAlbumData
};