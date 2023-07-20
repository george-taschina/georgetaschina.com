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
        { src: '/c-sharp.png', alt: 'C-sharp' },
        { src: '/gcp.png', alt: 'GCP' },
        { src: '/k8s.png', alt: 'K8s' },
        { src: '/react.png', alt: 'React' },
        { src: '/kafka.webp', alt: 'Kafka' },
        { src: '/laravel.png', alt: 'Laravel' },
        { src: '/mysql.png', alt: 'MySQL' },
      ];

    return (
        <main>
            <CompanyTitle title="Rivelo Platform" firstDescription="Revolutionizing the Digital Landscape: My Journey with Rivelo Platform" secondDescription="Throughout my time at Rivelo, I&apos;ve undertaken several vital projects that have significantly contributed to the overall performance, security, and efficiency of our digital environment. Let&apos;s delve deeper into the specifics of my role and the impact of my contributions." />
            <BrandCarousel items={brands} className={"my-7"}/>
            <div className="mt-16 md:mt-64 flex justify-center items-center container mx-auto">
                <Image priority src="/platform-rivelo.png" height={900} width={900} className="w-auto mx-auto" alt="Rivelo Project"/>
            </div>
            <div className="bg-neutral-900">
                <div className="w-full text-black mt-8 | xl:mt-12">
                    <svg className="w-full fill-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 162"><path d="M1600 0v113.868c-91.328-1.407-173.577 60.877-297.907 45.57-124.33-15.308-103.654-33.11-207.373-63.606-69.147-20.33-143.387-20.33-222.72 0-56.554 17.89-114.692 23.901-174.415 18.036-89.585-8.798-84.69-15.89-199.92-48.532-89.414-25.328-211.396-25.328-247.427-27.283-68.21-3.7-151.622 9.683-250.238 40.15V0h1600z"></path>
                    </svg>
                </div>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-36 pt-56">
                        <div className="order-1  px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Microservices – Building Blocks for Scalability
                        </div>
                        <div className="order-2 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
                            Recognizing the need for increased scalability and resiliency in our applications, I embarked on the creation of new microservices. These isolated, independently deployable modules played an instrumental role in enabling more frequent updates, minimizing the risk of system-wide failures, and thereby boosting the overall efficiency of our platform.
                        </div>
                        <div className="order-4 md:order-3 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
                            Perhaps one of the most pivotal undertakings was the migration of our on-premises software to Google Cloud Platform (GCP). This transition wasn&apos;t just about shifting to the cloud—it was about embracing the future. Through careful planning and execution, we successfully migrated our software to GCP, ensuring higher availability, improved flexibility, and optimized costs.                       
                        </div>
                        <div className="order-3 md:order-4 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Seamless Migration to Google Cloud Platform
                        </div>
                        <div className="order-5 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Introducing Performance-Enhancing Technologies                        
                        </div>
                        <div className="order-6 px-2 flex flex-col justify-center items-center text-right text-white border-r-4 ">
                            With an eye on continually improving our system performance, I introduced new technologies to our tech stack. These upgrades contributed to faster execution times, enhanced data processing capabilities, and overall better performance, strengthening our platform&apos;s capability to handle growing business needs.
                        </div>
                        <div className="order-8 md:order-7 px-2 flex flex-col justify-center items-center text-left text-white border-l-4 ">
                            The cornerstone of effective software development lies in short deployment cycles and robust security measures. By reengineering our deployment processes and introducing advanced security measures, I was able to reduce the time-to-market of our services. Additionally, the reinforced workflow offered a more secure environment, safeguarding our platform against potential threats and ensuring data integrity.
                        </div>
                        <div className="order-7 md:order-8 px-2 flex flex-col justify-center items-center text-center text-white font-bold text-3xl">
                            Shortened Deployment Time and Improved Security                        
                        </div>
                    </div>
                    <div className="md:h-screen  flex justify-center items-center text-center  font-bold text-3xl p-8">
                        My tenure at Rivelo has been a fulfilling journey of growth and innovation. By implementing changes across different facets of our digital operations, I&apos;ve helped transform Rivelo into a more efficient, scalable, and secure platform. These endeavors serve as a testament to our commitment to delivering excellence and continually evolving in the fast-paced realm of technology.
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
