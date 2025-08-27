"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

// Non-critical components - lazy load with progressive enhancement
const Lighting = dynamic(() => import("@/components/Lighting"), {
  ssr: false,
  loading: () => null, // No loading state, just load when ready
});

const TechStackSection = dynamic(
  () => import("@/components/home/TechStackSection"),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 flex items-center justify-center">
        <div className="text-gray-500 animate-pulse">Loading Tech Stack...</div>
      </div>
    ),
  }
);

const PortfolioSection = dynamic(
  () => import("@/components/home/PortfolioSection"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 flex items-center justify-center">
        <div className="text-gray-500 animate-pulse">Loading Portfolio...</div>
      </div>
    ),
  }
);

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [sectionsReady, setSectionsReady] = useState(false);

  useEffect(() => {
    // Start loading non-critical sections after hero is rendered
    const timer = setTimeout(() => {
      setSectionsReady(true);
    }, 200);

    // Preload critical resources after initial render
    const preloadTimer = setTimeout(() => {
      import("@/utils/preloader").then(({ preloadImages, preloadPages }) => {
        preloadImages();
        preloadPages();
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(preloadTimer);
    };
  }, []);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Load lighting effect progressively */}
      <Suspense fallback={null}>
        <Lighting
          starCount={sectionsReady ? 30 : 0} // No stars until sections ready
          nebulaOpacity={sectionsReady ? 0.08 : 0}
        />
      </Suspense>

      <div className="relative min-h-screen text-white flex flex-col md:mx-24 md:px-6 pb-20 overflow-x-hidden overflow-y-hidden">
        {/* Critical - Always load first */}
        <HeroSection onScrollToPortfolio={scrollToPortfolio} />

        {/* Progressive loading of sections */}
        {sectionsReady && (
          <>
            <Suspense
              fallback={
                <div className="h-32 animate-pulse bg-gray-800/20 rounded-lg mx-4 my-8" />
              }
            >
              <TechStackSection />
            </Suspense>

            <div ref={portfolioRef}>
              <Suspense
                fallback={
                  <div className="h-64 animate-pulse bg-gray-800/20 rounded-lg mx-4 my-8" />
                }
              >
                <PortfolioSection />
              </Suspense>
            </div>
          </>
        )}
      </div>
    </>
  );
}
