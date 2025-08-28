# EmailJS Environment Configuration

## Buat file .env.local di root project

Buat file `.env.local` di folder root project Anda dan isi dengan konfigurasi berikut:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## Update kode untuk menggunakan environment variables

Setelah setup EmailJS, update file `app/contact/page.tsx`:

```typescript
// Initialize EmailJS
useEffect(() => {
	emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}, []);

// Di dalam handleSubmit function
await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, templateParams);
```

## Contoh nilai yang sebenarnya

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123def456ghi789
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xyz789abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_def456ghi789
```

## Keamanan

- File `.env.local` tidak akan di-commit ke git
- Tambahkan `.env.local` ke `.gitignore` jika belum ada
- Environment variables dengan prefix `NEXT_PUBLIC_` akan tersedia di client-side
