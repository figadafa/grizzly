# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## GRIZZLY — Personal Portfolio Website

**Versi:** 1.0  
**Status:** Development  
**Platform:** Web  
**Product Type:** Personal Portfolio Website

---

# 1. Product Overview

## 1.1 Product Description

GRIZZLY adalah personal portfolio website yang dirancang untuk menampilkan identitas, perjalanan akademik, pengalaman organisasi, sertifikasi, pendidikan, serta proyek-proyek yang telah dikembangkan oleh pemiliknya.

Website ini bukan sekadar CV digital. GRIZZLY dirancang sebagai representasi personal branding yang menggabungkan karakter visual industrial, editorial typography, dan interaksi modern.

Website harus mampu menunjukkan kompetensi teknis sekaligus perjalanan pengembangan diri pemiliknya.

## 1.2 Product Vision

Membangun personal portfolio yang memiliki identitas visual kuat, informatif, responsif, dan mampu memberikan gambaran profesional mengenai kemampuan serta perjalanan pemiliknya di bidang teknologi.

## 1.3 Product Objectives

1. Menampilkan identitas dan profil profesional secara menarik.
2. Mendokumentasikan proyek yang pernah dikembangkan.
3. Menampilkan pengalaman organisasi dan aktivitas profesional.
4. Menampilkan sertifikasi sebagai bukti pembelajaran dan kompetensi.
5. Menampilkan latar belakang pendidikan.
6. Menyediakan jalur komunikasi bagi recruiter, kolaborator, maupun pengunjung.
7. Membangun personal branding melalui desain dan konten yang konsisten.

## 1.4 Target Audience

- Recruiter dan perusahaan teknologi.
- Software engineer dan developer.
- Komunitas teknologi.
- Mahasiswa dan akademisi.
- Calon kolaborator proyek.
- Pengunjung yang ingin mengenal pemilik website.

---

# 2. Design Direction & Visual Identity

## 2.1 Design Concept

GRIZZLY menggunakan pendekatan visual:

- Industrial.
- Editorial.
- Minimalist.
- Brutalist-inspired.
- Subtle grunge and graffiti aesthetic.

Desain harus terlihat tegas, modern, dan memiliki karakter. Hindari penggunaan elemen dekoratif secara berlebihan.

## 2.2 Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Asphalt Black | #171717 | Primary background |
| Deep Charcoal | #242424 | Secondary background |
| Concrete Cream | #F0EBE2 | Primary text |
| Hazard Orange | #F36B35 | Accent and highlights |
| Steel Gray | #77736E | Secondary text |

## 2.3 Typography

Typography harus memiliki kontras antara:

- Display typography: judul section yang besar, tegas, dan editorial.
- Body typography: teks deskripsi yang mudah dibaca.
- Metadata typography: tanggal, kategori, label, dan informasi pendukung.

Judul section harus tetap terbaca secara utuh pada berbagai ukuran layar.

## 2.4 Visual Principles

1. Gunakan negative space secara terencana.
2. Pertahankan konsistensi warna dan tipografi.
3. Gunakan hazard orange sebagai aksen, bukan warna dominan.
4. Gunakan animasi untuk memperkuat pengalaman, bukan sekadar dekorasi.
5. Hindari layout yang menyisakan ruang kosong tidak proporsional.
6. Pastikan elemen dekoratif tidak mengganggu keterbacaan konten.

---

# 3. Website Structure

Website menggunakan pendekatan single-page portfolio dengan urutan section berikut:

1. Hero
2. About
3. Projects
4. Experience
5. Certifications
6. Education
7. Contact

Setiap section memiliki identitas visual dan tujuan informasi masing-masing.

---

# 4. Functional Requirements

## 4.1 Hero Section

**Objective:** Memperkenalkan identitas pemilik website dalam beberapa detik pertama.

Requirements:

- Menampilkan nama atau personal identity.
- Menampilkan headline atau professional positioning.
- Menampilkan deskripsi singkat.
- Menyediakan navigasi ke bagian penting website.
- Memiliki visual identity yang konsisten dengan GRIZZLY.
- Mendukung responsive layout.

Acceptance Criteria:

- Pengunjung dapat memahami siapa pemilik website.
- Informasi utama terlihat tanpa harus melakukan banyak scrolling.
- Navigasi dapat digunakan pada desktop maupun mobile.

## 4.2 About Section

**Objective:** Memberikan gambaran mengenai latar belakang, minat, dan fokus pengembangan diri.

Requirements:

- Menampilkan deskripsi personal.
- Menjelaskan bidang teknologi yang diminati.
- Menampilkan fokus pengembangan kompetensi.
- Memiliki transisi visual menuju Projects.
- Menggunakan typography dan spacing yang konsisten.

Acceptance Criteria:

- Informasi dapat dibaca dengan jelas.
- Tidak ada teks yang terpotong.
- Transisi antar-section tidak mengganggu konten.

## 4.3 Projects Section

**Objective:** Menampilkan proyek yang pernah dikembangkan sebagai bukti kemampuan teknis.

Requirements:

- Menampilkan daftar proyek.
- Setiap proyek memiliki:
  - Nama proyek.
  - Deskripsi singkat.
  - Teknologi yang digunakan.
  - Preview image.
  - Link repository atau live demo jika tersedia.
- Menggunakan layout project list/grid.
- Mendukung hover interaction.
- Menampilkan floating project preview mengikuti posisi pointer pada desktop.
- Mendukung navigasi keyboard.
- Menggunakan layout alternatif pada perangkat mobile.

Acceptance Criteria:

- Setiap proyek menampilkan informasi yang relevan.
- Preview tidak keluar dari viewport.
- Floating preview tidak menutupi informasi penting.
- Link proyek berfungsi.
- Gambar tidak menyebabkan beban loading berlebihan.
- Layout tetap terbaca pada layar kecil.

## 4.4 Experience Section

**Objective:** Menampilkan perjalanan pengalaman organisasi dan kontribusi pemilik website.

Requirements:

- Menampilkan timeline pengalaman.
- Setiap pengalaman memiliki:
  - Role atau jabatan.
  - Nama organisasi.
  - Periode.
  - Kategori pengalaman.
  - Deskripsi tanggung jawab dan kontribusi.
- Menggunakan timeline visual.
- Memiliki animasi reveal ketika section mulai terlihat.
- Menjaga keseimbangan antara kolom editorial dan timeline.

Acceptance Criteria:

- Timeline tersusun berdasarkan kronologi yang benar.
- Informasi setiap pengalaman mudah dipahami.
- Tinggi layout mengikuti kebutuhan konten.
- Tidak ada ruang kosong yang ber