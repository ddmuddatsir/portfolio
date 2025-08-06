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
              href="https://linkedin.com/in/muddatsir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/muddatsir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:muddatsir@example.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Navigasi dan Tech Stack */}
        <div className="flex flex-row gap-12 ">
          <div className="md:pr-16">
            <h2 className="text-xl font-semibold mb-3">Navigasi</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="hover:text-white transition"
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pr-10">
            <h2 className="text-xl font-semibold mb-3">The Creation</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>React & React Native</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
              <li>Tailwind CSS & TypeScript</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:max-w-sm">
          <h2 className="text-xl font-semibold mb-3">Langganan Info</h2>
          <p className="text-sm text-gray-400 mb-2">
            Dapatkan update terbaru langsung ke email kamu.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email kamu"
              className="px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-md text-white text-sm"
            >
              Langganan
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Muddatsir Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
