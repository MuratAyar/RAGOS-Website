import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavbarSection = ({ forcedOpaque = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [devicesDropdownOpen, setDevicesDropdownOpen] = useState(false);
  const [subscriptionDropdownOpen, setSubscriptionDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const devicesDropdownRef = useRef(null);
  const subscriptionDropdownRef = useRef(null);

  useEffect(() => {
    if (forcedOpaque) {
      setScrolled(true);
      return; // scroll event'e gerek yok
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [forcedOpaque]);

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      window.location.reload();
    } else {
      window.location.href = path;
    }
    setDevicesDropdownOpen(false);
    setSubscriptionDropdownOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const toggleDevicesDropdown = (e) => {
    e.stopPropagation();
    setDevicesDropdownOpen(!devicesDropdownOpen);
    setSubscriptionDropdownOpen(false);
  };

  const toggleSubscriptionDropdown = (e) => {
    e.stopPropagation();
    setSubscriptionDropdownOpen(!subscriptionDropdownOpen);
    setDevicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        devicesDropdownRef.current && !devicesDropdownRef.current.contains(event.target) &&
        subscriptionDropdownRef.current && !subscriptionDropdownRef.current.contains(event.target)
      ) {
        setDevicesDropdownOpen(false);
        setSubscriptionDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent backdrop-blur-md'}`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <button onClick={handleHomeClick} className="flex items-center space-x-3 group">
          <img src="/RAGOS_logo.png" className="h-12" alt="Ragos Logo" />
          <span className="text-2xl font-semibold text-white group-hover:text-blue-800 transition-colors duration-300">RAGOS</span>
        </button>

        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8 items-center font-medium">
            <li>
              <Link to="/" className="relative text-white px-2 py-1 transition hover:text-blue-800" onClick={handleHomeClick}>
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 bg-blue-800 rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition -z-1"></span>
              </Link>
            </li>

            <li className="relative" ref={devicesDropdownRef}>
              <button onClick={toggleDevicesDropdown} className="flex items-center text-white px-2 py-1 hover:text-blue-800">
                Devices
                <svg className="w-2.5 h-2.5 ml-2.5" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
              </button>
              {devicesDropdownOpen && (
                <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg z-20">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><button onClick={() => handleNavigation('/devices')} className="w-full px-4 py-2 text-left font-semibold border-b hover:bg-gray-100">Devices</button></li>
                    <li><button onClick={() => handleNavigation('/devices/ragos_lite')} className="w-full px-4 py-2 text-left hover:bg-gray-100">RAGOS Lite</button></li>
                    <li><button onClick={() => handleNavigation('/devices/ragos_home')} className="w-full px-4 py-2 text-left hover:bg-gray-100">RAGOS Home</button></li>
                    <li><button onClick={() => handleNavigation('/devices/ragos_mobile')} className="w-full px-4 py-2 text-left hover:bg-gray-100">RAGOS Mobile</button></li>
                  </ul>
                </div>
              )}
            </li>

            <li className="relative" ref={subscriptionDropdownRef}>
              <button onClick={toggleSubscriptionDropdown} className="flex items-center text-white px-2 py-1 hover:text-blue-800">
                Subscription
                <svg className="w-2.5 h-2.5 ml-2.5" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
              </button>
              {subscriptionDropdownOpen && (
                <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg z-20">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><button onClick={() => handleNavigation('/subscriptions')} className="w-full px-4 py-2 text-left font-semibold border-b hover:bg-gray-100">Subscription</button></li>
                    <li><button onClick={() => handleNavigation('/subscriptions/basic_plan')} className="w-full px-4 py-2 text-left hover:bg-gray-100">Basic Plan</button></li>
                    <li><button onClick={() => handleNavigation('/subscriptions/pro_plan')} className="w-full px-4 py-2 text-left hover:bg-gray-100">Pro Plan</button></li>
                    <li><button onClick={() => handleNavigation('/subscriptions/advanced_plan')} className="w-full px-4 py-2 text-left hover:bg-gray-100">Advanced Plan</button></li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link to="/extras" className="relative text-white px-2 py-1 hover:text-blue-800">
                <span className="relative z-10">Extra Services</span>
                <span className="absolute inset-0 bg-blue-800 rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition -z-1"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Sağdaki Bağlantılar */}
        <div className="flex items-center space-x-4">
          {/* Shop Link */}
          <Link
            to="/shop"
            className="relative text-white px-3 py-1.5 rounded-md hover:text-blue-800"
          >
            <span className="relative z-10 strong"> <b>Shop</b></span>
            <span className="absolute inset-0 bg-blue-800 rounded-md scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition -z-1"></span>
          </Link>

          {/* FAQ Link */}
          <Link
            to="/faq"
            className="relative text-white px-3 py-1.5 rounded-md hover:text-blue-800"
          >
            <span className="relative z-10 text-gray-300">FAQ</span>
            <span className="absolute inset-0 bg-blue-800 rounded-md scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition -z-1"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
