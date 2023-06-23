"use client";
import React, { useState, useEffect } from "react";
import BrandCarousel from "@/components/BrandCarousel";

const Brands = () => {

    type CarouselItem = {
        src: string;
        alt: string;
    };

    const brands: CarouselItem[] = [
        { src: '/rivelo.png', alt: 'Rivelo' },
        { src: '/b4web.png', alt: 'B4web' },
        { src: '/ideaencode.png', alt: 'IdeaEncode' },
        { src: '/redabissi.png', alt: 'RedAbissi' },
        { src: '/nextar.png', alt: 'Nextar' },
      ];
    

    return (
        <div>
        <div className="container mx-auto flex justify-center">
            <h1 className="text-xl md:text-3xl font-bold text-special text-center">Your Digital Future, Constructed Today: <br/>High-level Full Stack Development and Cloud Architecture</h1>
        </div>
            <BrandCarousel items={brands} className={"my-7"}/>
        </div>
    );
  }
  
  export default Brands;