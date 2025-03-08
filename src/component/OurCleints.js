import React from "react";
import unacademy from "../assert/logo/unacademy.png"
import alt_balaji from "../assert/logo/alt_balaji.png"
import hp from "../assert/logo/hp.png"
import bira91 from "../assert/logo/bira91.png"
import the_timeliners from "../assert/logo/the_timeliners.png"
import flipkart from "../assert/logo/flipkart.png"
import zee_music from "../assert/logo/zee_music.png"
import tvf from "../assert/logo/tvf.png"
import byjus from "../assert/logo/byjus.png"
import cultfit from "../assert/logo/cultfit.png"

const OurCleints = () => {
  const clients = [
    {
      name: "Unacademy",
      logo: unacademy,
      bgColor: "bg-white",
    },
    {
      name: "ALT Balaji",
      logo: alt_balaji,
      bgColor: "bg-black",
    },
    {
      name: "HP",
      logo: hp,
      bgColor: "bg-[#0096D6]",
    },
    {
      name: "Bira 91",
      logo: bira91,
      bgColor: "bg-[#FF0000]",
    },
    {
      name: "The Timeliners",
      logo: the_timeliners,
      bgColor: "bg-[#00B6E3]",
    },
    {
      name: "Flipkart",
      logo: flipkart,
      bgColor: "bg-[#2874F0]",
    },
    {
      name: "Zee Music",
      logo: zee_music,
      bgColor: "bg-[#ED1C24]",
    },
    {
      name: "TVF",
      logo: tvf,
      bgColor: "bg-[#FFC20E]",
    },
    {
      name: "BYJU'S",
      logo: byjus,
      bgColor: "bg-[#813588]",
    },
    {
      name: "Cult.fit",
      logo: cultfit,
      bgColor: "bg-black",
    },
  ];

  return (
    <div className="bg-[#2F2F76]  min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white text-6xl md:text-8xl font-bold text-center mb-16">
          OUR CLIENTS
        </h1>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`${client.bgColor} rounded-3xl aspect-square flex items-center justify-center p-4 transform transition-transform hover:scale-105`}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <button className="border-2 border-[#0084FF] text-[#0084FF] transition-colors duration-300 rounded-full px-6 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-medium flex items-center">
            LOAD MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCleints;
