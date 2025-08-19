# Multi-Page Navigation Feature

## 🎯 Overview

Portfolio website dengan navigasi antar halaman yang lengkap, menggantikan navigasi smooth scroll dengan routing antar halaman yang proper menggunakan Next.js App Router.

## 📁 Struktur Halaman

### 1. **Home Page** (`/`)

- Hero section dengan introduction
- About section preview
- Featured projects
- Skills showcase
- Services overview
- Contact CTA

### 2. **About Page** (`/about`)

- Detailed personal information
- Skills & expertise breakdown
- Work experience timeline
- Professional background
- Call-to-action sections

### 3. **Projects Page** (`/projects`)

- Portfolio showcase
- Project filtering by category
- Detailed project descriptions
- Technology stack display
- Live demo & source code links
- Project statistics

### 4. **Services Page** (`/services`)

- Service offerings
- Pricing plans
- Work process explanation
- Service features
- Consultation options

### 5. **Contact Page** (`/contact`)

- Contact form
- Contact information
- FAQ section
- Availability status
- Social media links

## 🔧 Fitur Navigasi

### Active Page Indicator

- **Desktop**: Underline indicator pada menu yang aktif
- **Mobile**: Background highlight pada menu yang aktif
- **Logo**: Selalu mengarah ke halaman home

### Responsive Navigation

- **Desktop**: Horizontal menu dengan semua item terlihat
- **Mobile**: Hamburger menu dengan animasi smooth
- **Tablet**: Adaptive layout yang optimal

### Navigation State Management

```tsx
const pathname = usePathname(); // Next.js hook untuk current path

// Active state styling
className={`${
  pathname === item.href
    ? "text-white" // Active state
    : "text-gray-300 hover:text-white" // Inactive state
}`}
```

## 🎨 Komponen yang Diperbarui

### Navbar Component

- **Props**: Mendukung custom navigation items
- **Active State**: Indikator halaman aktif
- **Mobile Menu**: Auto-close saat navigasi
- **Logo**: Link ke home page

### Page Components

- **Consistent Layout**: Semua halaman menggunakan layout yang sama
- **Shared Navbar**: Navbar yang konsisten di semua halaman
- **Responsive Design**: Optimized untuk semua device

## 📱 Responsive Behavior

### Desktop (1024px+)

- Full horizontal navigation
- Active page indicator
- CTA button di kanan
- Logo dengan hover effects

### Tablet (768px-1023px)

- Hamburger menu
- Collapsible navigation
- Touch-optimized targets

### Mobile (<768px)

- Hamburger menu
- Full-width mobile menu
- Active state highlighting
- Larger touch targets

## 🚀 Cara Menggunakan

### Basic Navigation Setup

```tsx
<Navbar
	logo={{ initials: "CA", text: "CalvinAprilian" }}
	navItems={[
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/services", label: "Services" },
		{ href: "/contact", label: "Contact" },
	]}
	onCtaClick={handleDownloadCV}
/>
```

### Custom Navigation Items

```tsx
const customNavItems = [
	{ href: "/", label: "Home" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/blog", label: "Blog" },
	{ href: "/services", label: "Services" },
	{ href: "/contact", label: "Get In Touch" },
];

<Navbar navItems={customNavItems} />;
```

## 🎯 Fitur Halaman

### Home Page Features

- **Hero Section**: Introduction dengan CTA buttons
- **About Preview**: Quick overview dengan link ke halaman about
- **Projects Showcase**: Featured projects dengan link ke halaman projects
- **Skills Display**: Technology stack showcase
- **Services Overview**: Service preview dengan link ke halaman services
- **Contact CTA**: Call-to-action untuk contact

### About Page Features

- **Personal Information**: Detailed background
- **Skills Breakdown**: Categorized skills display
- **Experience Timeline**: Work history
- **Professional Stats**: Years of experience, projects completed
- **CTA Sections**: Links ke projects dan contact

### Projects Page Features

- **Project Grid**: Responsive project cards
- **Category Filtering**: Filter by project type
- **Technology Tags**: Tech stack per project
- **Project Links**: Live demo dan source code
- **Statistics**: Project completion stats

### Services Page Features

- **Service Cards**: Detailed service descriptions
- **Pricing Plans**: Multiple pricing tiers
- **Process Steps**: Work methodology
- **Service Features**: Detailed feature lists
- **CTA Buttons**: Contact dan quote requests

### Contact Page Features

- **Contact Form**: Functional form dengan validation
- **Contact Information**: Email, phone, location, social media
- **FAQ Section**: Common questions
- **Availability Status**: Real-time availability indicator
- **Form Submission**: Form handling dengan feedback

## 🔗 Internal Linking

### Cross-Page Navigation

- **Home → Projects**: "View My Work" button
- **Home → About**: "Learn More About Me" button
- **Home → Services**: "View All Services" button
- **Home → Contact**: "Get In Touch" button
- **All Pages → Contact**: CTA buttons untuk contact

### Consistent CTA Strategy

- **Primary CTA**: Gradient buttons untuk main actions
- **Secondary CTA**: Outline buttons untuk secondary actions
- **Navigation CTA**: Consistent placement di semua halaman

## 🎨 Design Consistency

### Color Scheme

- **Primary**: Purple to pink gradient
- **Background**: Dark slate with purple accents
- **Text**: White, gray-300, gray-400 hierarchy
- **Accents**: Purple-500, pink-500 for highlights

### Typography

- **Headings**: Bold, large text dengan gradient effects
- **Body**: Readable gray text
- **Buttons**: Semibold dengan proper spacing

### Spacing & Layout

- **Container**: Consistent max-width dan padding
- **Sections**: Uniform vertical spacing
- **Cards**: Consistent border radius dan shadows

## ⚡ Performance Optimizations

### Next.js App Router

- **File-based Routing**: Automatic route generation
- **Code Splitting**: Automatic per-page code splitting
- **Prefetching**: Automatic link prefetching
- **SSR/SSG**: Server-side rendering untuk SEO

### Navigation Performance

- **Client-side Navigation**: Fast page transitions
- **Active State Management**: Efficient state updates
- **Mobile Menu**: Optimized animations
- **Scroll Management**: Proper scroll behavior

## 🔍 SEO Benefits

### Page Structure

- **Semantic HTML**: Proper heading hierarchy
- **Meta Tags**: Page-specific meta information
- **URL Structure**: Clean, descriptive URLs
- **Internal Linking**: Proper link structure

### Content Organization

- **Focused Pages**: Each page has specific purpose
- **Clear Navigation**: Easy to understand site structure
- **Call-to-Actions**: Clear user journey
- **Contact Information**: Easily accessible

## 🛠️ Technical Implementation

### File Structure

```
app/
├── page.tsx              # Home page
├── about/
│   └── page.tsx         # About page
├── projects/
│   └── page.tsx         # Projects page
├── services/
│   └── page.tsx         # Services page
├── contact/
│   └── page.tsx         # Contact page
└── components/
    └── Navbar.tsx       # Navigation component
```

### Key Dependencies

- **Next.js 13+**: App Router untuk routing
- **React 18+**: Modern React features
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling

## 📈 Future Enhancements

### Planned Features

1. **Page Transitions**: Smooth page transition animations
2. **Breadcrumbs**: Navigation breadcrumbs
3. **Search Functionality**: Site-wide search
4. **Blog Integration**: Blog section dengan CMS
5. **Portfolio Filtering**: Advanced project filtering

### Performance Improvements

1. **Image Optimization**: Next.js Image component
2. **Lazy Loading**: Component lazy loading
3. **Caching**: Service worker implementation
4. **Analytics**: Page view tracking
