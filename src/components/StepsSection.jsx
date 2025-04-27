import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StepsSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const sectionRef = useRef(null);
  const stepsCount = 3;
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const autoChangeInterval = 9000; // 4 saniye
  const [progressValue, setProgressValue] = useState(0);
  const duration = 4; // saniye
  const [canChangeStep, setCanChangeStep] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Updated steps content data
  const steps = [
    {
      id: 1,
      title: "Veri Toplama",
      description: "Gelişmiş mikrofon cihazlarımız, evinizin her köşesinde yüksek hassasiyetle ses verileri toplar. Bu veriler, özel güvenlik protokolleriyle şifrelenerek Wi-Fi bağlantısı üzerinden anında bulut sistemlerimize aktarılır. Veri toplama işlemi sürekli ve kesintisiz olarak gerçekleşir, böylece çocuğunuzun güvenliği için kritik öneme sahip hiçbir ses kaydını kaçırmazsınız.",
      image: "/images/wifi.png",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      accentColor: "#101828",
      textColor: "text-gray-800",
      buttonText: "Cihazları Keşfet",
      buttonAction: () => {
        navigate('/devices');
        window.scrollTo(0, 0); // Sayfa başına kaydır
      }
    },
    {
      id: 2,
      title: "AI Analizi",
      description: "Güçlü yapay zeka algoritmaları, toplanan ses verilerini saniyeler içinde analiz eder. Sistem, anormal ses paternlerini, ağlama seslerini ve özel dikkat gerektiren durumları tespit ederek anında değerlendirir. Tüm veriler hızlıca işlenir, kategorilere ayrılır ve önem derecesine göre sınıflandırılır. Bu analiz sonuçları, kolay anlaşılır raporlar halinde mobil uygulamanıza gönderilir.",
      image: "/images/cloud.jpg",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200", 
      accentColor: "#101828",
      textColor: "text-gray-800",
      buttonText: "Abonelikleri Keşfet",
      buttonAction: () => {
        navigate('/subscriptions');
        window.scrollTo(0, 0); // Sayfa başına kaydır
      }
    },
    {
      id: 3,
      title: "Ebeveyn Kontrolü",
      description: "Kullanıcı dostu mobil uygulamamız sayesinde çocuğunuzun durumunu istediğiniz an kontrol edebilirsiniz. Sesli uyarılar, detaylı raporlar ve gerçek zamanlı bildirimlerle her zaman bilgilendirilirsiniz. Ofisinizde veya dışarıda olsanız bile, bakıcı ve çocuğunuz arasındaki etkileşimi anında görebilir, gerektiğinde hızlıca müdahale edebilirsiniz. Uygulamamız ayrıca geçmiş verileri saklayarak, uzun vadeli analiz yapmanıza olanak tanır.",
      image: "/images/app.jpg",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      accentColor: "#101828",
      textColor: "text-gray-800",
      buttonText: "Uygulamayı İndir",
      buttonAction: () => window.open("https://play.google.com/store/apps/details?id=com.netatmo.camera&hl=en&pli=1", "_blank")
    }
  ];

  // Otomatik geçiş ve timer yönetimi için effect
  useEffect(() => {
    setProgress(0);
    setCanChangeStep(false);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    const updateInterval = 50; // 50 ms aralıklarla güncelle
    let elapsed = 0;
    
    intervalRef.current = setInterval(() => {
      elapsed += updateInterval;
      const newProgress = (elapsed / autoChangeInterval) * 100;
      setProgress(newProgress);
      setProgressValue(newProgress);
      
      if (elapsed >= autoChangeInterval) {
        setCurrentStep(current => {
          if (current >= stepsCount) {
            return 1;
          } else {
            return current + 1;
          }
        });
      }
    }, updateInterval);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentStep, stepsCount]);

  // Navigate to specific step
  const goToStep = (step) => {
    setCurrentStep(step);
  };

  // Next step function
  const nextStep = () => {
    setCurrentStep(current => {
      if (current >= stepsCount) {
        return 1;
      } else {
        return current + 1;
      }
    });
  };

  // Previous step function
  const prevStep = () => {
    setCurrentStep(current => {
      if (current <= 1) {
        return stepsCount;
      } else {
        return current - 1;
      }
    });
  };

  // Intersection Observer için effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Komponentin yarısı görünürse tetikle
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Otomatik geçiş ve timer yönetimi için effect
  useEffect(() => {
    if (!isVisible) {
      // Eğer komponent görünür değilse timer'ı temizle
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    setProgress(0);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    const updateInterval = 50;
    let elapsed = 0;
    
    intervalRef.current = setInterval(() => {
      elapsed += updateInterval;
      const newProgress = (elapsed / autoChangeInterval) * 100;
      setProgress(newProgress);
      
      if (elapsed >= autoChangeInterval) {
        setCurrentStep(current => {
          if (current >= stepsCount) {
            return 1;
          } else {
            return current + 1;
          }
        });
      }
    }, updateInterval);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentStep, stepsCount, isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 mb-10" 
      id="how-it-works"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-10 mt-10" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          RAGOS Nasıl Çalışır?
        </motion.h2>
        
        {/* Steps navigation */}
        <div className="flex justify-center mb-10">
          <div className="relative w-4/5 max-w-3xl mt-10 mb-10">
            {/* Progress bar */}
            <div className="h-1.5 bg-gray-200 rounded-full">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(currentStep - 1) / (steps.length - 1) * 100}%`,
                  backgroundColor: "#101828"
                }}
              />
            </div>

            {/* Step circles */}
            <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2">
              {steps.map((step) => {
                const isActive = currentStep === step.id;
                const circumference = 2 * Math.PI * 45; // 283 (100x100 viewBox için)

                return (
                  <motion.div 
                    key={step.id}
                    className="flex flex-col items-center relative cursor-pointer"
                    onClick={() => goToStep(step.id)}
                    animate={{
                      scale: isActive ? 1.1 : 1
                    }}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold 
                        ${isActive ? 'bg-[#101828]' : 'bg-gray-300'} text-white
                        relative transition-all duration-300 ease-in-out z-10`}
                      animate={{ 
                        scale: isActive ? 1.2 : 1,
                        boxShadow: isActive 
                          ? '0 0 0 4px rgba(255,255,255,0.8), 0 0 0 8px rgba(16, 24, 40, 0.3)' 
                          : 'none'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {step.id}
                      
                      {/* Timer animasyonu - sadece aktif adımda */}
                      {isActive && (
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                          <circle 
                            cx="50" cy="50" r="45" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.3)" 
                            strokeWidth="10" 
                          />
                          <motion.circle 
                            cx="50" cy="50" r="45" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="10" 
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (circumference * progress / 100)}
                            strokeLinecap="round"
                            style={{ rotate: "-90deg", transformOrigin: "center" }}
                            transition={{ duration: 0.1 }}
                          />
                        </svg>
                      )}
                    </motion.div>
                    
                    <motion.span 
                      className={`text-sm font-medium mt-2 transition-all duration-300
                        ${isActive ? 'text-gray-800 font-bold' : 'text-gray-500'}`}
                      animate={{ 
                        opacity: isActive ? 1 : 0.7,
                        y: isActive ? 0 : 5
                      }}
                    >
                      {step.title}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content display */}
        <div className="relative w-full flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            {steps.map((step) => (
              currentStep === step.id && (
                <motion.div
                  key={step.id}
                  className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gray-50 shadow-xl border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-nowrap flex-row items-center justify-center">
                    {/* Text Content */}
                    <div className="w-1/2 p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">{step.title}</h3>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{step.description}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <motion.button 
                          className="text-white font-bold py-3.5 px-7 rounded-lg transition-colors flex items-center space-x-2"
                          style={{ backgroundColor: "#101828" }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={step.buttonAction}
                        >
                          <span>{step.buttonText}</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </motion.button>
                      </motion.div>
                    </div>
                    
                    {/* Image Section */}
                    <div className="w-1/2 h-auto aspect-square relative overflow-hidden">
                      <img 
                        src={step.image}
                        alt={step.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none">
          <button 
            onClick={prevStep} 
            className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-200 pointer-events-auto"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextStep} 
            className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-200 pointer-events-auto"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile version */}
      <div className="md:hidden py-12 px-4 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">RAGOS Nasıl Çalışır?</h3>
        
        <div className="space-y-8">
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-50 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-56 object-cover"
                />
                <div 
                  className="absolute top-0 left-0 text-white font-bold w-10 h-10 flex items-center justify-center rounded-br-lg"
                  style={{ backgroundColor: "#101828" }}
                >
                  {step.id}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                
                <button 
                  className="mt-6 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full flex items-center justify-center space-x-2"
                  style={{ backgroundColor: "#101828" }}
                  onClick={step.buttonAction}
                >
                  <span>{step.buttonText}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;