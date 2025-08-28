# 🚀 Animated Portfolio - Calvin Aprilian

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion. Features smooth animations, interactive components, and a professional design optimized for all devices.

## ✨ Features

### 🎨 **Modern Design**

- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Automatic theme switching
- **Smooth Animations**: Powered by Framer Motion
- **Professional UI**: Clean, modern interface with Tailwind CSS

### 📱 **Responsive Design**

- **Mobile-First**: Perfect experience on all screen sizes
- **Touch-Friendly**: Optimized touch targets and interactions
- **Flexible Layout**: Adaptive grid systems and typography
- **Performance Optimized**: Fast loading and smooth interactions

### 🎯 **Interactive Components**

- **Typing Animation**: Dynamic text with letter-by-letter typing effect
- **Infinite Scroll**: Smooth scrolling skills carousel
- **Parallax Effects**: Engaging background animations
- **Hover Interactions**: Rich interactive elements

### 📞 **Contact Integration**

- **WhatsApp Integration**: Direct messaging to personal number
- **Form Validation**: User-friendly contact forms
- **Social Links**: Professional social media integration

### 📄 **Resume Download**

- **Google Drive Integration**: Direct resume download
- **CTA Buttons**: Optimized call-to-action buttons
- **Professional Presentation**: Clean download experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (Google Fonts)
- **Deployment**: Vercel

## 📁 Project Structure

```
animated-portfolio/
├── app/
│   ├── components/          # Reusable components
│   │   ├── AnimatedText.tsx # Typing animation component
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── TechIcon.tsx     # Technology icons
│   │   └── ...
│   ├── about/              # About page
│   ├── contact/            # Contact page with WhatsApp
│   ├── projects/           # Projects showcase
│   ├── services/           # Skills and services
│   └── page.tsx            # Home page
├── public/
│   └── images/             # Static assets
└── docs/                   # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/animated-portfolio.git

# Navigate to project directory
cd animated-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📱 Responsive Features

### Mobile Optimization

- **Touch-Friendly Buttons**: 44px minimum touch targets
- **Optimized Typography**: Readable text sizes across devices
- **Flexible Layouts**: Adaptive grid systems
- **Smooth Interactions**: Optimized animations for mobile

### Desktop Enhancement

- **Hover Effects**: Rich interactive elements
- **Advanced Animations**: Complex motion effects
- **Professional Layout**: Full-featured desktop experience

## 🎯 Key Components

### AnimatedText Component

```typescript
<AnimatedText texts={["Frontend Developer", "React Specialist"]} interval={4000} typingSpeed={80} />
```

### Responsive CTA Buttons

```typescript
<motion.button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">Call to Action</motion.button>
```

### WhatsApp Contact Form

- Direct integration with personal WhatsApp
- Pre-filled message formatting
- Professional contact experience

## 📄 Documentation

### Setup Guides

- [Resume Download Setup](RESUME_DOWNLOAD_SETUP.md)
- [WhatsApp Contact Setup](WHATSAPP_CONTACT_SETUP.md)
- [Profile Image Setup](PROFILE_IMAGE_SETUP.md)
- [Favicon Setup](FAVICON_SETUP.md)

### Implementation Guides

- [Responsive Design](RESPONSIVE_IMPROVEMENTS.md)
- [CTA Button Improvements](CTA_BUTTON_IMPROVEMENTS.md)
- [Modern Portfolio Implementation](MODERN_PORTFOLIO_IMPLEMENTATION.md)
- [Multi-Page Navigation](MULTI_PAGE_NAVIGATION.md)

### Component Documentation

- [Navbar Documentation](NAVBAR_DOCUMENTATION.md)
- [Navbar Improvements](NAVBAR_IMPROVEMENTS.md)
- [Poppins Font Implementation](POPPINS_FONT_IMPLEMENTATION.md)

## 🎨 Customization

### Profile Information

Update your personal information in the respective page components:

- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/contact/page.tsx` - Contact information

### Styling

- **Colors**: Modify Tailwind config for brand colors
- **Fonts**: Update font families in Tailwind config
- **Animations**: Customize Framer Motion animations

### Content

- **Projects**: Add your projects in `app/projects/page.tsx`
- **Skills**: Update skills in `app/services/page.tsx`
- **Experience**: Modify experience in `app/about/page.tsx`

## 📊 Performance

### Optimization Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for fast loading
- **Bundle Optimization**: Optimized JavaScript bundles

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel --prod
```

### Other Platforms

- **Netlify**: Compatible with static export
- **GitHub Pages**: Requires static export configuration
- **Custom Server**: Node.js deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Next.js** for the amazing framework

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Email**: [Your Email]

---

⭐ **Star this repository if you found it helpful!**
