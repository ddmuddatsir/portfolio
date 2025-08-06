"use client";

import { useRef, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Lighting from "@/components/Lighting";
import HeroSection from "@/components/home/HeroSection";
import TechStackSection from "@/components/home/TechStackSection";

// Lazy load hanya komponen yang berat
const PortfolioSection = dynamic(
  () => import("@/components/home/PortfolioSection"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 animate-pulse bg-gray-800/20 rounded-lg mx-4 my-8" />
    ),
  }
);

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Delay preloading agar tidak block initial render
    const timer = setTimeout(() => {
      import("@/utils/preloader").then(({ preloadImages, preloadPages }) => {
        preloadImages();
        preloadPages();
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Lighting
        starCount={40} // Reduced from 80
        nebulaOpacity={0.1} // Reduced from 0.15
        starAnimRange={{ animY: [-1, 2], animX: [-1, 1] }} // Reduced range
      />

      <div className="relative min-h-screen text-white flex flex-col md:mx-24 md:px-6 pb-20 overflow-x-hidden overflow-y-hidden">
        {/* Critical - Load immediately */}
        <HeroSection onScrollToPortfolio={scrollToPortfolio} />

        {/* Tech Stack - Load immediately for better timing */}
        <TechStackSection />

        <div ref={portfolioRef}>
          <Suspense
            fallback={
              <div className="h-64 animate-pulse bg-gray-800/20 rounded-lg mx-4 my-8" />
            }
          >
            <PortfolioSection />
          </Suspense>
        </div>
      </div>
    </>
  );
}
