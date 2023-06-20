"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type CarouselItem = {
  src: string;
  alt: string;
};

type BrandCarouselProps = {
  items: CarouselItem[];
  className?: string;
};

const BrandCarousel: React.FC<BrandCarouselProps> = ({ items, className }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={idx} className="p-4 flex items-center justify-center">
            <img src={item.src} alt={item.alt} className="w-52 mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
