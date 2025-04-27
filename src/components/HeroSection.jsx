import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const wheel = document.querySelector('.wheel');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (wheel) {
        wheel.style.opacity = scrollPosition > 100 ? '0' : '1';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<header className="relative min-h-[120vh] flex items-center justify-center bg-gray-900 overflow-hidden">
{/* Background */}
      <div
        className="absolute inset-0 brightness-[0.4] bg-cover bg-center bg-[length:100%_100%] md:bg-[length:100%_100%]"
        style={{ backgroundImage: "url('/images/banner_image.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="subtitle text-xl md:text-2xl font-light text-gray-300 mb-2">
          RAGOS Güvenlik Teknolojileri
        </h1>
        <h1 className="title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
          Sevdiğiniz Herkes Artık Daha Güvende
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Geniş buton - olduğu gibi kalıyor */}
            <Link
                to="/devices"
                className="inline-flex items-center justify-center px-16 py-3 text-base font-medium text-white rounded-lg bg-gray-900 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 transition-all duration-300"
            >
                Cihazları Keşfet
            </Link>

            {/* İçeriğe göre küçülen buton */}
            <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900"
            >
                <img
                src="/images/control-play-icon.png"
                alt="Play Icon"
                className="w-4 h-4"
                />
                Tanıtım Videomuzu İzle
            </button>
        </div>



        {/* Scroll Icon */}
        <div className="mouse-icon mt-10 flex justify-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1 relative overflow-hidden">
            <div className="wheel bg-white w-1 h-2 rounded-full absolute wheel-drop"></div>
          </div>
        </div>
      </div>

      {/* SVG Shape */}
      <div className="shape absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-40">
        <svg viewBox="0 0 1500 200" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Modal */}
      {isVideoOpen && (
        <div
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        onClick={() => setIsVideoOpen(false)}
      >
        <div
          className="relative w-[90%] md:w-[70%] lg:w-[60%] h-[60vh] bg-black rounded-lg overflow-hidden shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src="https://www.youtube.com/embed/PHpPtdk9rco"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-2 right-2 text-white text-2xl hover:text-red-400"
          >
            ✕
          </button>
        </div>
      </div>
      
      
      )}
    </header>
  );
};

export default HeroSection;
