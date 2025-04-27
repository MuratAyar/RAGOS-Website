import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SubscriptionSection from '../components/SubscriptionSection';
import SubscriptionAboutSection from '../components/SubscriptionAboutSection';
import ContactUsSection from '../components/ContactUsSection';
import FooterSection from '../components/FooterSection';

const SubscriptionDetail = () => {
  const { planId } = useParams(); // Changed from subscriptionId to planId to match your route
  const [activeSection, setActiveSection] = useState(0);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const sectionRefs = useRef([...Array(4)].map(() => React.createRef()));
  const scrolling = useRef(false);
  const cooldown = useRef(false);

  const subscriptions = {
    basic_plan: {
      image: '/subscriptions/basic.png',
      featureImage: '/subscriptions/basic_bg.png',
      specs: [
        'Tüm gün ses takibi: Ev ortamındaki her sesi kesintisiz takip eder.',
        'Temel ses analizi (ağlama, bağırma): Çocukların ve yaşlıların önemli ihtiyaçlarını algılayarak anında bilgilendirme yapar.',
        'Günlük özet rapor: Gün içinde yaşanan önemli olayları özetleyen kolay anlaşılır raporlar sunar.',
        'Ebeveyn bildirimleri: Kritik durumlarda ebeveynleri anında uyararak iç huzuru sağlar.'
      ],
      features: [
        'Zaman çizelgesi görüntüleme: Gün boyunca yaşanan olayları saat bazında takip edebilme imkanı.',
        'Temel bakım takip özellikleri: Bakıcı performansını ve bakım sürecini genel hatlarıyla gözlemleme.',
        'Kullanıcı dostu arayüz: Her yaş grubuna hitap eden, kolayca kullanılabilir bir tasarım.',
        '7/24 teknik destek: Herhangi bir sorun durumunda kesintisiz destek alma imkanı.'
      ]
    },
    pro_plan: {
      image: '/subscriptions/pro.png',
      featureImage: '/subscriptions/pro_bg.png',
      specs: [
        'AI+LLM davranış analizi: Bakıcının ses tonu ve davranışlarını analiz eden yapay zeka destekli değerlendirme.',
        'Gerçek zamanlı bildirimler: Olası acil durumlarda anında bilgi akışı sağlar.',
        'Bakıcı konuşma tonu analizi: Söylenen sözlerin ton ve bağlamını analiz ederek empati ve yaklaşım düzeyini belirler.',
        'Tüm Basic özellikleri: Temel plandaki tüm özelliklere ek olarak gelişmiş analiz araçları sunar.'
      ],
      features: [
        'Öncelikli destek: Teknik veya genel sorunlarda hızlı çözüm önceliği.',
        'Gelişmiş raporlama: Bakıcı performansını detaylı analiz eden grafikler ve raporlar.',
        'Kullanıcı özel analizler: Bireysel ihtiyaçlara göre uyarlanmış bakım değerlendirme araçları.',
        'Premium müşteri hizmetleri: Daha özel ve kapsamlı müşteri desteği.'
      ]
    },
    advanced_plan: {
      image: '/subscriptions/advanced.png',
      featureImage: '/subscriptions/advanced_bg.png',
      specs: [
        'Kişiye özel ses tanıma: Her bireyin sesini ayırt edebilme ve kişiselleştirilmiş takip.',
        'Rutin takip ve sapma alarmları: Günlük aktivitelerdeki değişiklikleri tespit ederek zamanında bilgilendirme.',
        'Duygu analizi: Sesli ifadelerden duygusal durumu analiz ederek kapsamlı değerlendirme.',
        'Empati düzeyi takibi: Bakıcının duygusal yaklaşımını ve iletişim kalitesini ölçme.'
      ],
      features: [
        'Haftalık eğilim grafikleri: Bakım sürecindeki değişimleri ve iyileşme/durum kötüleşme eğilimlerini görselleştirme.',
        'Gelişmiş bakım puanı algoritması: Günlük etkileşimleri değerlendirerek genel bir performans puanı oluşturur.',
        'Kurumsal entegrasyon desteği: Huzurevleri, kreşler ve ajanslarla uyumlu kullanım.',
        'VIP müşteri yöneticisi: Kişisel müşteri temsilcisiyle doğrudan iletişim ve çözüm.'
      ]
    }
  };

  useEffect(() => {
    if (planId && subscriptions[planId]) {
      setSubscriptionData(subscriptions[planId]);
    }
  }, [planId]);

  const handleScroll = (e) => {
    if (!scrolling.current && !cooldown.current) {
      scrolling.current = true;
      cooldown.current = true;
      const delta = Math.sign(e.deltaY);

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

      setTimeout(() => {
        scrolling.current = false;
        cooldown.current = false;
      }, 500);
    }
  };

  if (!subscriptionData) return <div style={{
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
      {/* Section 1: Subscription Overview */}
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
              src={subscriptionData.image} 
              alt={planId} 
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
              {planId.replace(/_/g, ' ')}
            </h1>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {subscriptionData.specs.map((spec, i) => (
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
              Öne Çıkan Özellikler
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {subscriptionData.features.map((feature, i) => (
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
              src={subscriptionData.featureImage} 
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
          backgroundColor: 'white'
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
            <SubscriptionSection />
            <SubscriptionAboutSection />
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

export default SubscriptionDetail;