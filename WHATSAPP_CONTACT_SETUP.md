# WhatsApp Contact Form Setup

## Fitur Form Contact ke WhatsApp

Form contact di halaman `/contact` sekarang mengirim pesan langsung ke WhatsApp Anda.

### 🎯 **Cara Kerja:**

1. **Pengunjung mengisi form** dengan informasi:
   - Nama
   - Email
   - Subject
   - Message

2. **Sistem memformat pesan** dengan template yang rapi:
   ```
   *New Message from Portfolio Website*
   
   👤 *Name:* [Nama Pengirim]
   📧 *Email:* [Email Pengirim]
   📝 *Subject:* [Subjek Pesan]
   
   💬 *Message:*
   [Isi Pesan]
   
   ---
   Sent from your portfolio contact form
   ```

3. **Pesan dikirim ke WhatsApp** Anda di nomor `+6281393242056`

### 📱 **Keuntungan WhatsApp Contact:**

- ✅ **Real-time**: Pesan langsung masuk ke WhatsApp
- ✅ **Mudah diakses**: Bisa dibaca dari mana saja
- ✅ **Cepat merespon**: Notifikasi langsung di HP
- ✅ **Tidak perlu setup**: Langsung berfungsi
- ✅ **Gratis**: Tidak ada biaya tambahan

### 🔧 **Implementasi:**

```typescript
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `*New Message from Portfolio Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
Sent from your portfolio contact form`;

    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6281393242056?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
};
```

### 🎨 **UI/UX Features:**

- **Green Theme**: Tombol dan notifikasi menggunakan warna hijau WhatsApp
- **Clear Instructions**: Pengunjung tahu pesan akan dikirim ke WhatsApp
- **Form Reset**: Form otomatis kosong setelah dikirim
- **Responsive**: Bekerja di desktop dan mobile

### 📋 **Template Pesan WhatsApp:**

Pesan yang akan diterima di WhatsApp Anda:

```
*New Message from Portfolio Website*

👤 *Name:* John Doe
📧 *Email:* john@example.com
📝 *Subject:* Job Opportunity
💬 *Message:*
Hi Calvin, I saw your portfolio and I'm interested in discussing a potential collaboration for our upcoming project. Would you be available for a call?

---
Sent from your portfolio contact form
```

### 🚀 **Testing:**

1. Buka halaman `/contact`
2. Isi form dengan data test
3. Klik "Send via WhatsApp"
4. WhatsApp Web/App akan terbuka dengan pesan yang sudah diformat
5. Klik "Send" di WhatsApp

### 📱 **Kompatibilitas:**

- **Desktop**: Buka WhatsApp Web
- **Mobile**: Buka WhatsApp App
- **Semua Browser**: Chrome, Firefox, Safari, Edge
- **Semua OS**: Windows, macOS, Linux, iOS, Android

### 🔒 **Keamanan:**

- Tidak ada data yang disimpan di server
- Pesan langsung dikirim ke WhatsApp Anda
- Tidak ada third-party service yang terlibat
- Privasi pengunjung terjaga

### 💡 **Tips Penggunaan:**

1. **Respon Cepat**: Karena pesan masuk WhatsApp, Anda bisa langsung merespon
2. **Backup Contact**: Simpan nomor pengirim untuk follow-up
3. **Professional Reply**: Gunakan template balasan yang profesional
4. **Follow-up**: Kirim email follow-up jika diperlukan

Sekarang setiap pengunjung yang mengisi form contact akan langsung mengirim pesan ke WhatsApp Anda! 🎉
