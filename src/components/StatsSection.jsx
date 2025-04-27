import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px' // Biraz erken tetikleme için
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section ref={statsRef} className="bg-gray-900 text-zinc-900 py-8 sm:py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16 overflow-x-auto">
        <div className="flex flex-nowrap md:flex-row justify-between min-w-max">
          {/* Stat 1: Mutlu Aile */}
          <div className="w-1/4 min-w-[200px]  px-4">
            <div className="font-bold text-5xl text-white mb-5 text-center">
              {isVisible ? (
                <CountUp end={260} duration={2.5} separator="," suffix="+" />
              ) : (
                '0+'
              )}
            </div>
            <span className="text-xl text-white text-center block">Mutlu Aile</span>
          </div>

          {/* Stat 2: Aktif Cihaz */}
          <div className="w-1/4 min-w-[200px]  px-4">
            <div className="font-bold text-5xl text-white mb-5 text-center">
              {isVisible ? (
                <CountUp end={975} duration={2.5} separator="," suffix="+" />
              ) : (
                '0+'
              )}
            </div>
            <span className="text-xl text-white text-center block">Aktif Cihaz</span>
          </div>

          {/* Stat 3: Başarılı Analiz */}
          <div className="w-1/4 min-w-[200px]  px-4">
            <div className="font-bold text-5xl text-white mb-5 text-center">
              {isVisible ? (
                <CountUp end={1000000} duration={3} separator="." suffix="+" />
              ) : (
                '0+'
              )}
            </div>
            <span className="text-xl text-white text-center block">Başarılı Analiz</span>
          </div>

          {/* Stat 4: Neden */}
          <div className="w-1/4 min-w-[200px] px-4">
            <div className="font-bold text-5xl text-white mb-5 text-center">
              {isVisible ? (
                <CountUp end={100} duration={2} separator="," suffix="+" />
              ) : (
                '0+'
              )}
            </div>
            <span className="text-xl text-white text-center block">Bizi Tercih Etmek İçin Neden</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;