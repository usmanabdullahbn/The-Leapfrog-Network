"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    contactNumber: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="w-full bg-[#393C77] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
          <span className="text-white">LET'S CHAT OVER </span>
          <span className="text-[#f52c72]">BREW</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-[#f52c72]">READY</span>
                <span className="text-white"> TO TAKE A</span>
              </h3>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">LEAP TO LEVEL UP</span>
              </h3>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">YOUR </span>
                <span className="text-[#f52c72]">BRAND?</span>
              </h3>
            </div>

            <div className="relative w-full max-w-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cjlEDBYn4PIgNGBPHIDQSK2Va1CUX2.png"
                alt="Illustration of person at computer"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl p-6 md:p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-white text-xl">
                  What is your full name?
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name here"
                  className="w-full px-4 py-3 rounded-lg bg-[#403684] text-white placeholder-gray-400 border border-transparent focus:border-[#f52c72] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-xl">
                  What is your email address?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here"
                  className="w-full px-4 py-3 rounded-lg bg-[#403684] text-white placeholder-gray-400 border border-transparent focus:border-[#f52c72] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="text-white text-xl">
                  What is company name?
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name here"
                  className="w-full px-4 py-3 rounded-lg bg-[#403684] text-white placeholder-gray-400 border border-transparent focus:border-[#f52c72] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactNumber" className="text-white text-xl">
                  What is your contact number?
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your contact number here"
                  className="w-full px-4 py-3 rounded-lg bg-[#403684] text-white placeholder-gray-400 border border-transparent focus:border-[#f52c72] focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#352c78] py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                Get in Touch
                <svg
                  className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

