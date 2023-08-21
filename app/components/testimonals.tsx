import React from "react";

export function Testimonials() {
    return (
        <>
            <div>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4 hover:text-white">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className="w-12 h-12" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4  hover:text-white">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/8BLjmqz/avatar-2.png" alt="profile pictre" className="w-12 h-12" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Alan Max</p>
                            <p className="text-base leading-4 text-center text-gray-600">Designer</p>
                        </div>
                    </div>
                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4  hover:text-white">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/y0KCX7p/avatar-3.png" alt="profile pictre" className="w-12 h-12" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Kera Joo</p>
                            <p className="text-base leading-4 text-center text-gray-600">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
