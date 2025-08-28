export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  social: {
    github: string;
    linkedin: string;
    behance: string;
  };
}

export const contactData: ContactInfo = {
  name: "Muddatsir",
  email: "dedemudasir@gmail.com",
  phone: "+62 895-1666-2962",
  location: "Indonesia",
  timezone: "WIB (UTC+7)",
  social: {
    github: "https://github.com/ddmuddatsir",
    linkedin: "https://www.linkedin.com/in/nur-muhammad-muddatsir-41740b160/",
    behance: "https://www.behance.net/ddmmuddatsir",
  },
};

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactReasons = [
  "Project Collaboration",
  "Freelance Opportunity",
  "Technical Consultation",
  "Partnership Inquiry",
  "General Question",
  "Other",
];
