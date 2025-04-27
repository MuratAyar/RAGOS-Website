import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation  } from 'react-router-dom';
import DevicesSection from '../components/DevicesSection';
import ContactUsSection from '../components/ContactUsSection';
import FooterSection from '../components/FooterSection';

const DeviceDetail = () => {
  const { deviceId } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [deviceData, setDeviceData] = useState(null);
  const sectionRefs = useRef([...Array(4)].map(() => React.createRef()));
  const scrolling = useRef(false);
  const section3Scrollable = useRef(false);
  const cooldown = useRef(false); // Add cooldown ref
  const topRef = useRef(null);
  const location = useLocation();


  // Updated device data with featureImage
  const devices = {
    ragos_lite: {
      image: '/devices/ragos_lite.png',
      featureImage: '/devices/ragos_lite_bg.png',
      specs: [
        'WiFi bağlantılı: Evde kolayca kurulabilir ve sürekli bağlantı sağlar.',
        'Tek yönlü ses iletimi: Yalnızca ses veri gönderimi için optimize edilmiştir.',
        '2 oda desteği: Maksimum 2 odada kullanım için uygundur.',
        'Cloud AI Basic katmanına uyumluluk: Basic abonelik özellikleriyle tam entegrasyon.'
      ],
      features: [
        'Minimalist tasarım: Kompakt ve modern bir görünüm sunar.',
        'Kolay kurulum: Hızlı ve basit adımlarla aktif hale getirilebilir.',
        'Ekonomik çözüm: Uygun fiyatlı ve temel bakım takip ihtiyaçlarını karşılayan bir model.',
        'Dayanıklı yapı: Uzun süreli kullanım için tasarlanmıştır.'
      ],
      comparison: ['ragos_lite', 'ragos_home', 'ragos_mobile']
    },
    ragos_home: {
      image: '/devices/ragos_home.jpg',
      featureImage: '/devices/ragos_home_bg.png',
      specs: [
        'Çift yönlü ses iletimi: Hem ses kaydı yapar hem de ebeveynlerin ses iletebilmesine imkan tanır.',
        '4 oda desteği: Geniş alanlarda kullanım için uygundur.',
        'Mikro SD buffer: İnternet kesintilerinde lokal yedekleme yapar.',
        'Cloud AI Pro katmanına uyumluluk: Pro abonelik özellikleriyle tam entegrasyon.'
      ],
      features: [
        'Akıllı ev kontrolü: Diğer akıllı cihazlarla entegre çalışabilir.',
        'HD ses kalitesi: Net ve anlaşılır bir ses kaydı sağlar.',
        'Uzun pil ömrü: Kesintisiz kullanım için optimize edilmiştir.',
        'Gelişmiş güvenlik: KVKK ve GDPR uyumlu veri işleme.'
      ],
      comparison: ['ragos_lite', 'ragos_home', 'ragos_mobile']
    },
    ragos_mobile: {
      image: '/devices/ragos_mobile.png',
      featureImage: '/devices/ragos_mobile_bg.png',
      specs: [
        'Taşınabilir tasarım: Şarjlı batarya ile bebek arabası, seyahat ve araba gibi farklı ortamlarda kullanım.',
        'GPS destekli: Lokasyon bazlı takip ve analiz.',
        '6 saat aktif kullanım: Taşınabilirlik için optimize edilmiş batarya kapasitesi.',
        'Cloud AI Advanced katmanına uyumluluk: Advanced abonelik özellikleriyle tam entegrasyon.'
      ],
      features: [
        '144Hz kayıt hızı: Ses kaydı ve analizde yüksek doğruluk sağlar.',
        'Yüksek çözünürlüklü mikrofon: Daha net ve detaylı ses yakalama.',
        'Kablosuz bağlantı: Esnek ve kolay bir kullanım deneyimi sunar.',
        'VIP müşteri desteği: Kapsamlı teknik yardım ve öncelikli hizmet.'
      ],
      comparison: ['ragos_lite', 'ragos_home', 'ragos_mobile']
    }
    
  };


  
  useEffect(() => {
    setDeviceData(devices[deviceId]);
  }, [deviceId]);

  useEffect(() => {
    // Sayfa yüklendiğinde veya route değiştiğinde en üste git
    if (topRef.current) {
      // Animasyonları bypass etmek için instant scroll
      topRef.current.scrollIntoView({ behavior: 'instant' });
      
      // Alternatif olarak direkt window scroll:
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  useEffect(() => {
    // Sayfa yüklendiğinde veya route değiştiğinde en üste git
    if (location.state?.forceScrollTop || !location.state) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    const handleNavbarScroll = () => {
      const isScrolled = window.pageYOffset > 10;
      // Navbar'ın scroll durumunu güncellemek için bir yöntem bulmalıyız
      // Bu örnekte document.dispatchEvent kullanıyoruz
      document.dispatchEvent(new CustomEvent('navbarScroll', { detail: { scrolled: isScrolled } }));
    };
  
    // Normal scroll event'ini dinle
    window.addEventListener('scroll', handleNavbarScroll);
    
    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
    };
  }, []);
  
  const handleScroll = (e) => {
    if (!scrolling.current && !cooldown.current) {
      scrolling.current = true;
      cooldown.current = true; // Activate cooldown
      const delta = Math.sign(e.deltaY);

      // Handle Section 3 special case
      if (activeSection === 2) {
        const section = sectionRefs.current[2].current;
        const { scrollTop, scrollHeight, clientHeight } = section;
        const isAtBottom = scrollHeight - scrollTop <= clientHeight + 1;
        const isAtTop = scrollTop === 0;

        if ((delta > 0 && !isAtBottom) || (delta < 0 && !isAtTop)) {
          scrolling.current = false;
          cooldown.current = false;
          return;
        }

        if (isAtBottom && delta > 0) {
          sectionRefs.current[3].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(3);
          setTimeout(() => {
            scrolling.current = false;
            cooldown.current = false;
          }, 500);
          return;
        }

        if (isAtTop && delta < 0) {
          sectionRefs.current[1].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(1);
          setTimeout(() => {
            scrolling.current = false;
            cooldown.current = false;
          }, 500);
          return;
        }
      }

      let newSection = activeSection + delta;
      if (newSection > 3) newSection = 0;
      if (newSection < 0) newSection = 3;

      if (newSection !== activeSection) {
        sectionRefs.current[newSection].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(newSection);
      }

      // Set cooldown timer
      setTimeout(() => {
        scrolling.current = false;
        cooldown.current = false;
      }, 500); // 0.5 second cooldown
    }
  };

  if (!deviceData) return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    color: 'white',
    backgroundColor: '#101828'
  }}>Loading...</div>;

  return (
    <div 
      onWheel={handleScroll} 
      style={{ 
        overflow: 'hidden',
        scrollBehavior: 'smooth',
        height: '100vh'
      }}
    >
      <div ref={topRef} className="absolute top-0 left-0 w-0 h-0" />

      {/* Section 1: Device Overview */}
      <section 
        ref={sectionRefs.current[0]} 
        style={{
          height: '100vh',
          width: '100%',
          opacity: activeSection === 0 ? 1 : 0,
          visibility: activeSection === 0 ? 'visible' : 'hidden',
          transition: 'all 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#101828'
        }}
      >
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '120px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          height: '100%'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={deviceData.image} 
              alt={deviceId} 
              style={{ 
                maxWidth: '600px',
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
              }} 
            />
          </div>
          <div style={{ padding: '0 40px' }}>
            <h1 style={{ 
              fontSize: '3rem',
              marginBottom: '2rem',
              textTransform: 'capitalize',
              color: 'white'
            }}>
              {deviceId.replace(/_/g, ' ')}
            </h1>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {deviceData.specs.map((spec, i) => (
                <li key={i} style={{
                  fontSize: '1.2rem',
                  margin: '1.5rem 0',
                  paddingLeft: '2rem',
                  position: 'relative',
                  color: '#e0e0e0'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#0f33ff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section 
        ref={sectionRefs.current[1]} 
        style={{
          height: '100vh',
          width: '100%',
          opacity: activeSection === 1 ? 1 : 0,
          visibility: activeSection === 1 ? 'visible' : 'hidden',
          transition: 'all 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}
      >
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '120px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          height: '100%'
        }}>
          <div style={{ padding: '0 40px' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '2rem',
              color: '#101828'
            }}>
              Key Features
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {deviceData.features.map((feature, i) => (
                <li key={i} style={{
                  fontSize: '1.2rem',
                  margin: '1.5rem 0',
                  paddingLeft: '2rem',
                  position: 'relative',
                  color: '#555'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#0f33ff',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={deviceData.featureImage} 
              alt="Features" 
              style={{ 
                maxWidth: '600px',
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
        </div>
      </section>

      {/* Section 3: Comparison */}
      <section 
        ref={sectionRefs.current[2]} 
        style={{
          height: '100vh',
          width: '100%',
          opacity: activeSection === 2 ? 1 : 0,
          visibility: activeSection === 2 ? 'visible' : 'hidden',
          transition: 'all 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          position: 'relative',
          overflow: 'auto',
          backgroundColor: '#101828'
        }}
      >
        <div style={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 0'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            width: '100%'
          }}>
            <DevicesSection 
              selectedDevice={deviceId}
              comparisonDevices={deviceData.comparison}
            />
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section 
        ref={sectionRefs.current[3]} 
        style={{
          height: '100vh',
          width: '100%',
          opacity: activeSection === 3 ? 1 : 0,
          visibility: activeSection === 3 ? 'visible' : 'hidden',
          transition: 'all 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          position: 'relative',
          backgroundColor: '#101828',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={{ 
          margin: 'auto',
          width: '100%',
          maxWidth: '1440px',
          padding: '40px 0'
        }}>
          <div style={{ marginBottom: '80px' }}>
            <ContactUsSection />
          </div>
          <FooterSection />
        </div>
      </section>

      {/* Enhanced Navigation Panel */}
        <div style={{
        position: 'fixed',
        right: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
        }}>
        {['Genel Bakış', 'Özellikler', 'Planlar', 'İletişim'].map((label, index) => (
            <button
            key={index}
            onClick={() => {
                sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(index);
            }}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 15px',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                transform: activeSection === index ? 'translateX(-10px)' : 'translateX(0)',
                backgroundColor: activeSection === index ? 'rgba(15, 51, 255, 0.1)' : 'transparent'
            }}
            aria-label={`Go to ${label} section`}
            >
            <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: activeSection === index ? '#0f33ff' : '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: activeSection === index ? '0 0 10px rgba(15, 51, 255, 0.5)' : 'none'
            }}>
                <span style={{
                color: activeSection === index ? '#fff' : '#666',
                fontSize: '12px',
                fontWeight: 'bold'
                }}>
                {index + 1}
                </span>
            </div>
            
            <span style={{
                color: activeSection === index ? '#0f33ff' : '#888',
                fontSize: '14px',
                fontWeight: '600',
                opacity: activeSection === index ? 1 : 0.8,
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
            }}>
                {label}
            </span>
            </button>
        ))}
        </div>
    </div>
  );
};

export default DeviceDetail;