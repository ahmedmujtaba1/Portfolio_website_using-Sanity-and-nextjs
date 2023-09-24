"use client"
import React, { useState, useEffect } from "react";


const Typewriter = () => {
    const phrases = ["Web Developer", "Python Enthusiast", "Tech Enthusiast"];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = 100;
  
    useEffect(() => {
      if (currentIndex < phrases[currentPhraseIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + phrases[currentPhraseIndex][currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
  
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setCurrentPhraseIndex((prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length);
        }, 1000); 
      }
    }, [currentIndex, delay, phrases, currentPhraseIndex]);
  
    return (
      <div className="typewriter-container">
        <span className="typewriter-text">{currentText}</span>
        <span className="blinking-cursor">|</span>
      </div>
    );
  };
  
  export default Typewriter;