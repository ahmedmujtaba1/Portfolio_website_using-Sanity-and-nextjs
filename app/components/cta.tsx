"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link"
import Image from "next/image"
import myPic from "@/public/mypic.jpg"
export const Cta = () => {
  const phrases = [
    "an Expert Python Developer.",
    "a Full Stack Developer with Django and Next.js.",
    "an Expert Web Scraper.",
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => {
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
            }, 1000); // Delay before clearing text
          }
        } else {
          if (charIndex > 0) {
            setText((prevText) => prevText.slice(0, -1));
            setCharIndex((prevIndex) => prevIndex - 1);
          } else {
            setTyping(true);
          }
        }
      },
      typing ? 120 : 50
    ); 

    return () => clearTimeout(timer);
  }, [charIndex, phraseIndex, text, typing]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blink interval

    return () => clearInterval(cursorInterval);
  }, []);

  const handleDownload = () => {
    const fileUrl = '/CV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Ahmed Mujtaba CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div id="cta" className="md:mx-auto md:container px-4">
        <div className="pt-24 md:pt-32">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                    Hey, I am{" "}
                    <span className="text-indigo-700">Ahmed Mujtaba</span>
                  </h1>
                  <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    I'm <span className="text-indigo-700">{text}</span>
                    <span
                      className={cursorVisible ? "opacity-100" : "opacity-0"}
                    >
                      |
                    </span>
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                      Contact Me
                    </h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Developer"
                />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="flex items-center justify-between w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                      <i className="fa-solid fa-code icon icon-tabler icon-tabler-discount"></i>
                      </div>
                      <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                          50 +
                        </h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                          Projects
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pl-3 text-green-400">
                        
                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                          2 yrs +
                        </p>
                      </div>
                      <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                        Experience
                      </p>
                    </div>
                  </div>
                  {/* <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                    Yearly Goal
                  </h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                    I am avaliable for Python and Web Development.
                  </h1>
                  <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                   I am an Expert Python Developer, Web Scraper and Full Stack Developer with Django and Next.js. I have experience of +2 yrs.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                      <Link href={"#"} onClick={handleDownload}>Download My CV.</Link>
                    </h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <Image
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src={myPic}
                  alt="Ahmed Mujtaba"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
