# Resume Download Setup Guide

## Cara Mengatur Download Resume dari Google Drive

### 1. Upload Resume ke Google Drive

1. Buka [Google Drive](https://drive.google.com)
2. Upload file resume Anda (PDF, DOC, atau format lainnya)
3. Klik kanan pada file dan pilih "Share"
4. Klik "Copy link"

### 2. Dapatkan File ID

Dari link yang Anda copy, ambil bagian ID file. Contoh:

```
https://drive.google.com/file/d/1ABC123DEF456GHI789/view?usp=sharing
                                    ↑
                                File ID: 1ABC123DEF456GHI789
```

### 3. Update Kode

Ganti `YOUR_GOOGLE_DRIVE_FILE_ID` di file berikut:

#### File: `app/page.tsx`

```typescript
const handleDownloadCV = () => {
	// Ganti YOUR_GOOGLE_DRIVE_FILE_ID dengan ID file Google Drive Anda
	const resumeUrl = "https://drive.google.com/uc?export=download&id=1ABC123DEF456GHI789";
	window.open(resumeUrl, "_blank");
};
```

Dan di komponen Navbar:

```typescript
<Navbar
	logo={{ initials: "CA", text: "CalvinAprilian" }}
	onCtaClick={handleDownloadCV}
	resumeUrl="https://drive.google.com/uc?export=download&id=1ABC123DEF456GHI789"
	// ... other props
/>
```

### 4. Pengaturan Sharing Google Drive

1. Klik kanan pada file resume
2. Pilih "Share"
3. Klik "Change to anyone with the link"
4. Pilih "Viewer" atau "Editor" sesuai kebutuhan
5. Klik "Done"

### 5. Format URL yang Benar

- **Untuk download langsung**: `https://drive.google.com/uc?export=download&id=FILE_ID`
- **Untuk preview**: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`

### 6. Testing

1. Klik tombol "Download CV" di navbar
2. Resume akan terbuka di tab baru
3. Browser akan memulai download otomatis

### Catatan Penting:

- Pastikan file resume Anda tidak terlalu besar (max 100MB untuk download langsung)
- Jika file besar, gunakan link preview dan biarkan user download manual
- Test di berbagai browser untuk memastikan kompatibilitas

### Troubleshooting:

- **File tidak bisa diakses**: Periksa pengaturan sharing di Google Drive
- **Download tidak dimulai**: Coba gunakan link preview sebagai alternatif
- **Error 403**: Pastikan file sudah di-share dengan "anyone with the link"
