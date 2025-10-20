#!/usr/bin/env python3
"""
Google Drive Photo Album Generator for Jekyll

This script helps generate YAML data files for Google Drive photo albums
that can be used with the google_drive_photo_album.html include.

Requirements:
- Google Drive API credentials (optional, for automated metadata)
- Manual configuration with Google Drive file IDs

Usage:
1. python generate_photo_album.py --manual --album-name "vw-collaboration"
2. Edit the generated YAML file with your Google Drive file IDs
3. Use in Jekyll: {% include google_drive_photo_album.html album_id="vw-collab" photos=site.data.albums.vw_collaboration %}
"""

import argparse
import yaml
import os
import re
from datetime import datetime
from pathlib import Path

class GoogleDriveAlbumGenerator:
    def __init__(self, data_dir="_data/albums"):
        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(parents=True, exist_ok=True)
    
    def extract_file_id_from_url(self, url):
        """Extract Google Drive file ID from various URL formats"""
        patterns = [
            r'/file/d/([a-zA-Z0-9-_]+)',
            r'id=([a-zA-Z0-9-_]+)',
            r'/open\?id=([a-zA-Z0-9-_]+)',
            r'/uc\?.*id=([a-zA-Z0-9-_]+)',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, url)
            if match:
                return match.group(1)
        
        # If no pattern matches, assume it's already a file ID
        if re.match(r'^[a-zA-Z0-9-_]+$', url.strip()):
            return url.strip()
        
        return None
    
    def create_manual_album_template(self, album_name, title=None, description=None):
        """Create a template YAML file for manual photo configuration"""
        
        # Sanitize album name for filename
        filename = re.sub(r'[^a-zA-Z0-9_-]', '_', album_name.lower())
        filepath = self.data_dir / f"{filename}.yml"
        
        template_data = {
            'album_info': {
                'title': title or album_name.replace('_', ' ').replace('-', ' ').title(),
                'description': description or f"Photo album: {album_name}",
                'created_date': datetime.now().strftime('%Y-%m-%d'),
                'folder_url': 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE'
            },
            'photos': [
                {
                    'id': 'GOOGLE_DRIVE_FILE_ID_1',
                    'title': 'Photo Title 1',
                    'caption': 'Photo caption or description',
                    'date': '2025-10-19',
                    'tags': ['tag1', 'tag2']
                },
                {
                    'id': 'GOOGLE_DRIVE_FILE_ID_2', 
                    'title': 'Photo Title 2',
                    'caption': 'Another photo description',
                    'date': '2025-10-19',
                    'tags': ['tag3']
                },
                {
                    'id': 'GOOGLE_DRIVE_FILE_ID_3',
                    'title': 'Photo Title 3', 
                    'caption': 'Third photo description',
                    'date': '2025-10-19',
                    'tags': ['tag1', 'tag3']
                }
            ]
        }
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"# Google Drive Photo Album: {album_name}\n")
            f.write(f"# Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write("# \n")
            f.write("# Instructions:\n")
            f.write("# 1. Replace GOOGLE_DRIVE_FILE_ID_X with actual Google Drive file IDs\n")
            f.write("# 2. Update titles, captions, and dates as needed\n")
            f.write("# 3. Add or remove photos as necessary\n")
            f.write("# \n")
            f.write("# To get Google Drive file IDs:\n")
            f.write("# - Right-click on image in Google Drive > Get Link\n")
            f.write("# - Extract ID from URL: drive.google.com/file/d/FILE_ID_HERE/view\n")
            f.write("# \n")
            f.write("# Usage in Jekyll:\n")
            f.write(f"# {{% include google_drive_photo_album.html album_id=\"{filename}\" photos=site.data.albums.{filename.replace('-', '_')} %}}\n")
            f.write("# \n\n")
            
            yaml.dump(template_data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)
        
        return filepath
    
    def create_album_from_ids(self, album_name, file_ids, titles=None, captions=None):
        """Create album YAML from a list of Google Drive file IDs"""
        
        filename = re.sub(r'[^a-zA-Z0-9_-]', '_', album_name.lower())
        filepath = self.data_dir / f"{filename}.yml"
        
        photos = []
        for i, file_id in enumerate(file_ids):
            # Clean the file ID
            clean_id = self.extract_file_id_from_url(file_id)
            if not clean_id:
                print(f"Warning: Could not extract file ID from: {file_id}")
                continue
                
            photo_data = {
                'id': clean_id,
                'title': titles[i] if titles and i < len(titles) else f"Photo {i+1}",
                'caption': captions[i] if captions and i < len(captions) else f"Image {i+1} from {album_name}",
                'date': datetime.now().strftime('%Y-%m-%d')
            }
            photos.append(photo_data)
        
        album_data = {
            'album_info': {
                'title': album_name.replace('_', ' ').replace('-', ' ').title(),
                'description': f"Photo album with {len(photos)} images",
                'created_date': datetime.now().strftime('%Y-%m-%d')
            },
            'photos': photos
        }
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"# Google Drive Photo Album: {album_name}\n")
            f.write(f"# Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            yaml.dump(album_data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)
        
        return filepath
    
    def generate_jekyll_usage_example(self, album_name):
        """Generate example Jekyll usage code"""
        filename = re.sub(r'[^a-zA-Z0-9_-]', '_', album_name.lower())
        data_var = filename.replace('-', '_')
        
        example = f"""
<!-- Example usage in your Jekyll post/page -->

{{% include google_drive_photo_album.html 
   album_id="{filename}"
   album_title="{album_name.replace('_', ' ').title()}"
   description="Photo album description"
   photos=site.data.albums.{data_var} 
   folder_url="https://drive.google.com/drive/folders/YOUR_FOLDER_ID" %}}

<!-- Alternative with inline photos (if no YAML file) -->
{{% assign album_photos = '
[
  {{"id": "FILE_ID_1", "title": "Photo 1", "caption": "Caption 1"}},
  {{"id": "FILE_ID_2", "title": "Photo 2", "caption": "Caption 2"}}
]' | split: ',' %}}

{{% include google_drive_photo_album.html 
   album_id="inline-album"
   album_title="Inline Album"
   photos=album_photos %}}
"""
        return example

def main():
    parser = argparse.ArgumentParser(description='Generate Google Drive photo album data for Jekyll')
    parser.add_argument('--album-name', required=True, help='Name of the photo album')
    parser.add_argument('--title', help='Album title (defaults to album name)')
    parser.add_argument('--description', help='Album description')
    parser.add_argument('--manual', action='store_true', help='Create manual template for editing')
    parser.add_argument('--file-ids', nargs='+', help='List of Google Drive file IDs or URLs')
    parser.add_argument('--titles', nargs='+', help='Photo titles (optional)')
    parser.add_argument('--captions', nargs='+', help='Photo captions (optional)')
    parser.add_argument('--data-dir', default='_data/albums', help='Directory for YAML data files')
    
    args = parser.parse_args()
    
    generator = GoogleDriveAlbumGenerator(args.data_dir)
    
    if args.manual:
        # Create manual template
        filepath = generator.create_manual_album_template(
            args.album_name, 
            args.title, 
            args.description
        )
        print(f"✅ Created template: {filepath}")
        print(f"📝 Edit the file to add your Google Drive file IDs")
        
    elif args.file_ids:
        # Create from provided file IDs
        filepath = generator.create_album_from_ids(
            args.album_name,
            args.file_ids,
            args.titles,
            args.captions
        )
        print(f"✅ Created album: {filepath}")
        
    else:
        print("❌ Please use --manual or provide --file-ids")
        return
    
    # Show usage example
    print("\n📖 Jekyll Usage Example:")
    print(generator.generate_jekyll_usage_example(args.album_name))

if __name__ == "__main__":
    main()