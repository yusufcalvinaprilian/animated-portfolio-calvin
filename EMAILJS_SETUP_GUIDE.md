# EmailJS Setup Guide - Contact Form to Gmail

## Cara Mengatur EmailJS untuk Mengirim Email dari Form Contact

### 1. Daftar EmailJS Account

1. Buka [EmailJS](https://www.emailjs.com/)
2. Klik "Sign Up" dan buat account baru
3. Verifikasi email Anda

### 2. Setup Email Service

1. Login ke EmailJS Dashboard
2. Klik "Email Services" di sidebar
3. Klik "Add New Service"
4. Pilih "Gmail" sebagai service
5. Login dengan Gmail Anda (yusufcalvinaprilian@gmail.com)
6. Beri nama service, misalnya "gmail_service"
7. Copy **Service ID** yang muncul

### 3. Buat Email Template

1. Klik "Email Templates" di sidebar
2. Klik "Create New Template"
3. Beri nama template, misalnya "contact_form"
4. Gunakan template berikut:

```html
Subject: New Contact Form Message from {{from_name}} Hello Calvin, You have received a new message from your portfolio website: **Name:** {{from_name}} **Email:** {{from_email}} **Subject:** {{subject}} **Message:** {{message}} --- This
message was sent from your portfolio contact form.
```

5. Save template dan copy **Template ID**

### 4. Dapatkan Public Key

1. Klik "Account" di sidebar
2. Klik "API Keys"
3. Copy **Public Key**

### 5. Update Kode

Ganti placeholder di file `app/contact/page.tsx`:

```typescript
// Initialize EmailJS
useEffect(() => {
	emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Ganti dengan Public Key Anda
}, []);

// Di dalam handleSubmit function
await emailjs.send(
	"YOUR_SERVICE_ID_HERE", // Ganti dengan Service ID Anda
	"YOUR_TEMPLATE_ID_HERE", // Ganti dengan Template ID Anda
	templateParams
);
```

### 6. Contoh Kode Lengkap

```typescript
// Initialize EmailJS
useEffect(() => {
	emailjs.init("user_abc123def456"); // Contoh Public Key
}, []);

const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();
	setIsSubmitting(true);

	try {
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			subject: formData.subject,
			message: formData.message,
			to_email: "yusufcalvinaprilian@gmail.com",
		};

		await emailjs.send(
			"service_xyz789", // Service ID
			"template_abc123", // Template ID
			templateParams
		);

		setSubmitStatus("success");
		setFormData({ name: "", email: "", subject: "", message: "" });
	} catch (error) {
		console.error("Error sending email:", error);
		setSubmitStatus("error");
	} finally {
		setIsSubmitting(false);
	}
};
```

### 7. Testing

1. Isi form contact di website Anda
2. Klik "Send Message"
3. Periksa Gmail inbox Anda
4. Email seharusnya masuk dengan format yang sudah ditentukan

### 8. Fitur yang Sudah Diimplementasi

- ✅ Loading state saat mengirim email
- ✅ Success/Error feedback
- ✅ Form reset setelah berhasil
- ✅ Disabled button saat loading
- ✅ Auto-reset status setelah 5 detik

### 9. Troubleshooting

- **Email tidak masuk**: Periksa spam folder
- **Error 400**: Periksa Service ID dan Template ID
- **Error 401**: Periksa Public Key
- **CORS Error**: Pastikan domain sudah di-whitelist di EmailJS

### 10. Keamanan

- Public Key aman untuk digunakan di frontend
- Service ID dan Template ID juga aman
- EmailJS menangani rate limiting otomatis

### 11. Alternatif Template Email

```html
Subject: 🚀 New Opportunity from {{from_name}} Hi Calvin, Great news! Someone reached out through your portfolio: 👤 **Contact Details:** - Name: {{from_name}} - Email: {{from_email}} - Subject: {{subject}} 💬 **Message:** {{message}} ---
Sent from your portfolio contact form at {{timestamp}}
```

### 12. Monitoring

- EmailJS menyediakan dashboard untuk monitoring
- Anda bisa melihat statistik pengiriman email
- Ada log untuk debugging jika ada masalah

Setelah setup selesai, setiap kali ada yang mengisi form contact, Anda akan langsung menerima email di Gmail! 🎉
