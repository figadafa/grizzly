/*
  DATA PROYEK
  Jumlah "(05)" di judul dihitung otomatis dari panjang array ini.

  Field:
    id     : string unik
    title  : nama proyek
    type   : jenis proyek
    role   : peran kamu
    year   : tahun (string)
    image  : path gambar preview di /public, atau null untuk placeholder
    alt    : deskripsi gambar untuk pembaca layar
    href   : link tujuan (demo atau detail), atau null jika belum tersedia
*/
export const PROJECTS = [
  {
    id: 'project-01',
    title: 'ReviewLens',
    type: 'Machine Learning / Data Science',
    role: 'Machine Learning Developer',
    year: '2026',
    alt: 'ReviewLens sentiment analysis visualization',
    href: 'https://reviewlensapp.streamlit.app/',
    placeholder: false,
  },
  {
    id: 'project-02',
    title: 'Academic Stress Analysis',
    type: 'Data Science / Machine Learning',
    role: 'Data Science Developer',
    year: '2025',
    alt: 'Academic Stress Analysis dashboard',
    href: null,
    placeholder: false,
  },
  {
    id: 'project-03',
    title: 'SiLuPa',
    type: 'Web & AI integration',
    role: 'Data Management & Processing',
    year: '2024',
    alt: 'A collaborative rice storage management system evolving from a C++ application into a modern inventory platform with dashboard visualization and AI-powered data insights.',
    href: '',
    placeholder: false,
  },
  {
    id: 'project-04',
    title: 'SIMORG',
    type: 'Desktop Application',
    role: 'Java Developer & Data Persistence',
    year: '2024',
    image: '/images/Thumbnail1.png',
    href: 'https://github.com/akbarrt/simorg-java-inventory',
    alt: 'SIMORG is a desktop application designed to manage and organize data efficiently, providing users with a seamless experience in handling their information.',
    placeholder: false,
  },
  {
    id: 'project-05',
    title: 'Old Web Portofolio',
    type: 'Web Portfolio',
    role: 'Web Developer',
    year: '2026',
    alt: 'Old Web Portfolio showcasing my skills and projects.',
    href: 'https://github.com/figadafa/web-porto',
    placeholder: false,
  },
];