import React from "react";
const StrengthSection = () => {
  return (
    <section className="relative w-full bg-[#352c78] py-16 px-4 overflow-hidden font-inter">
      {/* Left fist image */}
      <div className="absolute left-0 top-1/4 transform -translate-y-1/2 w-1/4 max-w-[300px]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3i2heIkBBxSxYEYK2lt4ARRcxl7wpT.png"
          alt="Left strength fist"
          className="w-full h-auto"
        />
      </div>

      {/* Right fist image */}
      <div className="absolute right-0 top-1/4 transform -translate-y-1/2 w-1/4 max-w-[300px]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cK0qSBATYkD5w08fvRosghiItLzZjO.png"
          alt="Right strength fist"
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center z-10 relative">
        <h2 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-white">OUR </span>
          <span className="text-[#f52c72]">STRENGTH</span>
        </h2>

        <div className="w-64 h-0.5 bg-white mx-auto mb-8"></div>

        <p className="text-white text-lg md:text-xl leading-relaxed mb-16 p-4">
          We have built a community comprising of over 1 billion audience
          members and influencers across various social media channels such as
          Facebook, Instagram, Twitter, and TikTok. This diverse community spans
          across categories including lifestyle, fashion, sports, entertainment,
          news, health, and more.
        </p>


        {/* Social Media Stats - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 pt-60">
          {/* Facebook */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <h3 className="text-white text-6xl font-bold">500M+</h3>
              <div className="w-12 h-12 ml-2 bg-white rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="#1877F2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl">
              Facebook Community
              <br />
              Audience
            </p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <h3 className="text-white text-6xl font-bold">800M+</h3>
              <div className="w-12 h-12 ml-2">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <radialGradient
                      id="instagram-gradient"
                      cx="30%"
                      cy="107%"
                      r="150%"
                    >
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#instagram-gradient)"
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl">
              Instagram Community
              <br />
              Audience
            </p>
          </div>
        </div>
  
        
        {/* Crown and 20,000+ Influencers */}
        <div className="mb-16">
          <div className="w-16 h-16 mx-auto mb-2">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M25 0L33 15L50 17L37.5 28L40 45L25 37L10 45L12.5 28L0 17L17 15L25 0Z"
                fill="#f52c72"
              />
            </svg>
          </div>
          <h3 className="text-white text-7xl font-bold mb-2">20,000+</h3>
          <p className="text-white text-2xl">
            Influencer/Celebrities
            <br />
            Across Platform
          </p>
        </div>

        {/* Social Media Stats - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Twitter */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <h3 className="text-white text-6xl font-bold">50M+</h3>
              <div className="w-12 h-12 ml-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="#1DA1F2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl">
              Twitter Community
              <br />
              Audience
            </p>
          </div>

          {/* YouTube */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <h3 className="text-white text-6xl font-bold">200M+</h3>
              <div className="w-14 h-10 ml-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="#FF0000"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl">
              Youtube Community
              <br />
              Audience
            </p>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default StrengthSection;
