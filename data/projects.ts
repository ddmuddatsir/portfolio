import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "catetin-mobile-app",
    title: "Catetin Mobile First App",
    description:
      "Catetin is an app for easily recording daily expenses and viewing financial summaries, helping you manage personal finances with a user-friendly interface.",
    longDescription:
      "Catetin is an app that helps you easily record and monitor your daily expenses. With features for logging transactions and viewing financial summaries, Catetin makes it simple to manage your personal finances. Its user-friendly interface allows you to track spending anytime, anywhere.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Tanstack Query",
      "Shadcn",
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
    demoUrl: "https://catetin-web-mobile-first-d996w5m3a.vercel.app",
    sourceCodeUrl: "https://github.com/ddmuddatsir/Catetin-web-mobile-first",
    role: "Full Stack Developer",
    challenges: [
      {
        problem:
          "As a beginner programmer, it was difficult to grasp how to organize files, write maintainable code, and follow industry standards.",
        solution:
          "Studied documentation, explored open-source projects, and consulted experienced developers to learn proper project structure and coding conventions, gradually improving code readability and maintainability.",
      },
      {
        problem:
          "Frequent bugs and errors were challenging to identify and resolve, especially with limited experience in troubleshooting.",
        solution:
          "Used debugging tools, learned to read error messages carefully, and practiced systematic problem-solving techniques to find and fix issues more efficiently over time.",
      },
      {
        problem:
          "Adapting to new frameworks, libraries, or APIs involved a steep learning curve and initial confusion.",
        solution:
          "Followed online tutorials, participated in developer communities, and built small practice projects to gain hands-on experience and confidence in using new technologies.",
      },
    ],
    features: [
      "Expense and Income Recording",
      "Transaction Categories",
      "Financial Summary",
      "Charts and Statistics",
      "Transaction Filter & Search",
      "Cloud Data Management (Firebase)",
      "Responsive Design (Mobile First)",
    ],
    status: "completed",
    category: "fullstack",
  },
  {
    id: "ug-bangunan-website",
    title: "UG Bangunan Website Profil",
    description:
      "Company profile website for a construction and building services business, highlighting company background and project portfolio to showcase expertise in construction and repair.",
    longDescription:
      "This is a company profile website for a construction and building services business. The website showcases the company's background and portfolio of completed projects, providing visitors with an overview of its expertise and experience in construction and repair services.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
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
          "Organizing various sections like company profile, portfolio, and gallery without dynamic data or a backend was challenging for scalability and maintainability.",
        solution:
          "Used structured data files (e.g., JSON, Markdown) and Next.js static generation features to separate content from presentation, making it easier to update and manage sections.",
      },
      {
        problem:
          "Ensuring fast load times and optimal SEO for static pages required careful configuration.",
        solution:
          "Leveraged Next.js built-in image optimization, pre-rendering, and meta tag management to enhance performance and improve search engine visibility.",
      },
    ],
    features: [
      "Company profile & portfolio showcase",
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
    description:
      "A CRM system for managing customers and sales, with a primary focus on sales activities.",
    longDescription:
      "Penjualin CRM is a web application designed to help businesses manage customers, sales, and projects efficiently. It features customer data management, sales tracking, and a project portfolio to streamline business operations. With its intuitive interface, users can easily monitor progress and improve productivity.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Google OAuth",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Firebase",
      "Prisma ORM",
      "Vercel",
      "Shadcn",
    ],
    image: "/images/penjualinCRM/PenjualinCRM1.png",
    images: [
      "/images/penjualinCRM/PenjualinCRM1.png",
      "/images/penjualinCRM/PenjualinCRM2.png",
      "/images/penjualinCRM/PenjualinCRM3.png",
    ],
    demoUrl: "https://penjualin-crm-website-v64o.vercel.app/",
    sourceCodeUrl: "https://github.com/ddmuddatsir/penjualin-crm-website",
    role: "Full Stack Developer",
    challenges: [
      {
        problem:
          "Integrating multiple features such as customer management, sales tracking, and project portfolios into a single, seamless platform, while maintaining a simple and intuitive user interface.",
        solution:
          "Carefully designed the application’s architecture using modular components and user-centered design principles. Conducted regular usability testing and feedback sessions to ensure each feature is easy to access and use, resulting in a streamlined experience for users.",
      },
      {
        problem:
          "Ensuring data security and privacy for sensitive customer and business information stored in the CRM.",
        solution:
          "Implemented secure authentication, role-based access control, and encrypted data storage. Regularly updated dependencies and conducted security reviews to protect against vulnerabilities.",
      },
      {
        problem:
          "Migrating existing data and authentication logic to Firebase posed compatibility and data structure challenges.",
        solution:
          "Carefully mapped and transformed legacy data into Firebase’s format, implemented robust migration scripts, and thoroughly tested authentication flows to ensure a smooth transition.",
      },
      {
        problem:
          "Implementing dark mode across the entire application while maintaining UI consistency and readability required extra attention to styling and user preferences.",
        solution:
          "Used CSS variables and a centralized theme manager, enabling efficient switching between dark and light modes. Rigorous UI reviews ensured consistent appearance and accessibility.",
      },
    ],
    features: [
      "Customer Management: Manage and organize customer data efficiently.",
      "Sales Tracking: Monitor leads, opportunities, and sales progress.",
      "Project and Task Management: Oversee project timelines and assign tasks to team members.",
      "Reporting and Analytics: Generate reports to analyze sales performance and customer interactions.",
      "User Management: Set roles and permissions for different users within the system.",
    ],
    status: "completed",
    category: "fullstack",
  },
  {
    id: "marketin",
    title: "E-Commerce Marketin",
    description:
      "E-commerce platform with external product API integration, cart and wishlist features, order management, and secure user profiles using Firebase authentication.",
    longDescription:
      "An e-commerce web application integrates product data from an external public API, enabling users to browse a dynamic catalog. Users can manage their shopping cart, wishlist, and place orders, with secure authentication and profile management powered by Firebase. The platform delivers a seamless shopping experience with real-time product updates and personalized user accounts.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Google OAuth",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Prisma ORM",
      "Vercel",
      "Shadcn",
    ],
    image: "/images/marketin/Marketin1.png",
    images: [
      "/images/marketin/Marketin1.png",
      "/images/marketin/Marketin2.png",
      "/images/marketin/Marketin3.png",
    ],
    demoUrl: "https://marketin-website-ekk8-q2lp6r06x.vercel.app",
    sourceCodeUrl: "https://github.com/ddmuddatsir/marketin-website",
    role: "Full Stack Developer",
    challenges: [
      {
        problem:
          "Ensuring secure authentication and smooth token verification for API routes was complex, leading to time spent debugging authorization errors and handling edge cases (e.g., expired or missing tokens).",
        solution:
          "Implemented consistent token verification across all API endpoints, standardized user authentication logic, and added comprehensive error handling and response messaging for unauthorized access.",
      },
      {
        problem:
          "Managing cart, wishlist, and order data in real-time created difficulties with data consistency, potential race conditions, and performance, especially with simultaneous updates and deletions.",
        solution:
          "Utilized batch operations, optimized Firestore queries, and employed structured error handling to ensure reliable updates and efficient data management. Added checks to prevent duplicate entries and performed batch deletions to maintain consistency.",
      },
      {
        problem:
          "Fetching product details from external APIs for cart and wishlist operations added latency and required careful caching to avoid redundant requests, which was time-consuming to optimize.",
        solution:
          "Developed stable fetch-and-cache functions, used memoization, and batch fetched data to improve performance and reduce API calls.",
      },
    ],
    features: [
      "Product catalog and search",
      "Shopping cart functionality",
      "Checkout and payment integration",
      "User authentication and management",
      "Order history and tracking",
      "Responsive design",
      "Promotions and discount codes",
      "Inventory management",
      "Customer reviews and ratings",
      "Admin dashboard for managing products and orders",
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
