"use client";
import React, { useState, useEffect } from "react";

const MainTitle = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [opacity, setOpacity] = useState(0);



    useEffect(() => {
      setIsMounted(true);
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }, []);
    

    return (
      <div className="h-screen  flex justify-center items-center">
          <div className="grid md:grid-cols-2 w-screen	">
            <div className={opacity ? "opacity-100 transition-all ease-in duration-700 sm:order-1 order-2 text-center md:text-left" : "opacity-0 mt-5 transition-all ease-in duration-700 sm:order-1 order-2 text-center md:text-left"}>
              <div className="flex flex-col justify-center h-full px-5 sm:pl-20">
                <h1 className="text-2xl md:text-7xl font-bold text-special">Transforming Ideas Into Reality</h1>
                <h4 className="mt-2 md:mt-9 text-md md:text-xl text-special">Building Robust & Scalable Web Solutions Tailored for YOU.</h4>
                <div className="mt-5 md:mt-10">
                  <a href="#contact" className="button-background text-white font-bold py-3 px-10 rounded-full shadow-lg uppercase tracking-wider transition-all ease-in-out delay-150 duration-500">Contact Me</a>
                </div>
              </div>
            </div>
            <div className="md:block hidden sm:order-1 order-2">
              <img src="/main_title.webp" alt="hero" id="main_image" className={opacity ? "opacity-100 transition-all ease-in duration-700 absolute right-0 top-0 z-10	" : "opacity-0 mt-5 transition-all ease-in duration-700 absolute right-0 top-0 z-10	"}  style={{height: "130%"}}/>
            </div>
            <div className="md:hidden block sm:order-2 order-1">
              <img src="/main_title_responsive.webp" alt="hero" id="main_image" className={opacity ? "opacity-100 w-full transition-all ease-in duration-700" : "opacity-0 mt-5 w-full transition-all ease-in duration-700"} />
             </div>
          </div>
      </div>
    );
  }
  
  export default MainTitle;