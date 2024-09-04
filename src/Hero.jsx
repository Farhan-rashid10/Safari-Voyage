import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Hero = () => {
  const slides = [
    {
      image: "/src/assets/images/zanz.jpg",
      title: "Elevate Your Honeymoon in Zanzibar",
      description: "Experience the romance of pristine beaches and exotic culture.",
      ctaText: "Plan Your Getaway",
      ctaLink: "/contactus", // Link to ContactUs page
    },
    {
      image: "/src/assets/images/mara3.jpg",
      title: "Safari Adventure in Maasai Mara",
      description: "Witness the breathtaking wildlife in their natural habitat.",
      ctaText: "Book Safari",
      ctaLink: "/contactus", // Link to ContactUs page
    },
    {
      image: "/src/assets/images/diani.jpg",
      title: "Relax in Diani's Paradise",
      description: "Unwind on the white sands of Kenya's most beautiful beach.",
      ctaText: "Explore Diani",
      ctaLink: "/contactus", // Link to ContactUs page
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <Link
                to={slide.ctaLink} // Use Link to route to ContactUs
                className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        &#8250;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
