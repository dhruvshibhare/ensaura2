'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse">
      {/* Main Image */}
      <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
        {isLoading ? (
          <div className="w-full h-full animate-pulse bg-gray-200" />
        ) : (
          <Image
            src={images[selectedImage]}
            alt={`${alt} - Main View`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover w-full h-full transition-all duration-300"
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-2 lg:pb-0 lg:max-h-[500px]">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200",
              selectedImage === index 
                ? "ring-2 ring-primary ring-offset-2" 
                : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            aria-label={`View ${alt} image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className={cn(
                "object-cover transition-opacity duration-300",
                selectedImage === index ? "opacity-100" : "opacity-70 hover:opacity-100"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
