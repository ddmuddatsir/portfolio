import { FC } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="text-white py-10 md:mx-24 px-6">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:flex-wrap">
        {/* Tentang Saya */}
        <div className="md:max-w-sm">
          <h2 className="text-2xl font-semibold mb-3">
            Nur Muhammad Muddatsir
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            Support you in mastering frontend-backend integration through
            real-world coding strategies.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/nur-muhammad-muddatsir-41740b160/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ddmuddatsir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:dedemudasir@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div className="md:pr-16 mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-3">Navigasi</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#portfolio" className="hover:text-white transition">
                Portofolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:max-w-sm">
          <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
          <div className="text-sm text-gray-400 space-y-3">
            <div>
              <p className="text-white font-medium mb-1">Email</p>
              <a
                href="mailto:dedemudasir@gmail.com"
                className="hover:text-white transition"
              >
                dedemudasir@gmail.com
              </a>
            </div>
            <div>
              <p className="text-white font-medium mb-1">Phone</p>
              <a
                href="tel:+6289516662962"
                className="hover:text-white transition"
              >
                +62 895-1666-2962
              </a>
            </div>
            <div>
              <p className="text-white font-medium mb-1">Location</p>
              <p>Indonesia (UTC+7)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Muddatsir Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
