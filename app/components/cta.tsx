"use client";
import { useEffect, useState } from "react";
import React from "react";
export const Cta = () => {
  const phrases = [
    "Expert Python Developer.",
    "Full Stack Developer with Django and Next.js.",
    "Expert Web Scraper.",
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
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-32">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                    Hey, I am{" "}
                    <span className="text-indigo-700">Ahmed Mujtaba</span>
                  </h1>
                  <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    I am an <span className="text-indigo-700">{text}</span>
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
                          2 yrs
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
                    Easily manage sales through our invoicing system
                  </h1>
                  <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                    Here at Globex we take special care of what your
                    organization needs instead of selling you a mass market tool
                    that takes a one size fits all approach. I personally review
                    each and every client business and oversee the team that
                    tailores a solution
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                      Lets Get Started
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
                  src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                  alt=""
                />
                <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                  <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                    Invoice # 35RD87
                  </h4>
                  <p className="text-gray-600 text-xs leading-3 font-normal">
                    Assigned to: Josh Rollins
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-user"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      Specter Consultancy
                    </p>
                  </div>
                  <div className="mt-3 flex items-center">
                    <span className="text-gray-600">
                      <svg
                        className="feather feather-dollar-sign"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={12} y1={1} x2={12} y2={23} />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </span>
                    <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                      2,354 USD
                    </p>
                  </div>
                  <button className="relative focus:outline-none mt-4 py-2 pr-10 bg-indigo-700 text-white tracking-normal text-xs pl-3 cursor-pointer hover:opacity-90">
                    View Invoice
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 m-auto mr-3 icon icon-tabler icon-tabler-arrow-right"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <line x1={13} y1={18} x2={19} y2={12} />
                      <line x1={13} y1={6} x2={19} y2={12} />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
