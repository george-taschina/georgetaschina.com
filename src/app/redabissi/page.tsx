"use client";

import React, { useState, useEffect } from "react";
import BrandCarousel from "@/components/BrandCarousel";
import CompanyTitle from "@/components/CompanyTitle";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

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
        { src: '/vue.png', alt: 'VUE' },
        { src: '/react.png', alt: 'React' },
        { src: '/laravel.png', alt: 'Laravel' },
        { src: '/mysql.png', alt: 'MySQL' },
      ];

    return (
        <main>
            <CompanyTitle title="RedAbissi Platform" firstDescription="A Paradigm Shift in Social Media Management: My Experience with RedAbissi's RedHab Platform" secondDescription="Throughout my tenure at RedAbissi, I've been a part of several pivotal initiatives that significantly enhanced our platform's functionality, efficiency, and security, contributing to a holistic digital transformation. Allow me to unfold the story of my journey, detailing my role and the value of my contributions." />
            <BrandCarousel items={brands} className={"my-7"}/>
            <div className="mt-16 md:mt-64 flex justify-center items-center container mx-auto">
                <img src="/redabissi-project.png" className="w-auto mx-auto" alt="RedAbissi Project"/>
            </div>
            <div className="bg-neutral-900">
                <div className="w-full text-black mt-8 | xl:mt-12">
                    <svg className="w-full fill-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 162"><path d="M1600 0v113.868c-91.328-1.407-173.577 60.877-297.907 45.57-124.33-15.308-103.654-33.11-207.373-63.606-69.147-20.33-143.387-20.33-222.72 0-56.554 17.89-114.692 23.901-174.415 18.036-89.585-8.798-84.69-15.89-199.92-48.532-89.414-25.328-211.396-25.328-247.427-27.283-68.21-3.7-151.622 9.683-250.238 40.15V0h1600z"></path>
                    </svg>
                </div>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-36 pt-56">
                        <div className="order-1  px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Essence of Versatility - Crafting a React Native Analysis Application
                        </div>
                        <div className="order-2 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
                            Identifying the necessity for a versatile and efficient analytical tool, I set out to create an analysis application utilizing React Native. This application, built to harness multiple social media APIs, was a critical element in our platform. It facilitated a deeper understanding of our social media data, enabling frequent updates and reducing the risk of complete system failures.
                        </div>
                        <div className="order-4 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Leveraging Vue.js for a User-friendly Interface                       
                        </div>
                        <div className="order-3 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
                            With a focus on continuous system enhancement, I introduced Vue.js to our frontend development. This decision led to faster load times, improved user interactivity, and an overall increase in performance. As a result, we solidified our platform's capability to meet the evolving needs of our customers.
                        </div>
                        <div className="order-6 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
                            The cornerstone of productive software development is a blend of rapid deployment cycles and rigorous security protocols. By reengineering our deployment process and bolstering our security measures, we significantly shortened our time-to-market. Additionally, these new workflows provided a secure environment, fortifying our platform against potential security breaches while ensuring data integrity.
                        </div>
                        <div className="order-5 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Securing the Workflow and Enhancing Speed to Market                     
                        </div>
                    </div>
                    <div className="md:h-screen mt-32 md:mt-0 flex justify-center items-center text-center  font-bold text-3xl p-8">
                      Reflecting on my time at RedAbissi, it has been a rewarding journey of growth and technical innovation. By instigating changes across various facets of our operations, I've played a role in transforming RedHab into a more efficient, resilient, and secure platform. These efforts underscore our unwavering commitment to excellence and our quest to continually adapt in the rapidly evolving technology landscape.
                    </div>
                </div>
            </div>
            <Projects />
            <ContactMe />
            <Footer />
        </main>
    )
}

export default Home
