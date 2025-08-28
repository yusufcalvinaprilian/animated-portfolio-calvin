# Profile Image Setup Guide

## Current Configuration

### Image Details

- **File Name**: `Foto Formal Calvin.png`
- **Location**: `/public/images/profile/`
- **Full Path**: `/public/images/profile/Foto Formal Calvin.png`
- **Usage**: Displayed on the home page in the About section

### Implementation

The profile image is implemented in `app/page.tsx` with the following features:

```tsx
<img src="/images/profile/Foto Formal Calvin.png" alt="Calvin Aprilian - Frontend Developer" className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110" />
```

### Features

- **Responsive Design**: Scales appropriately on all devices
- **Hover Effects**: Subtle scale animation on hover
- **Fallback Handling**: Graceful error handling if image fails to load
- **Optimization**: Next.js automatic image optimization
- **Accessibility**: Proper alt text for screen readers

## Recent Updates

### Profile Image Change

- **Previous**: `calvin profile .png`
- **Current**: `Foto Formal Calvin.png`
- **Reason**: Updated to more professional formal photo
- **Status**: ✅ Successfully implemented and tested

## How to Update

### 1. Replace the Image

1. Place your new profile image in `/public/images/profile/`
2. Update the `src` attribute in `app/page.tsx`
3. Ensure the image is optimized for web (recommended: 400x400px or larger)

### 2. Update the Code

```tsx
// In app/page.tsx, line ~310
<img
	src="/images/profile/YOUR_NEW_IMAGE.png" // Update this line
	alt="Calvin Aprilian - Frontend Developer"
	className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
/>
```

### 3. Test the Changes

- Run `npm run dev` to test locally
- Verify the image displays correctly
- Check responsive behavior on different screen sizes

## Best Practices

### Image Specifications

- **Format**: PNG or JPG
- **Size**: 400x400px minimum (square aspect ratio recommended)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High quality, professional appearance

### Optimization Tips

- Use tools like TinyPNG to compress images
- Consider using WebP format for better compression
- Test loading speed on slower connections
- Ensure the image looks good in both light and dark modes

## Troubleshooting

### Common Issues

1. **Image Not Loading**: Check file path and permissions
2. **Poor Quality**: Ensure high-resolution source image
3. **Slow Loading**: Optimize image file size
4. **Layout Issues**: Verify responsive CSS classes

### Fallback Implementation

The current implementation includes fallback handling:

```tsx
onError={(e) => {
  const target = e.target as HTMLImageElement;
  target.style.display = "none";
  const fallback = target.nextElementSibling as HTMLElement;
  if (fallback) {
    fallback.classList.remove("hidden");
    fallback.classList.add("flex");
  }
}}
```

## Conclusion

The profile image setup is complete and working properly. The updated formal photo displays correctly on the home page with responsive design and smooth animations.
