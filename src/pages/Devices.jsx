import React, { useEffect, useRef, useState } from 'react';
import DevicesSection from '../components/DevicesSection';
import DevicesAboutSection from '../components/DevicesAboutSection';

const Devices = () => {
  const [navbarHeight, setNavbarHeight] = useState(0); // Navbar yüksekliğini tutmak için state
  const devicesPageRef = useRef(null); // Devices sayfası için ref
  const navbarRef = useRef(null); // Navbar'ı referansla almak için ref

  useEffect(() => {
    // Navbar'ın yüksekliğini hesapla
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight); // Navbar yüksekliğini state'e kaydet
    }

    // Bu useEffect sadece bir kez çalışacak ve navbar yüksekliğini alacak
  }, []); 

  return (
    <div ref={devicesPageRef}>
      {/* Spacer elementi, navbar yüksekliğine göre ayarlanacak */}
      {navbarHeight > 0 && (
        <div
          style={{
            height: `${navbarHeight}px`, // Spacer'ın yüksekliği navbar ile aynı
            backgroundColor: '#101828', // Spacer'ın rengi navbar ile uyumlu
          }}
        ></div>
      )}

      {/* DevicesSection, spacer'ın altına yerleştirilecek */}
      <DevicesSection />
      <DevicesAboutSection />
    </div>
  );
};

export default Devices;
