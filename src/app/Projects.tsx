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
        { src: '/rivelo-project.jpeg', alt: 'Rivelo Platform', title: 'Rivelo Platform', description: 'Rivelo is a platform that allows you to create your own online store in a few minutes and start selling your products online.', link: '/rivelo', imageMerit: 'Photo by Mihai Vlasceanu from Pexels' },
        { src: '/wifi-project.jpeg', alt: 'Wifi Italia', title: 'Wifi Italia', description: 'B4web is a platform that allows you to create your own online store in a few minutes and start selling your products online.', link: '/wifi', imageMerit: 'Photo by CoWomen from Pexels' },
        { src: '/redbissi-project.jpeg', alt: 'RedAbissi Platform', title: 'RedAbissi Platform', description: 'IdeaEncode is a platform that allows you to create your own online store in a few minutes and start selling your products online.', link: '/redabissi', imageMerit: 'Photo by Amina Filkins from Pexels' },
        { src: '/bikerface-project.jpeg', alt: 'Bikerface', title: 'Bikerface', description: 'RedAbissi is a platform that allows you to create your own online store in a few minutes and start selling your products online.', link: '/bikerface', imageMerit: 'Photo by Nathan Salt from Pexels' },
    ];

    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-wrap">
                {/* map */}
                {projects.map((item, idx) => (
                    <div key={idx} className="w-full md:w-1/2 lg:w-1/2 p-2">
                        <ProjectCard item={item} className="p-5 flex items-center justify-center"/>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default Projects;