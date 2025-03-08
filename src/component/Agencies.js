import React from 'react'
import havas from "../assert/logo/havas.png"
import eleve from "../assert/logo/eleve.png"
import optimal_media from "../assert/logo/optimal_media.png"
import razorpod from "../assert/logo/razorpod.png"
import so_cheers from "../assert/logo/so_cheers.png"
import wldd from "../assert/logo/wldd.png"
import rvcj from "../assert/logo/rvcj.png"
import wrm from "../assert/logo/wrm.png"
import seed_media from "../assert/logo/seed_media.png"
import marketixe from "../assert/logo/marketixe.png"

const Agencies = () => {
    const agencies = [
        {
          name: "HAVAS",
          logo: havas,
          bgColor: "bg-[#FF0000]",
        },
        {
          name: "eleve",
          logo: eleve,
          bgColor: "bg-[#00B6F1]",
        },
        {
          name: "OPTIMAL MEDIA",
          logo: optimal_media,
          bgColor: "bg-[#E4405F]",
        },
        {
          name: "Razorpod",
          logo: razorpod,
          bgColor: "bg-white",
        },
        {
          name: "SOCHEERS",
          logo: so_cheers,
          bgColor: "bg-[#FF4D8C]",
        },
        {
          name: "WLDD",
          logo: wldd,
          bgColor: "bg-white",
        },
        {
          name: "RVCJ MEDIA",
          logo: rvcj,
          bgColor: "bg-[#8A4B9D]",
        },
        {
          name: "wrm",
          logo: wrm,
          bgColor: "bg-[#0A192F]",
        },
        {
          name: "SEED MEDIA",
          logo: seed_media,
          bgColor: "bg-white",
        },
        {
          name: "marketixe",
          logo: marketixe,
          bgColor: "bg-[#4338CA]",
        },
      ]
    
      return (
        <div className="bg-[#2F2F76] min-h-screen py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h1 className="text-center mb-16 text-5xl md:text-7xl font-bold">
              <span className="text-[#0084FF]">AGENCIES</span> <span className="text-white">WE HAVE HELPED</span>
            </h1>
    
            {/* Agencies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {agencies.map((agency, index) => (
                <div
                  key={index}
                  className={`${agency.bgColor} rounded-3xl aspect-square flex items-center justify-center p-4 transform transition-transform hover:scale-105`}
                >
                  <img
                    src={agency.logo || "/placeholder.svg"}
                    alt={`${agency.name} logo`}
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
      )
}

export default Agencies