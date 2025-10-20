---
title: "Google Drive Photo Album Test"
permalink: /photo-album-test.html
---

## Google Drive Photo Album Demo

This page demonstrates two ways to use Google Drive folders for photo albums.

### Method 1: Simple Folder Embed (Easiest - Just Need Folder ID!)

This method uses just your folder ID and embeds the entire Google Drive folder:

{% include google_drive_photo_album.html album="sample-album" %}

### Method 2: Direct Folder ID Usage

Or you can use the folder ID directly without any YAML configuration:

{% include google_drive_photo_album.html folder_id="13lEI2q-TSuRjFczcjYE5p5zBTMjLmCb8" title="My Google Drive Photos" height="600" %}

## Answer to Your Question: 

**Yes! You can use just the folder ID** in two ways:

1. **Folder Embed Mode** (easiest): Set `use_folder_embed: true` in your album YAML file
2. **Direct Embed**: Use `{% raw %}{% include google_drive_folder_embed.html folder_id="YOUR_FOLDER_ID" %}{% endraw %}`

### Pros and Cons:

**Folder ID Only (Embed)**:
- ✅ Super easy - just need the folder ID  
- ✅ Shows all images automatically
- ✅ Users can navigate within the embedded viewer
- ❌ Less control over styling
- ❌ Relies on Google's embed interface

**Individual File IDs (Custom)**:
- ✅ Full control over layout and styling
- ✅ Custom lightbox and interactions  
- ✅ Better mobile experience
- ❌ Requires extracting each file ID
- ❌ More setup work

## Your Folder Setup

Your folder ID: `13lEI2q-TSuRjFczcjYE5p5zBTMjLmCb8`

To use folder embed mode, just set this in your album YAML:

```yaml
title: "My Photo Album"
folder_id: "13lEI2q-TSuRjFczcjYE5p5zBTMjLmCb8"
folder_url: "https://drive.google.com/drive/folders/13lEI2q-TSuRjFczcjYE5p5zBTMjLmCb8?usp=sharing"
use_folder_embed: true
embed_height: "500"
```