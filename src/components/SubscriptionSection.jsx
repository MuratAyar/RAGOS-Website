import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SubscriptionSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const location = useLocation();

  const handlePlanClick = (planLink) => {
    if (location.pathname === planLink) {
      // Aynı sayfadaysak, scrollTo ile en üste git
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Sayfayı tamamen yeniden yükle (state'i resetlemek için)
      window.location.reload();
    } else {
      // Farklı bir sayfaysa, yeni sayfaya git
      window.location.href = planLink;
    }
  };

  return (
    <section className="bg-white font-sans py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl mt-10 mb-10 lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Abonelik Planlarımız
        </h1>

        {/* Toggle */}
        <div className="flex justify-center items-center mb-10 gap-4">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden p-0.5">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-5 py-1.5 text-sm font-medium rounded-md focus:outline-none ${
                !isYearly ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              Aylık
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-5 py-1.5 text-sm font-medium rounded-md focus:outline-none ml-1 ${
                isYearly ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              Yıllık
            </button>
          </div>
          <span className="text-sm text-blue-600 font-medium">%33'e varan indirim</span>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-row justify-between gap-6">
          {[
            {
              title: "Basic",
              price: "899₺",
              yearlyPrice: "7.229₺",
              yearlyOldPrice: "10.788₺",
              description: "Temel bakım takip özellikleriyle başlayın.",
              features: [
                "Tüm gün ses takibi",
                "Temel ses analizi (ağlama, bağırma)",
                "Günlük özet rapor",
                "Ebeveyn bildirimleri",
                "Zaman çizelgesi görüntüleme"
              ],
              buttonText: "Basic Planı İncele",
              borderClass: "border border-gray-200",
              link: "/subscriptions/basic_plan"
            },
            {
              title: "Pro",
              price: "1.199₺",
              oldPrice: "1.499₺",
              yearlyPrice: "9.639₺",
              yearlyOldPrice: "14.488₺",
              description: "Gelişmiş AI analiziyle bakım kalitesini artırın.",
              features: [
                "AI+LLM davranış analizi",
                "Gerçek zamanlı bildirimler",
                "Bakıcı konuşma tonu analizi",
                "Tüm Basic özellikleri",
                "Öncelikli destek"
              ],
              buttonText: "Pro Planı İncele",
              borderClass: "border-2 border-blue-400 relative",
              recommended: true,
              link: "/subscriptions/pro_plan"
            },
            {
              title: "Advanced",
              price: "1.499₺",
              oldPrice: "1.799₺",
              yearlyPrice: "12.049₺",
              yearlyOldPrice: "17.988₺",
              description: "Profesyonel bakım takibi için tüm özellikler.",
              features: [
                "Kişiye özel ses tanıma",
                "Rutin takip ve sapma alarmları",
                "Duygu analizi",
                "Empati düzeyi takibi",
                "Haftalık eğilim grafikleri",
              ],
              buttonText: "Advanced Planı İncele",
              borderClass: "border border-gray-200",
              link: "/subscriptions/advanced_plan"
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg p-6 lg:p-8 flex-1 min-w-[280px] ${plan.borderClass} flex flex-col`}
            >
              {plan.recommended && (
                <span className="absolute top-4 right-6 bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  TAVSİYE EDİLEN
                </span>
              )}
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {plan.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 flex-grow min-h-[50px]">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {isYearly ? plan.yearlyPrice : plan.price}
                </span>
                <span className="text-sm text-gray-500"> / {isYearly ? 'yıl' : 'ay'}</span>
                {(isYearly ? plan.yearlyOldPrice : plan.oldPrice) && (
                  <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-sm line-through ml-2">
                    {isYearly ? plan.yearlyOldPrice : plan.oldPrice}
                  </span>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {isYearly ? `Yıllık ${plan.yearlyOldPrice} yerine` : ''}
                </p>
              </div>

              <button
                onClick={() => handlePlanClick(plan.link)}
                className={`w-full block text-center ${
                  plan.recommended
                    ? "bg-gray-900 hover:bg-gray-700 text-white"
                    : "border border-gray-300 hover:border-gray-400 text-gray-700"
                } py-2.5 rounded-lg font-semibold transition duration-200 mb-8`}
              >
                {plan.buttonText}
              </button>

              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-4">
                  Özellikler:
                </h3>
                <ul className="space-y-3 text-sm flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check text-blue-500 mr-2 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-500 text-center mt-10 mb-10">
          * Fiyatlarımıza KDV dahildir. Kredi ve banka kartları ile ödeme yapabilirsiniz.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionSection;