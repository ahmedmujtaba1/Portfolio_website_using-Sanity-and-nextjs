import { useState, useEffect } from "react";

interface TypingEffectProps {
  phrases: string[];
}

export function TypingEffect({ phrases }: TypingEffectProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const updateTyping = () => {
    if (typing) {
      if (charIndex < phrases[phraseIndex].length) {
        setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        setTyping(false);
        setTimeout(() => {
          setTyping(true);
          setCharIndex(0);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setText("");
        }, 1000);
      }
    } else {
      if (charIndex > 0) {
        setText((prevText) => prevText.slice(0, -1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else {
        setTyping(true);
      }
    }
  };

  const updateCursor = () => {
    setCursorVisible((prev) => !prev);
  };

  // Start the animations
  const startAnimations = () => {
    setInterval(updateCursor, 500); // Update cursor every 500ms
    updateTyping();
  };

  startAnimations();


  return (
    <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    I'm <span className="text-indigo-700">{text}</span>
                    <span className={cursorVisible ? "opacity-100" : "opacity-0"}>|</span>
    </h2>
  );
}
