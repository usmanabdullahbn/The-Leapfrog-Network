import React from "react";
import img1 from "../assert/img1.jpg"
import img2 from "../assert/img2.png"
import img3 from "../assert/img3.jpg"

const OurWork = () => {
  return (
    <div className="bg-[#2F2F76] min-h-screen py-8 sm:py-12 md:py-16 px-4 md:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          OUR WORK
        </h1>

        {/* Cards Container */}
        <div className="space-y-6 sm:space-y-8">
          {/* Lenskart Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 relative h-64 sm:h-80 md:h-auto">
                <img
                  src={img1}
                  alt="Lenskart Campaign"
                  className="w-full h-full object-cover"
                />
                {/* Right border of image div - only on md and up */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
              </div>
              <div className="w-full md:w-2/5 bg-[#2F2D74] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">
                  LENSKART AIR
                </h2>
                <p className="text-white text-center md:text-left text-sm sm:text-base md:text-lg">
                  We effectively promoted the latest ad film 'Halka Rakh Yaar'
                  by Lenskart, showcasing their new product range, through
                  community marketing. Our efforts resulted in reaching out to
                  over 10M+ people and delivering more than 4M+ views overall,
                  driving significant engagement and brand visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Airtel Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-indigo-900 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center relative order-2 md:order-1">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">
                  AIRTEL - SUPERHERO
                </h2>
                <p className="text-white text-center md:text-left text-sm sm:text-base md:text-lg">
                  Created and executed campaign to promote Airtel's new service,
                  Airtel Superhero during the phase of lockdown via. TikTok
                  Influencer Marketing delivering an overall 15M+ Views, 2M+
                  Engagement, and 3.5M+ visitors on the app.
                </p>
                {/* Right border of text div - only on md and up */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
              </div>
              <div className="w-full md:w-3/5 h-64 sm:h-80 md:h-auto order-1 md:order-2">
                <img
                  src={img2}
                  alt="Airtel Superhero Campaign"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TVF Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 relative h-64 sm:h-80 md:h-auto">
                <img
                  src={img3}
                  alt="Yeh Meri Family Campaign"
                  className="w-full h-full object-cover"
                />
                {/* Right border of image div - only on md and up */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-1 bg-white"></div>
              </div>
              <div className="w-full md:w-2/5 bg-indigo-900 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">
                  TVF - PLAY
                </h2>
                <p className="text-white text-center md:text-left text-sm sm:text-base md:text-lg">
                  Amplified Watchtime for the series - 'Yeh Meri Family' &
                  delivered 5M+ Visitors on websites who engaged and contributed
                  to the Success of overall success of campaign.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
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

export default OurWork;
