import React from 'react';

const TeamSection = () => {
  return (
    <section className="w-full bg-[#352c78] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">MEET OUR </span>
            <span className="text-[#f52c72]">BRAINY BANGERS!</span>
          </h2>
          <p className="text-white text-lg md:text-2xl max-w-4xl mx-auto">
            These Creative Chums make the impact through their sharp minds and savvy souls!
          </p>
        </div>

        {/* Team Image Container */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-3/4 md:w-2/3 lg:w-11/12 mt-12 mb-12">
            <img
              src="https://tlfnetwork.com/assets/img/team.jpg"
              alt="TLF Network Team - A diverse group of creative professionals"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
