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
      { src: '/react.png', alt: 'React' },
      { src: '/github.png', alt: 'Github' },
      { src: '/apple-developer.png', alt: 'Apple Developer' },
  ];

    return (
        <main>
            <CompanyTitle title="Wifi Italia" firstDescription="Redefining Mobile Applications: My Experience at WifiItalia" secondDescription="During my tenure at WifiItalia, I have had the opportunity to spearhead significant projects that contributed to the efficiency, user experience, and robustness of our mobile applications. I invite you to join me as I delve deeper into the specifics of my role and the impact of my contributions." />
            <BrandCarousel items={brands} className={"my-7"}/>
            <div className="mt-16 md:mt-64 flex justify-center items-center container mx-auto">
                <img src="/wifi-project.png" className="w-1/2 mx-auto" alt="WiFi Italia Project"/>
            </div>
            <div className="bg-neutral-900">
                <div className="w-full text-black mt-8 | xl:mt-12">
                    <svg className="w-full fill-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 162"><path d="M1600 0v113.868c-91.328-1.407-173.577 60.877-297.907 45.57-124.33-15.308-103.654-33.11-207.373-63.606-69.147-20.33-143.387-20.33-222.72 0-56.554 17.89-114.692 23.901-174.415 18.036-89.585-8.798-84.69-15.89-199.92-48.532-89.414-25.328-211.396-25.328-247.427-27.283-68.21-3.7-151.622 9.683-250.238 40.15V0h1600z"></path>
                    </svg>
                </div>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-36 pt-56">
                        <div className="order-1  px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                          React Native – The Future of Cross-Platform Applications
                        </div>
                        <div className="order-2 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
                          As the main developer for the frontend of our react native application, I recognized the critical role of seamless user interfaces in mobile applications. These independently developed, cross-platform modules facilitated more consistent updates, mitigated the risk of system-wide failures, and thereby improved the overall performance of our application.
                          Perhaps one of my most crucial undertakings was the successful troubleshooting of a critical issue that put the project at risk: the app didn&apos;t build anymore due to the release of a new iOS version. Through meticulous debugging and problem-solving, I managed to resolve the issue, ensuring uninterrupted service to our end-users and keeping the project timeline on track.                        
                        </div>
                        <div className="order-4 md:order-3 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
                            With a focus on continually enhancing our application performance, I integrated modern technologies and methodologies into our development process. These changes not only contributed to quicker execution times and improved data processing capabilities but also provided a more engaging and responsive user experience.
                            The essence of successful application development lies in the ability to rapidly adapt and ensure robust security measures. By continually refining our development processes and incorporating advanced security protocols, I was able to reduce the time-to-market of our updates and offer a safer environment for our users, protecting our application against potential threats and ensuring data privacy.        
                        </div>
                        <div className="order-3 md:order-4 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Overcoming the Unexpected – Solving the iOS Build Failure
                        </div>
                    </div>
                    <div className="md:h-screen  flex justify-center items-center text-center  font-bold text-3xl p-8">
                    My journey at WifiItalia has been a rewarding experience of innovation and growth. By driving changes across different aspects of our mobile application development, I&apos;ve helped mold WifiItalia into an efficient, user-centric, and secure platform. These endeavors exemplify our commitment to excellence and continuous evolution in the ever-dynamic realm of mobile technology.
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
