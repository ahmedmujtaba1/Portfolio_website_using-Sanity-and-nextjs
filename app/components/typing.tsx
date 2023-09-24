import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  phrases: string[][];
}

export function TypingEffect({ phrases }: TypingEffectProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typing) {
        if (charIndex < phrases[phraseIndex].length) {
          setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          // Show the completed phrase for a moment
          setTimeout(() => {
            setTyping(false);
            setTimeout(() => {
              setTyping(true);
              setCharIndex(0);
              setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
              setText("");
            }, 1000); // Delay before typing the next phrase
          }, 2000); // Time the completed phrase is shown
        }
      } else {
        if (charIndex > 0) {
          setText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setTyping(true);
        }
      }
    }, 150); // Adjust typing speed here (larger number for slower)

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Adjust cursor blink speed here

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [charIndex, phraseIndex, typing, phrases]);

  return (
    <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
      I'm <span className="text-indigo-700">{text}</span>
      <span className={cursorVisible ? "opacity-100" : "opacity-0"}>|</span>
    </h2>
  );
}
