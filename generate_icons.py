#!/usr/bin/env python3
"""Generate simple PNG icons for Prompt Clip."""
import struct
import zlib

def create_png(width, height, color_rgb):
    """Create a minimal PNG with a solid color and a white 'P'."""
    def chunk(chunk_type, data):
        c = chunk_type + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)
    
    signature = b'\x89PNG\r\n\x1a\n'
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr = chunk(b'IHDR', ihdr_data)
    
    raw_data = b''
    for y in range(height):
        raw_data += b'\x00'
        for x in range(width):
            cx, cy = width // 2, height // 2
            dx, dy = x - cx, y - cy
            dist = (dx**2 + dy**2) ** 0.5
            radius = width // 2 - 2
            
            if dist <= radius:
                bar_left = int(width * 0.28)
                bar_right = int(width * 0.38)
                bar_top = int(height * 0.18)
                bar_bottom = int(height * 0.82)
                top_bar_bottom = int(height * 0.32)
                top_bar_right = int(width * 0.62)
                mid_bar_top = int(height * 0.42)
                mid_bar_bottom = int(height * 0.56)
                
                is_p = False
                if bar_left <= x <= bar_right and bar_top <= y <= bar_bottom:
                    is_p = True
                if bar_left <= x <= top_bar_right and int(height * 0.18) <= y <= top_bar_bottom:
                    is_p = True
                if top_bar_right - (bar_right - bar_left) <= x <= top_bar_right and top_bar_bottom <= y <= int(height * 0.56):
                    is_p = True
                if bar_left <= x <= top_bar_right and mid_bar_top <= y <= mid_bar_bottom:
                    is_p = True
                
                if is_p:
                    raw_data += b'\xff\xff\xff'
                else:
                    raw_data += bytes(color_rgb)
            else:
                raw_data += bytes(color_rgb)
    
    compressed = zlib.compress(raw_data)
    idat = chunk(b'IDAT', compressed)
    iend = chunk(b'IEND', b'')
    
    return signature + ihdr + idat + iend

color = (16, 185, 129)
for size in [16, 48, 128]:
    png_data = create_png(size, size, color)
    path = f"/home/ericjoye/businesses/prompt-clip/icons/icon{size}.png"
    with open(path, 'wb') as f:
        f.write(png_data)
    print(f"Created icon{size}.png ({len(png_data)} bytes)")
