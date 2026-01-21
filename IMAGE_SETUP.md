# شوبكيچু - Product & Assets Setup Guide

## Image Placement Instructions

Your product images should be placed in the `/public/products/` directory. The app is currently configured to look for these files:

### Required Product Images
1. **Hero/Banner Image** (top of page):
   - Place in: `/public/hero-banner.jpg`
   - Recommended size: 1200×600px
   - Format: JPG or PNG

2. **Product Images**:
   - `cooker-white.jpg` → For the first white cooker (৭.५ লিটার)
   - `cooker-blue.jpg` → For the blue cooker (७.२ লिटर)
   - `cooker-white-mini.jpg` → For the smaller white cooker (६.५ लिटर)
   - Recommended size per image: 500×500px
   - Format: JPG or PNG

### Directory Structure
```
shobkichu_app/
├── public/
│   ├── hero-banner.jpg          (your hero/banner image)
│   └── products/
│       ├── cooker-white.jpg
│       ├── cooker-blue.jpg
│       └── cooker-white-mini.jpg
```

## How to Update Images

1. **Add your images** to the paths listed above
2. **The app will automatically use them** when you refresh the browser
3. **No code changes needed** – the image paths are centralized in `/data/products.ts`

## Product Data & Pricing (Easily Editable)

All product details are in `/data/products.ts`:
- Product names (Bangla)
- Capacity (in liters)
- Price (in BDT)
- Descriptions

Edit this file to update prices, capacities, or descriptions instantly.

## Copy & Content (Easily Editable)

All Bangla text/content is in `/utils/copy.ts`:
- Hero taglines
- Product feature descriptions
- Benefits section
- Footer text
- Form labels
- Success messages

Update this file to change any visible text across the site.

---

**Once you've uploaded your images, the app will display them immediately on refresh!**
