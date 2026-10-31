/*
  DATA PROYEK
  Ganti seluruh isi PROJECTS dengan proyek aslimu. Jumlah "(05)" di judul
  dihitung otomatis dari panjang array ini.

  Field:
    id     : string unik
    title  : nama proyek
    type   : jenis proyek (mis. "WEB DESIGN & BUILD")
    role   : peran kamu
    year   : tahun (string)
    image  : path gambar preview di /public (mis. "/images/projects/nama.jpg"),
             atau null untuk memakai tile placeholder
    alt    : deskripsi gambar untuk pembaca layar
    href   : link tujuan, atau null jika detail proyek belum tersedia

  Entri di bawah ini hanya placeholder (placeholder: true). Jangan dipublikasikan
  sebagai konten final.
*/
export const PROJECTS = [
  {
    id: 'project-01',
    title: 'ReviewLens',
    type: 'Machine Learning / Data Science',
    role: 'Machine Learning Developer',
    year: '2026',
    image: '/images/Thumbnail1.png',
    alt: 'ReviewLens sentiment analysis visualization',
    href: null,
    placeholder: false,
  },
  {
    id: 'project-02',
    title: 'Academic Stress Analysis',
    type: ' Data Science / Machine Learning',
    role: 'Data Science Developerr',
    year: '2025',
    image: '/images/Thumbnail2.png',
    alt: 'Academic Stress Analysis dashboard',
    href: null,
    placeholder: false,
  },
  {
    id: 'project-03',
    title: 'Nama Proyek 03',
    type: 'TIPE PROYEK',
    role: 'ROLE',
    year: '20XX',
    image: null,
    alt: '',
    href: null,
    placeholder: true,
  },
  {
    id: 'project-04',
    title: 'Nama Proyek 04',
    type: 'TIPE PROYEK',
    role: 'ROLE',
    year: '20XX',
    image: null,
    alt: '',
    href: null,
    placeholder: true,
  },
  {
    id: 'project-05',
    title: 'Nama Proyek 05',
    type: 'TIPE PROYEK',
    role: 'ROLE',
    year: '20XX',
    image: null,
    alt: '',
    href: null,
    placeholder: true,
  },
];