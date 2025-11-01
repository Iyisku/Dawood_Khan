# Cloudinary Setup Guide for Image Uploads

## Overview
Your portfolio now supports image uploads for projects through Cloudinary, a free image hosting and CDN service.

## Setup Steps

### 1. Create Cloudinary Account
- Go to https://cloudinary.com/
- Sign up for a free account
- Verify your email

### 2. Get Your Cloud Name
- After login, go to Dashboard
- Copy your **Cloud Name** (visible at the top)

### 3. Create Upload Preset
- Go to **Settings** → **Upload**
- Click "Add upload preset"
- Name it: `portfolio_upload` (or any name you prefer)
- Set **Signing Mode**: `Unsigned`
- Click "Save"

### 4. Update Environment Variables
In `.env.local`, replace:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```
With your actual Cloud Name from step 2.

### 5. Update Upload Preset in Component
In `Components/ImageUploadWidget.tsx`, update line 17:
```javascript
uploadPreset="portfolio_upload" // Change to your preset name
```

## Using Image Uploads

### In Admin Panel
1. Go to admin → Projects
2. Click "Add New Project" or "Edit" existing project
3. In the "Project Image" field, click "Upload Image" button
4. Select an image from your computer
5. Image will be uploaded to Cloudinary and URL saved to database

### Alternative: Paste Image URL
If you have a direct image URL (from any source), you can paste it directly in the text field below the upload button.

## Features
- ✅ Free tier: 25GB storage, unlimited requests
- ✅ Automatic image optimization
- ✅ CDN distribution (fast loading worldwide)
- ✅ No backend storage needed
- ✅ Simple URL-based integration

## Notes
- Images are stored in Cloudinary's secure servers
- Free tier is perfect for portfolio projects
- No code changes needed on backend
- Images display automatically in projects page

## Troubleshooting

### Upload button not working?
- Verify Cloud Name is set correctly in `.env.local`
- Restart dev server after changing env variables
- Check upload preset name matches

### Images not displaying?
- Verify image URL is accessible
- Check Cloudinary dashboard for upload history
- Ensure MongoDB has the image URL saved

## Resources
- Cloudinary Dashboard: https://cloudinary.com/console
- API Docs: https://cloudinary.com/documentation
- Help: https://cloudinary.com/support
