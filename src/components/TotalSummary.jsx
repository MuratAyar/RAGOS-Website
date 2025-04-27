// components/TotalSummary.jsx
import React from 'react';

const TotalSummary = ({ deviceId, quantity, subscriptionId, services, storageId }) => {
  const devices = {
    ragos_lite: { name: 'RAGOS Lite', price: 1390 },
    ragos_home: { name: 'RAGOS Home', price: 2290 },
    ragos_mobile: { name: 'RAGOS Mobile', price: 2990 },
  };

  const subscriptions = {
    basic: { name: 'Basic Plan', price: 899 },
    pro: { name: 'Pro Plan', price: 1199 },
    advanced: { name: 'Advanced Plan', price: 1499 },
  };

  const storageOptions = {
    '30-days': { name: '30 Günlük Saklama', price: 0 },
    '6-months': { name: '6 Ay Saklama', price: 199 },
    '1-year': { name: '1 Yıl Saklama', price: 349 },
    enterprise: { name: 'Kurumsal Yedekleme', price: 2999 },
  };

  const servicesPrices = {
    warranty: { name: 'Ek Garanti (1 yıl)', price: 499 },
    priority: { name: 'Teknik Servis & Yenileme', price: 749 },
    installation: { name: 'Hızlı Kurulum', price: 399 },
  };

  // Hesaplamalar
  const device = devices[deviceId];
  const subscription = subscriptions[subscriptionId];
  const storage = storageOptions[storageId];
  const selectedServices = services.map(id => servicesPrices[id]);

  const oneTimeCost = 
    device.price * quantity + // Multiply by quantity
    selectedServices.reduce((sum, s) => sum + s.price, 0);
  const monthlyCost = subscription.price + storage.price;

  return (
    <div className="pt-10 bg-white shadow-lg rounded-lg p-6 space-y-6">
      {/* Başlık */}
      <div className="flex items-center space-x-2">
        {/* Basit bir alışveriş sepeti ikonu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9M5 21h14"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-900">Sipariş Özeti</h2>
      </div>

      {/* Detaylar */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Cihaz:</span>
          <span className="font-medium">{device.name} (x{quantity}) ₺{(device.price * quantity).toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Abonelik Planı:</span>
          <span className="font-medium">{subscription.name} ₺{subscription.price.toLocaleString()} /ay</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">{storage.name} & Depolama Planı:</span>
          <span className="font-medium">
            {storage.price === 0 ? 'Ücretsiz' : `₺${storage.price.toLocaleString()} /ay`}
          </span>
        </div>
        {selectedServices.length > 0 && selectedServices.map((s, idx) => (
          <div key={idx} className="flex justify-between">
            <span className="text-gray-700">{s.name}:</span>
            <span className="font-medium">₺{s.price.toLocaleString()}</span>
          </div>
        ))}
      </div>

      {/* Toplamlar */}
      <div className="border-t border-gray-200 pt-4 space-y-1">
        <div className="flex justify-between text-lg font-semibold">
          <span>Tek Seferlik Toplam:</span>
          <span>₺{oneTimeCost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Aylık Toplam:</span>
          <span>₺{monthlyCost.toLocaleString()}</span>
        </div>
      </div>

      {/* Ödeme Butonu */}
      <button
        onClick={() => alert('Ödeme sayfası yakında aktif olacak!')}
        className="w-full py-3 bg-[#101828] text-white rounded-md font-semibold text-center transition hover:bg-gray-800"
      >
        Ödeme Adımına Devam Et
      </button>
    </div>
  );
};

export default TotalSummary;
