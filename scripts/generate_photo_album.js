#!/usr/bin/env node
/**
 * Google Drive Photo Album Generator (JavaScript/Node.js version)
 * 
 * This script helps create YAML data files for Google Drive photo albums
 * without requiring Python dependencies.
 * 
 * Usage:
 * node generate_photo_album.js --album-name "vw-collaboration" --manual
 * node generate_photo_album.js --album-name "test-album" --file-ids "FILE_ID_1,FILE_ID_2,FILE_ID_3"
 */

const fs = require('fs');
const path = require('path');

class GoogleDriveAlbumGenerator {
    constructor(dataDir = '_data/albums') {
        this.dataDir = dataDir;
        this.ensureDataDir();
    }

    ensureDataDir() {
        if (!fs.existsSync(this.dataDir)) {
            fs.mkdirSync(this.dataDir, { recursive: true });
        }
    }

    extractFileIdFromUrl(url) {
        const patterns = [
            /\/file\/d\/([a-zA-Z0-9-_]+)/,
            /id=([a-zA-Z0-9-_]+)/,
            /\/open\?id=([a-zA-Z0-9-_]+)/,
            /\/uc\?.*id=([a-zA-Z0-9-_]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) {
                return match[1];
            }
        }

        // If no pattern matches, assume it's already a file ID
        if (/^[a-zA-Z0-9-_]+$/.test(url.trim())) {
            return url.trim();
        }

        return null;
    }

    createManualAlbumTemplate(albumName, title = null, description = null) {
        const filename = albumName.toLowerCase().replace(/[^a-zA-Z0-9_-]/g, '_');
        const filepath = path.join(this.dataDir, `${filename}.yml`);
        
        const templateData = {
            album_info: {
                title: title || albumName.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\w\S*/g, (txt) => 
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                ),
                description: description || `Photo album: ${albumName}`,
                created_date: new Date().toISOString().split('T')[0],
                folder_url: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE'
            },
            photos: [
                {
                    id: 'GOOGLE_DRIVE_FILE_ID_1',
                    title: 'Photo Title 1',
                    caption: 'Photo caption or description',
                    date: new Date().toISOString().split('T')[0],
                    tags: ['tag1', 'tag2']
                },
                {
                    id: 'GOOGLE_DRIVE_FILE_ID_2',
                    title: 'Photo Title 2', 
                    caption: 'Another photo description',
                    date: new Date().toISOString().split('T')[0],
                    tags: ['tag3']
                },
                {
                    id: 'GOOGLE_DRIVE_FILE_ID_3',
                    title: 'Photo Title 3',
                    caption: 'Third photo description', 
                    date: new Date().toISOString().split('T')[0],
                    tags: ['tag1', 'tag3']
                }
            ]
        };

        const header = `# Google Drive Photo Album: ${albumName}
# Generated on: ${new Date().toISOString()}
# 
# Instructions:
# 1. Replace GOOGLE_DRIVE_FILE_ID_X with actual Google Drive file IDs
# 2. Update titles, captions, and dates as needed
# 3. Add or remove photos as necessary
# 
# To get Google Drive file IDs:
# - Right-click on image in Google Drive > Get Link
# - Extract ID from URL: drive.google.com/file/d/FILE_ID_HERE/view
# 
# Usage in Jekyll:
# {% include google_drive_photo_album.html album_id="${filename}" photos=site.data.albums.${filename.replace(/-/g, '_')} %}
# 

`;

        const yamlContent = this.objectToYaml(templateData);
        fs.writeFileSync(filepath, header + yamlContent);
        
        return filepath;
    }

    createAlbumFromIds(albumName, fileIds, titles = [], captions = []) {
        const filename = albumName.toLowerCase().replace(/[^a-zA-Z0-9_-]/g, '_');
        const filepath = path.join(this.dataDir, `${filename}.yml`);
        
        const photos = fileIds.map((fileId, i) => {
            const cleanId = this.extractFileIdFromUrl(fileId);
            if (!cleanId) {
                console.warn(`Warning: Could not extract file ID from: ${fileId}`);
                return null;
            }
            
            return {
                id: cleanId,
                title: titles[i] || `Photo ${i + 1}`,
                caption: captions[i] || `Image ${i + 1} from ${albumName}`,
                date: new Date().toISOString().split('T')[0]
            };
        }).filter(Boolean);

        const albumData = {
            album_info: {
                title: albumName.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\w\S*/g, (txt) => 
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                ),
                description: `Photo album with ${photos.length} images`,
                created_date: new Date().toISOString().split('T')[0]
            },
            photos: photos
        };

        const header = `# Google Drive Photo Album: ${albumName}
# Generated on: ${new Date().toISOString()}

`;

        const yamlContent = this.objectToYaml(albumData);
        fs.writeFileSync(filepath, header + yamlContent);
        
        return filepath;
    }

    objectToYaml(obj, indent = 0) {
        let yaml = '';
        const spaces = '  '.repeat(indent);
        
        for (const [key, value] of Object.entries(obj)) {
            if (value === null || value === undefined) {
                yaml += `${spaces}${key}: null\n`;
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                yaml += `${spaces}${key}:\n`;
                yaml += this.objectToYaml(value, indent + 1);
            } else if (Array.isArray(value)) {
                yaml += `${spaces}${key}:\n`;
                value.forEach(item => {
                    if (typeof item === 'object') {
                        yaml += `${spaces}  -\n`;
                        yaml += this.objectToYaml(item, indent + 2);
                    } else {
                        yaml += `${spaces}  - ${item}\n`;
                    }
                });
            } else {
                const valueStr = typeof value === 'string' && value.includes(':') ? `"${value}"` : value;
                yaml += `${spaces}${key}: ${valueStr}\n`;
            }
        }
        
        return yaml;
    }

    generateJekyllUsageExample(albumName) {
        const filename = albumName.toLowerCase().replace(/[^a-zA-Z0-9_-]/g, '_');
        const dataVar = filename.replace(/-/g, '_');
        
        return `
<!-- Example usage in your Jekyll post/page -->

{% include google_drive_photo_album.html 
   album_id="${filename}"
   album_title="${albumName.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}"
   description="Photo album description"
   photos=site.data.albums.${dataVar} 
   folder_url="https://drive.google.com/drive/folders/YOUR_FOLDER_ID" %}

<!-- Alternative: Inline photos (for quick testing) -->
<!-- Just replace the file IDs with your Google Drive image IDs -->
{% assign quick_photos = '[
  {"id": "FILE_ID_1", "title": "Photo 1", "caption": "Caption 1"},
  {"id": "FILE_ID_2", "title": "Photo 2", "caption": "Caption 2"}
]' | jsonify %}

{% include google_drive_photo_album.html 
   album_id="quick-album"
   album_title="Quick Test Album" %}
`;
    }
}

// Command line interface
function main() {
    const args = process.argv.slice(2);
    const options = {};
    
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, '').replace(/-/g, '_');
        const value = args[i + 1];
        
        if (key === 'file_ids') {
            options[key] = value.split(',').map(id => id.trim());
        } else if (key === 'titles' || key === 'captions') {
            options[key] = value.split(',').map(item => item.trim());
        } else if (key === 'manual') {
            options[key] = true;
            i--; // No value for this flag
        } else {
            options[key] = value;
        }
    }
    
    if (!options.album_name) {
        console.error('❌ --album-name is required');
        console.log('\nUsage:');
        console.log('  node generate_photo_album.js --album-name "my-album" --manual');
        console.log('  node generate_photo_album.js --album-name "my-album" --file-ids "ID1,ID2,ID3"');
        return;
    }
    
    const generator = new GoogleDriveAlbumGenerator(options.data_dir || '_data/albums');
    
    let filepath;
    
    if (options.manual) {
        filepath = generator.createManualAlbumTemplate(
            options.album_name,
            options.title,
            options.description
        );
        console.log(`✅ Created template: ${filepath}`);
        console.log('📝 Edit the file to add your Google Drive file IDs');
    } else if (options.file_ids) {
        filepath = generator.createAlbumFromIds(
            options.album_name,
            options.file_ids,
            options.titles,
            options.captions
        );
        console.log(`✅ Created album: ${filepath}`);
    } else {
        console.error('❌ Please use --manual or provide --file-ids');
        return;
    }
    
    console.log('\n📖 Jekyll Usage Example:');
    console.log(generator.generateJekyllUsageExample(options.album_name));
}

if (require.main === module) {
    main();
}

module.exports = GoogleDriveAlbumGenerator;