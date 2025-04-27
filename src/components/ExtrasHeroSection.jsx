import React from 'react';

const ExtrasHeroSection = () => {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20 bg-[#101828] py-20">
      <a 
        href="#services" 
        className="border border-white/20 rounded-full py-2 px-5 text-white text-sm mb-6 hover:scale-105 transition duration-300 ease-in-out bg-[#101828]/80 backdrop-blur-sm"
        >
        RAGOS Ek Hizmetleri
        <span className="font-semibold text-white ml-1">Keşfedin</span>
      </a>
      
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white sm:text-7xl">
        Bakım Deneyiminizi Güçlendirin
      </h1>
      
      <p className="mx-auto mt-12 max-w-xl text-lg text-gray-200 leading-7">
        RAGOS ile sunduğumuz ek hizmetlerle bakım sürecinizi daha güvenli, daha şeffaf ve daha verimli hale getirin. 
        Garanti paketlerinden kurumsal çözümlere kadar ihtiyacınız olan her şey burada.
      </p>
      
      <a 
        className="mb-10 bg-white rounded-xl text-[#101828] font-medium px-8 py-4 sm:mt-12 mt-10 hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl" 
        href="#services"
      >
        Hizmetleri Keşfet →
      </a>
    </main>
  );
};

export default ExtrasHeroSection;