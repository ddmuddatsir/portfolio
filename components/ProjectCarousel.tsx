import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectCarouselProps } from "@/types/portfolio";

const penjualinCRMImages = [
  "/images/penjualinCRM/PenjualinCRM1.png",
  "/images/penjualinCRM/PenjualinCRM2.png",
  "/images/penjualinCRM/PenjualinCRM3.png",
  "/images/penjualinCRM/PenjualinCRM4.png",
];

const marketinImages = [
  "/images/marketin/Marketin1.png",
  "/images/marketin/Marketin2.png",
  "/images/marketin/Marketin3.png",
];

export default function ProjectCarousel({
  title,
  images,
}: ProjectCarouselProps) {
  // Tentukan images berdasarkan title atau gunakan images prop
  let projectImages: string[];

  if (images && images.length > 0) {
    projectImages = images;
  } else if (title === "PenjualinCRM Website") {
    projectImages = penjualinCRMImages;
  } else if (title === "E-Commerce Marketin") {
    projectImages = marketinImages;
  } else {
    projectImages = penjualinCRMImages; // fallback
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      {/* Tombol Previous - hanya tampil di desktop */}
      <button
        onClick={prevImage}
        className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-all shadow-lg hidden md:block"
      >
        <FaChevronLeft />
      </button>

      {/* Container gambar dan indikator */}
      <div
        className="flex flex-col items-center order-2 md:order-none cursor-grab active:cursor-grabbing md:cursor-default"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={projectImages[currentImageIndex]}
          alt={title}
          width={600}
          height={400}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="bg-white object-cover rounded-xl w-full max-w-[300px] md:max-w-[600px] h-auto select-none transition-transform duration-200"
        />

        {/* Indikator dots */}
        <div className="flex justify-center mt-3 gap-2">
          {projectImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImageIndex ? "bg-indigo-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tombol Next - hanya tampil di desktop */}
      <button
        onClick={nextImage}
        className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-all shadow-lg hidden md:block"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
