"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-[var(--color-sand)] flex flex-col items-center justify-center font-serif text-[var(--color-deepbrown)]/40 relative">
        No Images Available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Primary Image View */}
      <div className="aspect-[3/4] bg-[var(--color-sand)] overflow-hidden relative transition-opacity duration-300">
        <img 
          src={images[selectedIndex]} 
          alt={`${productName} - Selected Image`} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
          {images.map((url, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`aspect-[3/4] overflow-hidden relative border-2 transition-all ${
                selectedIndex === idx 
                  ? "border-[var(--color-terracotta)] opacity-100" 
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img 
                src={url} 
                alt={`${productName} Thumbnail ${idx + 1}`} 
                className="w-full h-full object-cover" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
