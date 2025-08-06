import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "catetin-mobile-app",
    title: "Catetin Mobile First App",
    description: "Aplikasi untuk menghitung pengeluaran uang untuk keseharian",
    longDescription:
      "Catetin adalah aplikasi mobile-first yang dirancang untuk membantu pengguna mengelola keuangan pribadi dengan mudah dan efisien. Aplikasi ini memungkinkan pengguna untuk mencatat pengeluaran harian, mengkategorikan transaksi, dan melihat laporan keuangan dalam berbagai format visualisasi.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Tanstack Query",
      "Shadcn UI",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Vercel",
    ],
    image: "/images/catetin/Catetin1.png",
    images: [
      "/images/catetin/Catetin1.png",
      "/images/catetin/Catetin2.png",
      "/images/catetin/Catetin3.png",
    ],
    demoUrl: "https://catetin-demo.vercel.app",
    sourceCodeUrl: "https://github.com/muddatsir/catetin-app",
    role: "Full Stack Developer",
    challenges: [
      {
        problem:
          "Performa aplikasi lambat saat menampilkan data transaksi dalam jumlah besar",
        solution:
          "Mengimplementasikan pagination dengan infinite scroll menggunakan Tanstack Query dan optimasi database dengan proper indexing pada kolom tanggal dan kategori",
      },
      {
        problem: "Sinkronisasi data real-time antar device pengguna",
        solution:
          "Menggunakan optimistic updates dengan Tanstack Query untuk UX yang responsif, dikombinasikan dengan WebSocket untuk real-time sync",
      },
    ],
    features: [
      "Pencatatan pengeluaran dengan kategori",
      "Dashboard dengan grafik interaktif",
      "Export laporan ke PDF/Excel",
      "Reminder untuk pencatatan rutin",
      "Dark/Light mode",
      "Responsive design untuk semua device",
    ],
    status: "completed",
    category: "fullstack",
  },
  {
    id: "ug-bangunan-website",
    title: "UG Bangunan Website Profil",
    description:
      "Website profil perusahaan konstruksi dengan sistem manajemen proyek",
    longDescription:
      "Website profil perusahaan UG Bangunan yang dilengkapi dengan sistem manajemen proyek internal. Website ini menampilkan portfolio perusahaan, layanan, dan menyediakan portal untuk klien melacak progress proyek mereka.",
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Cloudinary",
    ],
    image: "/images/UGbangunan/UGbangunan1.png",
    images: [
      "/images/UGbangunan/UGbangunan1.png",
      "/images/UGbangunan/UGbangunan2.png",
      "/images/UGbangunan/UGbangunan3.png",
    ],
    demoUrl: "https://ugbangunan.com",
    sourceCodeUrl: "https://github.com/muddatsir/ug-bangunan-website",
    role: "Full Stack Developer & UI/UX Designer",
    challenges: [
      {
        problem:
          "Kebutuhan upload dan manajemen foto proyek dalam jumlah besar",
        solution:
          "Mengintegrasikan Cloudinary untuk optimasi dan kompresi gambar otomatis, serta implementasi lazy loading untuk performa yang lebih baik",
      },
      {
        problem: "Sistem tracking progress proyek yang kompleks",
        solution:
          "Membuat dashboard admin dengan milestone tracking dan notification system menggunakan MongoDB aggregation pipeline",
      },
    ],
    features: [
      "Company profile & portfolio showcase",
      "Project management dashboard",
      "Client portal untuk tracking progress",
      "Image gallery dengan lightbox",
      "Contact form dengan WhatsApp integration",
      "SEO optimized untuk local search",
    ],
    status: "completed",
    category: "fullstack",
  },
  {
    id: "penjualin-crm",
    title: "PenjualinCRM Website",
    description: "Sistem CRM untuk manajemen pelanggan dan penjualan",
    longDescription:
      "PenjualinCRM adalah sistem Customer Relationship Management yang dirancang untuk membantu bisnis mengelola hubungan dengan pelanggan, tracking penjualan, dan otomasi proses bisnis. Sistem ini dilengkapi dengan dashboard analytics dan reporting yang comprehensive.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Socket.io",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Redis",
    ],
    image: "/images/penjualinCRM/PenjualinCRM1.png",
    images: [
      "/images/penjualinCRM/PenjualinCRM1.png",
      "/images/penjualinCRM/PenjualinCRM2.png",
      "/images/penjualinCRM/PenjualinCRM3.png",
    ],
    demoUrl: "https://penjualincrm.vercel.app",
    sourceCodeUrl: "https://github.com/muddatsir/penjualin-crm",
    role: "Lead Full Stack Developer",
    challenges: [
      {
        problem: "Real-time notification dan chat system untuk tim sales",
        solution:
          "Mengimplementasikan Socket.io untuk real-time communication dan menggunakan Redis untuk session management dan caching",
      },
      {
        problem: "Complex data relationships untuk customer journey tracking",
        solution:
          "Mendesain database schema yang optimal dengan proper indexing dan menggunakan MongoDB aggregation untuk complex queries",
      },
    ],
    features: [
      "Customer management & segmentation",
      "Sales pipeline dengan drag-and-drop",
      "Real-time chat dan notifications",
      "Advanced analytics dan reporting",
      "Email marketing integration",
      "Mobile-responsive design",
      "Role-based access control",
    ],
    status: "completed",
    category: "fullstack",
  },
  {
    id: "marketin",
    title: "E-Commerce Marketin",
    description:
      "Marketin admin untuk mengelola toko online dengan analitik real-time",
    longDescription:
      "E-Commerce Marketin adalah aplikasi web yang dirancang untuk membantu pemilik toko online mengelola produk, pesanan, dan pelanggan dengan mudah. Dashboard ini dilengkapi dengan fitur analitik real-time, manajemen inventori, dan sistem notifikasi otomatis.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Chart.js",
      "Socket.io",
      "Stripe",
    ],
    image: "/images/marketin/Marketin1.png",
    images: [
      "/images/marketin/Marketin1.png",
      "/images/marketin/Marketin2.png",
      "/images/marketin/Marketin3.png",
    ],
    demoUrl: "https://ecommerce-dashboard-demo.vercel.app",
    sourceCodeUrl: "https://github.com/muddatsir/ecommerce-dashboard",
    role: "Full Stack Developer",
    challenges: [
      {
        problem:
          "Menampilkan data analitik dalam jumlah besar secara real-time",
        solution:
          "Mengimplementasikan WebSocket untuk real-time updates dan menggunakan chart.js dengan optimasi rendering untuk visualisasi data yang smooth",
      },
      {
        problem: "Manajemen state yang kompleks untuk multiple data sources",
        solution:
          "Menggunakan Zustand untuk state management yang lebih efisien dan implementasi custom hooks untuk data fetching",
      },
    ],
    features: [
      "Real-time sales analytics",
      "Product inventory management",
      "Order tracking system",
      "Customer management",
      "Payment integration dengan Stripe",
      "Multi-role access control",
      "Export data ke PDF/Excel",
      "Mobile responsive design",
    ],
    status: "completed",
    category: "fullstack",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.status === "completed");
};
