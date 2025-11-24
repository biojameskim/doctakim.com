import os
from PIL import Image, ImageDraw

def process_favicon():
    # Paths
    source_path = 'public/favicon_io/android-chrome-512x512.png'
    output_dir = 'public/favicon_io'
    
    # Sizes to generate
    sizes = {
        'favicon-16x16.png': (16, 16),
        'favicon-32x32.png': (32, 32),
        'apple-touch-icon.png': (180, 180),
        'android-chrome-192x192.png': (192, 192),
        'android-chrome-512x512.png': (512, 512)
    }

    print(f"Processing {source_path}...")
    
    try:
        img = Image.open(source_path).convert("RGBA")
    except FileNotFoundError:
        print(f"Error: Source file {source_path} not found.")
        return

    # Create a circular mask
    size = img.size
    mask = Image.new('L', size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + size, fill=255)

    # Apply mask
    output = Image.new('RGBA', size, (0, 0, 0, 0))
    output.paste(img, (0, 0), mask=mask)

    # Save resized versions
    for filename, dims in sizes.items():
        resized = output.resize(dims, Image.Resampling.LANCZOS)
        save_path = os.path.join(output_dir, filename)
        resized.save(save_path, 'PNG')
        print(f"Saved {save_path}")

if __name__ == "__main__":
    process_favicon()
