import React, { useEffect, useRef, useState } from 'react';
import ExtrasHeroSection from '../components/ExtrasHeroSection';
import ServicePackagesSection from '../components/ServicePackagesSection';
import DataStorageSection from '../components/DataStorageSection';
import EnterpriseSolutionsSection from '../components/EnterpriseSolutionsSection';

const Extras = () => {
    const [navbarHeight, setNavbarHeight] = useState(0); // Navbar yüksekliğini tutmak için state

    useEffect(() => {
        // Navbar'ın yüksekliğini hesapla
        const navbar = document.querySelector('nav');
        if (navbar) {
          setNavbarHeight(navbar.offsetHeight); // Navbar yüksekliğini state'e kaydet
        }
    
        // Bu useEffect sadece bir kez çalışacak ve navbar yüksekliğini alacak
      }, []); 
  
  return (
    <div>
      {/* Spacer elementi, navbar yüksekliğine göre ayarlanacak */}
      {navbarHeight > 0 && (
        <div
          style={{
            height: `${navbarHeight}px`, // Spacer'ın yüksekliği navbar ile aynı
            backgroundColor: '#101828', // Spacer'ın rengi navbar ile uyumlu
          }}
        ></div>
      )}

      <ExtrasHeroSection />
      <ServicePackagesSection />
      <DataStorageSection />
      <EnterpriseSolutionsSection />
    </div>
  );
};

export default Extras;