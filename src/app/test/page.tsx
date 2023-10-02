"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MainTitle = () => {
    const [testo, setTesto] = useState("");
    const [result, setResult] = useState("");

    const checkA = () => {
      console.debug(testo);
      let invertedText = testo.split("").reverse().join("");
      if(testo === invertedText){
        setResult("Palindroma");
      }else{
        setResult("Non Palindroma");
      }
    }

    return (
      <>
        <div className="">
            <div className="flex justify-center items-center">
              <input type="text" onChange={(e) => setTesto(e.target.value)} />
              <button onClick={() => checkA()}>
                Button
              </button>
            </div>
            <div>
              <p>{result}</p>
            </div>
        </div>
      </>
    );
  }

  
  export default MainTitle;