"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/slider/hero-slide-01.jpeg",
  "/slider/hero-slide-02.jpeg",
  "/slider/hero-slide-03.jpeg",
  "/slider/hero-slide-04.jpeg",
  "/slider/hero-slide-05.jpeg",
  "/slider/hero-slide-06.jpeg",
  "/slider/hero-slide-07.jpeg",
  "/slider/hero-slide-08.jpeg",
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide}
            alt={`Event Solutions showcase ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3 sm:bottom-4 sm:px-4">
        <div className="flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 backdrop-blur">
          {slides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-primary" : "w-2.5 bg-primary/35"
              }`}
            />
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-primary shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-primary shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
