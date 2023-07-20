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

    return (
        <main>
            <CompanyTitle title="Bikerface" firstDescription="Revolutionizing Motorcycle Transport: My Adventure with BikerFace" secondDescription="My journey with BikerFace allowed me to play a crucial role in redefining how motorcycles are transported. As the primary developer for our web application, I was responsible for crafting an intuitive platform that seamlessly connects freelance delivery personnel with bike owners. This article provides a deep dive into my responsibilities and the impact of my contributions." />
            <div className="mt-16 md:mt-64 flex justify-center items-center container mx-auto">
                <Image priority src="/bikerface-project.png" height={900} width={900} className="w-auto mx-auto" alt="Bikerface Project"/>
            </div>
            <div className="bg-neutral-900">
                <div className="w-full text-black mt-8 | xl:mt-12">
                    <svg className="w-full fill-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 162"><path d="M1600 0v113.868c-91.328-1.407-173.577 60.877-297.907 45.57-124.33-15.308-103.654-33.11-207.373-63.606-69.147-20.33-143.387-20.33-222.72 0-56.554 17.89-114.692 23.901-174.415 18.036-89.585-8.798-84.69-15.89-199.92-48.532-89.414-25.328-211.396-25.328-247.427-27.283-68.21-3.7-151.622 9.683-250.238 40.15V0h1600z"></path>
                    </svg>
                </div>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-36 pt-56">
                        <div className="order-1  px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                          Building BikerFace – An Exercise in Adapting and Overcoming
                        </div>
                        <div className="order-2 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
                        Given the task to build BikerFace&apos;s web application from the ground up, I encountered one of my first challenges: the client&apos;s request to use legacy technologies. Despite the familiarity and comfort offered by newer technologies, I recognized the client&apos;s requirement as an opportunity to expand my technical prowess. Thus, I dived into the older technologies and successfully created a reliable and robust platform that perfectly fulfilled the client&apos;s needs.      
                        </div>
                        <div className="order-4 md:order-3 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
                        Although working with legacy technologies posed some initial hurdles, it also offered a unique set of advantages. These older technologies have stood the test of time, offering proven reliability and stability. Their utilization also provided a valuable learning experience, enhancing my skills and broadening my horizons as a developer.
                        During the development process, I faced the challenge of ensuring an optimal user experience for both freelance delivery personnel and bike owners. With careful consideration of both parties&apos; needs, I incorporated features that made it easy for them to connect, negotiate, and finalize transactions seamlessly.
                        </div>
                        <div className="order-3 md:order-4 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                        Making Use of Legacy Technologies – A Test of Skill and Adaptability
                        </div>
                    </div>
                    <div className="md:h-screen  flex justify-center items-center text-center  font-bold text-3xl p-8">
                      The journey of building BikerFace&apos;s web application from scratch, using legacy technologies, and considering user experience intricacies, has been immensely enriching. By navigating these diverse challenges, I have been instrumental in transforming BikerFace into an efficient, user-friendly, and game-changing platform in the motorcycle transport industry. This endeavor stands as a testament to our commitment to deliver excellence and constantly evolve in the rapidly changing technological landscape.                    </div>
                </div>
            </div>
            <Projects />
            <ContactMe />
            <Footer />
        </main>
    )
}

export default Home
