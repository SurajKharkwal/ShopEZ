"use client";
import Dslr from "@/public/Image/DSLR.jpg";
import Gadgets from "@/public/Image/Gadgests.jpg";
import img1 from "@/public/Image/img1.jpg";
import Headphone from "@/public/Image/Headhones.jpg";
import BeautyProduct from "@/public/Image/BeatyProducts.jpg";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Carousel() {
  const imageRapperRef = useRef<HTMLDivElement>(null);

  const imageData = [
    {
      title: "Premium Headphones",
      src: Headphone.src,
      width: Headphone.width,
    },
    {
      title: "Beauty Essentials",
      src: BeautyProduct.src,
      width: BeautyProduct.width,
    },
    {
      title: "Professional DSLRs",
      src: Dslr.src,
      width: Dslr.width,
    },
    {
      title: "Cutting-edge Gadgets",
      src: Gadgets.src,
      width: Gadgets.width,
    },
    {
      title: "Cosmetic",
      src: img1.src,
      width: img1.width,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageRapperRef.current) {
        const currentScrollLeft = imageRapperRef.current.scrollLeft;
        const scrollAmount =
          imageRapperRef.current.scrollWidth / imageData.length;
        const nextScrollLeft =
          currentScrollLeft + scrollAmount >= imageRapperRef.current.scrollWidth
            ? 0
            : currentScrollLeft + scrollAmount;

        imageRapperRef.current.scrollTo({
          left: nextScrollLeft,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [imageData.length]);

  return (
    <div className="w-full relative overflow-x-hidden z-10">
      <div
        id="image-rapper"
        ref={imageRapperRef}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {imageData.map((data, index) => (
          <Image
            src={data.src}
            key={index}
            width={data.width}
            className="lg:aspect-[16/6] max-sm:aspect-[3/4] sm:aspect-[3/2] object-cover object-center"
            height={500}
            alt={data.title}
          />
        ))}
      </div>
    </div>
  );
}
