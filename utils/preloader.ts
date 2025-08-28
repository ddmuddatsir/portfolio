// Preload critical images and pages with error handling
export const preloadImages = async () => {
  const criticalImages = [
    "/images/catetin/Catetin1.png",
    "/images/UGbangunan/UGbangunan1.png",
    "/images/penjualinCRM/PenjualinCRM1.png",
  ];

  // Use requestIdleCallback for better performance
  const preloadWithIdle = () => {
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      // Add to DOM for prefetch
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(preloadWithIdle);
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(preloadWithIdle, 100);
  }
};

export const preloadPages = () => {
  const criticalPages = ["/blog", "/about", "/contact"];

  const preloadWithIdle = () => {
    criticalPages.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = href;
      document.head.appendChild(link);
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(preloadWithIdle);
  } else {
    setTimeout(preloadWithIdle, 200);
  }
};
