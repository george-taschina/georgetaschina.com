"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

type ProjectItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  imageMerit: string;
};

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      src: "/envelor-project.jpeg",
      alt: "Rivelo Platform",
      title: "Rivelo Platform",
      description:
        "Rivelo is a cutting-edge SaaS Planning and Control (FP&A) platform that enhances economic and financial performances, revealing new business opportunities. Serving numerous companies across various sectors",
      link: "/envelor",
      imageMerit: "Photo by Mihai Vlasceanu from Pexels",
    },
    {
      src: "/hiwo.jpeg",
      alt: "Hiwo App",
      title: "Hiwo App",
      description:
        "Hiwo is a platform that connects event organizers with event professionals. As a backend developer, I was responsible for developing the infrastructure that powers the platform.",
      link: "/hiwo",
      imageMerit: "Photo by CoWomen from Pexels",
    },

    {
      src: "/wifi-project.jpeg",
      alt: "Wifi Italia",
      title: "Wifi Italia",
      description:
        "WiFi Italia is the project of the Ministry of Enterprises and Made in Italy that allows citizens to connect easily and for free with an APP to the free and widespread WiFi network in Italian squares, in small villages, and in the city.",
      link: "/wifi",
      imageMerit: "Photo by CoWomen from Pexels",
    },
    {
      src: "/redbissi-project.jpeg",
      alt: "RedAbissi Platform",
      title: "RedAbissi Platform",
      description:
        "RedAbissi is a Social media management platform, developed for brands and companies selling through single-brand & multi-brand stores, franchises, networks, agencies, partners and retailers.",
      link: "/redabissi",
      imageMerit: "Photo by Amina Filkins from Pexels",
    },
    {
      src: "/bikerface-project.jpeg",
      alt: "Bikerface",
      title: "Bikerface",
      description:
        "Bikerface Transport is a premier motorcycle transport company dedicated to providing safe, reliable, and timely motorcycle transportation services globally.",
      link: "/bikerface",
      imageMerit: "Photo by Nathan Salt from Pexels",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-wrap">
        {/* map */}
        {projects.map((item, idx) => (
          <div key={idx} className="w-full md:w-1/2 lg:w-1/2 p-2">
            <ProjectCard
              item={item}
              className="p-5 flex items-center justify-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
