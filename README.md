# 🎨 Animated Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a beautiful dark/light mode toggle and smooth animations throughout.

## ✨ Features

- **Modern Design**: Clean, minimalist design with professional aesthetics
- **Dark/Light Mode**: Fully functional theme toggle with localStorage persistence
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Next.js 14**: Latest React framework with App Router

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Poppins (Google Fonts)
- **Deployment**: Vercel

## 📁 Project Structure

```
animated-portfolio/
├── app/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/animated-portfolio.git
   cd animated-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home**: Hero section with introduction and featured projects
- **About**: Personal information, skills, and experience
- **Projects**: Portfolio showcase with filtering options
- **Services**: Offered services and pricing plans
- **Contact**: Contact form and information

## 🎨 Customization

### Colors
The website uses a consistent color scheme:
- **Primary Blue**: `#3B82F6` (blue-600)
- **Secondary Emerald**: `#10B981` (emerald-600)
- **Dark Mode**: Gray scale with blue accents

### Font
- **Primary**: Poppins (Google Fonts)
- **Weights**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)

### Animations
- **Framer Motion**: Smooth transitions and micro-interactions
- **Hover Effects**: Scale, color changes, and subtle movements
- **Scroll Animations**: Elements animate as they enter the viewport

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your repository
   - Deploy automatically

### Environment Variables
No environment variables required for basic functionality.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Portfolio**: [your-portfolio-url]
- **Email**: your-email@example.com
- **LinkedIn**: [your-linkedin]

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
