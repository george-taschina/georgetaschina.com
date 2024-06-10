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
    { src: "/typescript.png", alt: "Typescript" },
    { src: "/gcp.png", alt: "GCP" },
    { src: "/mongodb.png", alt: "MongoDB" },
    { src: "/fastify.png", alt: "Fastify" },
  ];

  return (
    <main>
      <CompanyTitle
        title="Hiwo App"
        firstDescription="Powering Connections: My Backend Development Work on Hiwo"
        secondDescription="Hiwo is a platform that connects event organizers with event professionals. As a backend developer, I was responsible for developing the infrastructure that powers the platform. This included building APIs that allow users to interact with the platform, as well as developing databases to store event data."
      />
      <BrandCarousel items={brands} className={"my-7"} />
      <div className="mt-16 md:mt-64 flex justify-center items-center container mx-auto">
        <Image
          priority
          src="/hiwo.png"
          height={900}
          width={900}
          className="w-auto mx-auto"
          alt="Hiwo Project"
        />
      </div>
      <div className="bg-neutral-900 pb-44">
        <div className="w-full  text-black mt-8 | xl:mt-12">
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
              Hiwo: Building the Foundation for Event Success
            </div>
            <div className="order-2 px-2 flex flex-col justify-center items-center text-right text-white border-r-4">
              I spearheaded the backend development for Hiwo, the event
              professional network. My contributions included:
              <ul
                className="list-disc pl-4 pr-4"
                style={{
                  direction: "rtl",
                }}
              >
                <li>
                  Designing a scalable database architecture to efficiently
                  store event data and user information.
                </li>
                <li>
                  Developing a robust API that empowers users to search for
                  events, manage profiles, and book services.
                </li>
                <li>
                  Creating a reusable boilerplate codebase that streamlines
                  development for the entire backend team.
                </li>
              </ul>
            </div>
            <div className="order-4 md:order-3 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
              To ensure scalability and optimize performance, I migrated Hiwo to
              Google Cloud Platform (GCP). This involved:
              <ul className="list-disc pl-4 text-left">
                <li>
                  Planning and executing the migration process to ensure smooth
                  transition.
                </li>
                <li>
                  Leveraging GCP&apos;s scalability and flexibility to meet
                  future growth demands.
                </li>
                <li>Optimizing costs associated with cloud infrastructure.</li>
              </ul>
            </div>
            <div className="order-3 md:order-4 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
              Hiwo on Google Cloud Platform: Scalability & Efficiency
            </div>
            <div className="order-5 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
              Enhancing Performance & Security
            </div>
            <div className="order-6 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
              I continuously improved Hiwo&apos;s performance by:
              <ul className="list-disc pl-4 text-left">
                <li>
                  Introducing new technologies to optimize execution times and
                  data processing.
                </li>
                <li>
                  Developing automated testing pipelines to ensure code quality
                  and stability.
                </li>
              </ul>
            </div>
            <div className="order-8 md:order-7 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
              To ensure a secure and reliable platform, I implemented:
              <ul className="list-disc pl-4 text-left">
                <li>
                  Streamlined deployment processes for faster delivery and
                  updates.
                </li>
                <li>
                  Advanced security measures to safeguard user data and platform
                  integrity.
                </li>
              </ul>
            </div>
            <div className="order-7 md:order-8 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
              Streamlined Deployment & Robust Security
            </div>
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
