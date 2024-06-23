import os
import shutil

# Define the base directory
base_dir = '_WIKI'
archive_dir = os.path.join(base_dir, 'archive')

# Create archive directory if it doesn't exist
if not os.path.exists(archive_dir):
    os.makedirs(archive_dir)

# Define the years to archive
years_to_archive = [str(year) for year in range(2023)]

# Define the subdirectories to check
subdirs_to_check = ['blog', 'diary']

# Function to move folders
def move_folders(src, dest):
    if os.path.exists(src):
        shutil.move(src, dest)

# Archive the folders
for subdir in subdirs_to_check:
    subdir_path = os.path.join(base_dir, subdir)
    if os.path.exists(subdir_path):
        for year in years_to_archive:
            year_path = os.path.join(subdir_path, year)
            if os.path.exists(year_path):
                move_folders(year_path, os.path.join(archive_dir, f"{subdir}_{year}"))

print("Archiving complete.")

