import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSection from '../components/NavbarSection';
import FooterSection from '../components/FooterSection';
import ContactUsSection from '../components/ContactUsSection';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const topRef = useRef(null);

  const isDeviceDetailPage = location.pathname.includes('/devices/');
  const isSubscriptionDetailPage = location.pathname.includes('/subscriptions/');
  const isSpecialPage = isDeviceDetailPage || isSubscriptionDetailPage;

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${isSpecialPage ? 'overflow-hidden' : ''}`}>
      <div ref={topRef} className="absolute top-0 left-0 w-0 h-0" />
      
      {/* ✅ forcedOpaque prop'u özel sayfalarda true olacak */}
      <NavbarSection forcedOpaque={isSpecialPage} />

      <main className="flex-grow">
        {children}
      </main>

      {!isSpecialPage && <ContactUsSection />}
      {!isSpecialPage && <FooterSection />}
    </div>
  );
};

export default MainLayout;
