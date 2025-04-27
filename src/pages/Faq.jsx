import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0); // Navbar yüksekliğini tutmak için state
  
      useEffect(() => {
          // Navbar'ın yüksekliğini hesapla
          const navbar = document.querySelector('nav');
          if (navbar) {
            setNavbarHeight(navbar.offsetHeight); // Navbar yüksekliğini state'e kaydet
          }
      
          // Bu useEffect sadece bir kez çalışacak ve navbar yüksekliğini alacak
        }, []); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'RAGOS nedir ve nasıl çalışır?',
      answer: 'RAGOS, evde çocuk veya yaşlı bakımı sırasında bakıcıların davranışlarını ses analizi yoluyla değerlendiren bir sistemdir. Akıllı mikrofon cihazları konuşmaları kaydeder, bulut sistemimizde bu ses verileri metne dönüştürülür ve yapay zeka modellerimizle analiz edilir. Sonuçlar mobil uygulamanızda raporlanır ve önemli durumlarda anlık bildirim alırsınız.'
    },
    {
      question: 'RAGOS kamera kullanıyor mu?',
      answer: 'Hayır, RAGOS tamamen ses tabanlı bir sistemdir. Mahremiyetinizi korumak için kamera kullanmıyoruz. Sistemimiz sadece konuşma olduğu zamanlarda kayıt yapar ve bu kayıtlar şifrelenerek işlenir.'
    },
    {
      question: 'Hangi cihaz modelleriniz var?',
      answer: (
        <div>
          Üç farklı cihaz modelimiz bulunmaktadır:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>RAGOS Lite (₺1,390):</strong> Temel ses takibi için wifi bağlantılı cihaz</li>
            <li><strong>RAGOS Home (₺2,290):</strong> Çift yönlü iletişim ve gelişmiş ses yalıtımlı ev modeli</li>
            <li><strong>RAGOS Mobil (₺2,990):</strong> Taşınabilir, GPS destekli şarjlı cihaz</li>
          </ul>
          <Link to="/devices" className="text-blue-400 hover:underline mt-2 inline-block">Cihaz karşılaştırma tablosunu görüntüle</Link>
        </div>
      )
    },
    {
      question: 'Abonelik paketleri arasındaki farklar nelerdir?',
      answer: (
        <div>
          Üç farklı abonelik paketimiz bulunmaktadır:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Basic (₺899/ay):</strong> Temel ses analizi ve günlük rapor</li>
            <li><strong>Pro (₺1,199/ay):</strong> AI+LLM destekli detaylı davranış analizi ve gerçek zamanlı bildirimler</li>
            <li><strong>Advanced (₺1,499/ay):</strong> Kişiselleştirilmiş analiz, rutin takibi ve gelişmiş bakım puanı</li>
          </ul>
          Her cihaz modeli farklı abonelik paketleriyle uyumludur.
        </div>
      )
    },
    {
      question: 'Veri güvenliği nasıl sağlanıyor?',
      answer: 'Tüm ses verileri AES-256 şifreleme ile korunur. KVKK ve GDPR uyumludur. Günlük analizler sonrası ses verileri varsayılan olarak silinir (isteğe bağlı saklama seçeneği mevcuttur). Veriler Türkiye merkezli sunucularda tutulur ve üçüncü taraflarla paylaşılmaz.'
    },
    {
      question: 'Bakıcı performansı nasıl değerlendiriliyor?',
      answer: 'Sistemimiz bakıcı davranışlarını şu metriklerle değerlendirir: konuşma tonu, empati düzeyi, çocuk/yaşlıya verilen sözel tepkiler, ağlama/çağırma durumlarına müdahale süresi, uygunsuz dil kullanımı. Bu veriler günlük raporlarda puanlanır ve zaman içindeki değişim grafiklerle gösterilir.'
    },
    {
      question: 'Kurumsal müşteriler için özel çözümleriniz var mı?',
      answer: (
        <div>
          Evet, bakıcı ajansları, huzurevleri ve kreşler için özel kurumsal paketler sunuyoruz. Bu paketlerde:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Çoklu cihaz yönetimi</li>
            <li>Merkezi kontrol paneli</li>
            <li>Personel bazlı detaylı raporlama</li>
            <li>SLA (Hizmet Seviyesi) garantisi</li>
            <li>Toplu cihaz kurulum desteği</li>
          </ul>
          <Link to="/contact" className="text-blue-400 hover:underline mt-2 inline-block">
            İletişim sayfamızdan kurumsal satış ekibimizle görüşebilirsiniz.
          </Link>
        </div>
      )
    },
    {
      question: 'Cihaz kurulumu zor mu?',
      answer: 'Hayır, cihazlarımız tak-çalıştır şeklinde tasarlanmıştır. Mobil uygulamamızdaki adım adım kılavuzla kolayca kurulum yapabilirsiniz. İsterseniz ek ücret karşılığında (₺399) teknik destek ekibimiz uzaktan kurulum konusunda size yardımcı olabilir.'
    },
    {
      question: 'Garanti ve servis hizmetleri nasıl?',
      answer: 'Tüm cihazlarımız 1 yıl garantilidir. Ek garanti paketleri (₺499/yıl) ve teknik servis önceliği (₺749/yıl) gibi seçeneklerimiz mevcuttur. Arıza durumunda ücretsiz kargo ile cihazınızı yenisiyle değiştiriyoruz.'
    },
    {
      question: 'Deneme sürümü veya iade politikası var mı?',
      answer: 'Evet, 14 gün içinde memnun kalmazsanız ücret iadesi yapıyoruz. Deneme sürümü için lütfen satış noktalarımız ile iletişime geçin. Ayrıca RAGOS Home ve RAGOS Mobil cihazlarını satın alanlara ilk ay ücretsiz abonelik hediye ediyoruz.'
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white dark:bg-gray-900">
      {/* Spacer elementi, navbar yüksekliğine göre ayarlanacak */}
      {navbarHeight > 0 && (
        <div
          style={{
            height: `${navbarHeight}px`, // Spacer'ın yüksekliği navbar ile aynı
            backgroundColor: '#101828', // Spacer'ın rengi navbar ile uyumlu
          }}
        ></div>
      )}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-8 text-center">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 hover:bg-blue-100 dark:hover:bg-gray-800 dark:text-white ${
                  openIndex === index ? 'bg-blue-100 dark:bg-gray-800' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`p-5 border-t border-gray-200 dark:border-gray-700 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="text-gray-500 dark:text-gray-400">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;