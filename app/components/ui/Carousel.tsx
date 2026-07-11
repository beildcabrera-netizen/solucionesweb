"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  slidesToScroll?: number;
}

export function Carousel({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 4000,
  showArrows = true,
  showDots = true,
  slidesToScroll = 1,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll,
      loop: true,
      skipSnaps: false,
      dragFree: false,
    },
    autoPlay
      ? [
          Autoplay({
            delay: autoPlayInterval,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]
      : []
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const slides = React.Children.toArray(children);

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((child, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 first:pl-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && slides.length > 0 && (
        <>
          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
              "w-12 h-12 rounded-full bg-white shadow-lg shadow-slate-900/10",
              "flex items-center justify-center",
              "border border-slate-200 hover:border-primary-200",
              "hover:bg-primary-50 hover:text-primary-600",
              "transition-all duration-300",
              "focus:outline-none",
              !prevBtnEnabled && "opacity-40 cursor-default"
            )}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
              "w-12 h-12 rounded-full bg-white shadow-lg shadow-slate-900/10",
              "flex items-center justify-center",
              "border border-slate-200 hover:border-primary-200",
              "hover:bg-primary-50 hover:text-primary-600",
              "transition-all duration-300",
              "focus:outline-none",
              !nextBtnEnabled && "opacity-40 cursor-default"
            )}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus:outline-none",
                index === selectedIndex
                  ? "w-8 bg-primary-500"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
