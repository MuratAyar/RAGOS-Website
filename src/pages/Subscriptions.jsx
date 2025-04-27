import React, { useEffect, useRef, useState } from 'react';
import SubscriptionSection from '../components/SubscriptionSection';
import SubscriptionAboutSection from '../components/SubscriptionAboutSection';

const Subscriptions = () => {
  const [navbarHeight, setNavbarHeight] = useState(0); // Navbar yüksekliğini tutmak için state
  const subscriptionsPageRef = useRef(null); // Subscriptions sayfası için ref

  useEffect(() => {
    // Navbar'ın yüksekliğini hesapla
    const navbar = document.querySelector('nav'); // Navbar'ı seç
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight); // Navbar yüksekliğini state'e kaydet
    }
  }, []); // Bu useEffect bir kez çalışır

  return (
    <div ref={subscriptionsPageRef}>
      {/* Spacer elementi, navbar yüksekliğine göre ayarlanacak */}
      {navbarHeight > 0 && (
        <div
          style={{
            height: `${navbarHeight}px`, // Spacer'ın yüksekliği navbar ile aynı
            backgroundColor: '#101828', // Spacer'ın rengi navbar ile uyumlu
          }}
        ></div>
      )}

      {/* SubscriptionSection, spacer'ın altına yerleştirilecek */}
      <SubscriptionSection />
      <SubscriptionAboutSection />
    </div>
  );
};

export default Subscriptions;
