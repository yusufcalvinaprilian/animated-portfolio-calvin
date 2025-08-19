# 🚀 Deployment Guide - Animated Portfolio

Panduan lengkap untuk mendeploy portfolio website ke GitHub dan Vercel.

## 📋 Prerequisites

- ✅ Node.js 18+ terinstall
- ✅ Git terinstall dan dikonfigurasi
- ✅ Akun GitHub
- ✅ Akun Vercel

## 🔧 Setup Local Development

### 1. Clone Repository
```bash
git clone https://github.com/yusufcalvinaprilian/animated-portfolio-calvin.git
cd animated-portfolio-calvin
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build untuk Production
```bash
npm run build
```

## 🌐 GitHub Setup

### 1. Buat Repository Baru
1. Buka [GitHub.com](https://github.com)
2. Klik tombol "+" → "New repository"
3. Isi informasi:
   - **Name**: `animated-portfolio`
   - **Description**: `Modern portfolio website with dark mode and animations`
   - **Visibility**: Public/Private
   - **Jangan centang** README, .gitignore, license (sudah ada)
4. Klik "Create repository"

### 2. Push Code ke GitHub
```bash
# Jika belum ada git repository
git init
git branch -m main

# Tambahkan remote origin
git remote add origin https://github.com/YOUR_USERNAME/animated-portfolio.git

# Commit dan push
git add .
git commit -m "Initial commit: Modern portfolio website"
git push -u origin main
```

## 🚀 Vercel Deployment

### 1. Setup Vercel
1. Buka [Vercel.com](https://vercel.com)
2. Sign in dengan GitHub
3. Klik "New Project"

### 2. Import Repository
1. Pilih repository `animated-portfolio`
2. Klik "Import"
3. Konfigurasi:
   - **Framework Preset**: Next.js (auto-detect)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Klik "Deploy"

### 3. Konfigurasi Lanjutan

#### Environment Variables
Untuk project ini tidak diperlukan environment variables.

#### Custom Domain
1. Di dashboard Vercel, pilih project
2. Klik "Settings" → "Domains"
3. Tambahkan domain custom Anda
4. Ikuti instruksi DNS setup

#### Analytics
1. Klik "Settings" → "Analytics"
2. Aktifkan Vercel Analytics
3. Tambahkan tracking code jika diperlukan

## 📊 Monitoring & Maintenance

### 1. Performance Monitoring
- **Vercel Analytics**: Track user behavior
- **Core Web Vitals**: Monitor performance metrics
- **Error Tracking**: Monitor runtime errors

### 2. Regular Updates
```bash
# Update dependencies
npm update

# Test build
npm run build

# Commit dan push changes
git add .
git commit -m "Update dependencies"
git push origin main
```

### 3. Backup Strategy
- **GitHub**: Code backup otomatis
- **Vercel**: Deployment history tersimpan
- **Local**: Simpan backup lokal

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

#### 2. Deployment Issues
- Periksa build logs di Vercel dashboard
- Pastikan semua dependencies terinstall
- Cek TypeScript errors

#### 3. Performance Issues
- Optimize images
- Enable compression
- Use CDN untuk static assets

## 📱 Post-Deployment Checklist

- ✅ Website berfungsi di semua device
- ✅ Dark/Light mode toggle berfungsi
- ✅ Animations smooth di semua browser
- ✅ Contact form berfungsi (jika ada backend)
- ✅ SEO meta tags terisi
- ✅ Social media links aktif
- ✅ Analytics tracking aktif
- ✅ Performance score > 90

## 🔄 Continuous Deployment

### Automatic Deployments
- Setiap push ke `main` branch akan auto-deploy
- Preview deployments untuk pull requests
- Rollback ke deployment sebelumnya jika ada masalah

### Manual Deployments
```bash
# Deploy dari local
vercel

# Deploy ke production
vercel --prod
```

## 📞 Support

Jika ada masalah dengan deployment:

1. **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
3. **GitHub Issues**: Buat issue di repository

## 🎉 Success!

Setelah deployment berhasil, website Anda akan tersedia di:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (jika dikonfigurasi)

---

**Happy Deploying! 🚀**
