"use client";

import React, { useState, useEffect } from "react";
import BrandCarousel from "@/components/BrandCarousel";
import CompanyTitle from "@/components/CompanyTitle";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Image from "next/image";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);

  type CarouselItem = {
    src: string;
    alt: string;
  };

  const brands: CarouselItem[] = [
    { src: "/nest.png", alt: "Nest JS" },
    { src: "/typescript.png", alt: "Typescript" },
    { src: "/react.png", alt: "React" },
    { src: "/gcp.png", alt: "GCP" },
    { src: "/k8s.png", alt: "K8s" },
    { src: "/mongodb.png", alt: "MongoDB" },
    { src: "/mysql.png", alt: "MySQL" },
  ];

  return (
    <main>
      <CompanyTitle
        title="Facile.it Partner"
        firstDescription="Working in one of the most organized teams ever: My Journey with Facile.it"
        secondDescription="Throughout my time at Facile.it, I've undertaken a deep comprehension of what working in team means, i delved deeper in the concepts of agile and improved my communication."
      />
      <BrandCarousel items={brands} className={"my-7"} />
      <div className="bg-neutral-900">
        <div className="w-full text-black mt-8 | xl:mt-12">
          <svg
            className="w-full fill-background"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1600 162"
          >
            <path d="M1600 0v113.868c-91.328-1.407-173.577 60.877-297.907 45.57-124.33-15.308-103.654-33.11-207.373-63.606-69.147-20.33-143.387-20.33-222.72 0-56.554 17.89-114.692 23.901-174.415 18.036-89.585-8.798-84.69-15.89-199.92-48.532-89.414-25.328-211.396-25.328-247.427-27.283-68.21-3.7-151.622 9.683-250.238 40.15V0h1600z"></path>
          </svg>
        </div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-36 pt-56">
            <div className="order-1  px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
              Functional Programming – A new way of approaching coding
            </div>
            <div className="order-2 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
              I was presented with a new challenge, learning and using
              functional programming in Typescript by using fp-ts. The learning
              curve was one of the toughest i have ever faced, it was like
              starting to code all over again, everything was new and i had to
              work a lot in team and improve my communication to get through and
              deliver my tasks. In the end I was very surprised of how useful it
              can be, especially for big projects, it has a very clean structure
              and is very low maintenance.
            </div>
            <div className="order-4 md:order-3 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
              It was not my first time using Nest JS but it surely was the only
              project that used all possibilities of it. Every single feature of
              Nest JS was being used and sometimes even customized to fit better
              for the project needs. Here i deepened my knowledge about this
              framework.
            </div>
            <div className="order-3 md:order-4 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
              Nest JS
            </div>
            <div className="order-5 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
              Agile working and a splendid team
            </div>
            <div className="order-6 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
              Here i deepened my agile, communication and team working skills.
              At Facile.it i had the opportunity to work with very specialized
              and capable people which improved deeply my soft and hard skills.
            </div>
          </div>
          <div className="md:h-screen  flex justify-center items-center text-center  font-bold text-3xl p-8">
            My tenure at Facile.it has been a fulfilling journey of growth and
            innovation.
          </div>
        </div>
      </div>
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default Home;
