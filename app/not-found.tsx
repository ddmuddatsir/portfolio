"use client";
import Link from "next/link";
import Lighting from "@/components/Lighting";

export default function NotFound() {
  return (
    <>
      <Lighting staticOnly />
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl font-extrabold mb-6 drop-shadow-lg">404</h1>
        <h2 className="text-2xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Maaf, halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-indigo-700 rounded-lg text-white text-lg font-semibold shadow-md hover:bg-indigo-900 transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}
