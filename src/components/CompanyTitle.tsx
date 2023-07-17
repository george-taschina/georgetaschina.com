"use client";

import React, { useState, useEffect, FunctionComponent  } from "react";
import Link from "next/link";

const CompanyTitle: FunctionComponent<{title: String, firstDescription: String, secondDescription: String}> = (props) => {
    const [isMounted, setIsMounted] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
      setIsMounted(true);
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }, []);

    return (
        <div className="h-screen">
            <div className="parallax"></div>
            <div className={opacity ? "opacity-100 transition-all ease-in duration-700 grid gridl-cols-1 md:grid-cols-2 gap-4 h-1/2" : "opacity-0 mt-5 transition-all ease-in duration-700 grid grid-cols-2 gap-4 h-1/2"}>
                <div className="flex justify-center items-center">                
                    <h1 className="text-2xl md:text-5xl font-bold text-special">{props.title}</h1>
                </div>
                <div className="flex justify-center items-center flex-col container">
                    <p className="font-bold text-xl md:text-2xl w-full">{props.firstDescription}</p>
                    <p className="text-md md:text-xl text-special mt-3">{props.secondDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyTitle;
