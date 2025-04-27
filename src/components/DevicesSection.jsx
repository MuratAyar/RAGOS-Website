import React from 'react';
import { Link, useNavigate, useLocation  } from 'react-router-dom';

const DevicesSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDeviceClick = (deviceLink) => {
    if (location.pathname === deviceLink) {
      // Aynı sayfadaysak, scrollTo ile en üste git
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Sayfayı tamamen yeniden yükle (state'i resetlemek için)
      window.location.reload();
    } else {
      // Farklı bir sayfaysa, yeni sayfaya git
      window.location.href = deviceLink; // navigate yerine direkt href kullanıyoruz
    }
  };

  const devices = [
    {
      id: 1,
      name: "RAGOS Lite",
      description: "Premium ses analiz cihazı ile ailenizin güvenliğini sağlayın",
      price: "₺1,390",
      image: "/images/RAGOS_image.png",
      link: "/devices/ragos_lite",
      features: {
        wifi: true,
        audio: "Tek yönlü",
        pairing: "2 cihaz",
        cloud: "Basic",
        subscription: "Basic",
        isolation: false,
        rooms: "1 oda",
        storage: false,
        battery: false,
        gps: false
      }
    },
    {
      id: 2,
      name: "RAGOS Home",
      description: "Evdeki yaşlılarınız için güvenlik ve takip çözümü",
      price: "₺2,290", 
      image: "/images/red_speaker.jpg",
      link: "/devices/ragos_home",
      features: {
        wifi: true,
        audio: "Çift yönlü",
        pairing: "4 cihaz",
        cloud: "Pro",
        subscription: "Pro & Advanced",
        isolation: true,
        rooms: "4 oda",
        storage: "Mikro SD",
        battery: false,
        gps: false
      }
    },
    {
      id: 3,
      name: "RAGOS Mobil",
      description: "Bebekleriniz için gelişmiş ses ve hareket takibi",
      price: "₺2,990",
      image: "/images/mobil.png",
      link: "/devices/ragos_mobile",
      features: {
        wifi: true,
        audio: "Çift yönlü",
        pairing: "Max 2 cihaz",
        cloud: "Pro",
        subscription: "Pro & Advanced",
        isolation: true,
        rooms: "1 oda",
        storage: true,
        battery: "6 saat",
        gps: true
      }
    }
  ];

  const FeatureRow = ({ label, value1, value2, value3, link }) => {
    const renderValue = (value) => {
      if (typeof value === 'boolean') {
        return value ? (
          <svg className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-500 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        );
      }
      return <span className="text-center block text-white">{value}</span>;
    };

    return (
      <div className="grid grid-cols-4 gap-4 py-4 border-b border-white/20 items-center">
        <div className="text-left text-white font-semibold">
          {label}
          {link && <Link to={link} className="text-blue-400 hover:underline ml-2 text-sm">(detay)</Link>}
        </div>
        <div>{renderValue(value1)}</div>
        <div>{renderValue(value2)}</div>
        <div>{renderValue(value3)}</div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 py-16 pb-10">
      <div className="container mx-auto px-4">
        {/* Başlık alanı */}
        <div className="text-center pt-8 pb-12">
          <h2 className="text-3xl font-bold text-white mb-10">RAGOS Cihaz Serisi</h2>
        </div>

        {/* Cihazlar alanı */}
        <div className="flex justify-center mb-16">
        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-6 max-w-full">
            {devices.map((device) => {
            const originalPrices = {
                1: "₺1,590",
                2: "₺2,590",
                3: "₺3,390"
            };

            return (
                <div
                key={device.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow mx-auto"
                >
                <div className="relative overflow-hidden rounded-t-lg h-48">
                    <img
                    className="object-cover w-full h-full"
                    src={device.image}
                    alt={device.name}
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                        onClick={() => handleDeviceClick(device.link)}
                        className="bg-white/50 text-gray-900 py-2 px-6 rounded-full font-bold transition-all duration-300 hover:bg-white hover:scale-105"
                    >
                        Detayları Gör
                    </Link>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{device.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{device.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <div>
                    <span className="text-gray-500 line-through text-sm block">{originalPrices[device.id]}</span>
                    <span className="text-gray-900 font-bold text-lg">{device.price}</span>
                    </div>
                    <Link
                    to="/contact"
                    className="bg-blue-600 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
                    >
                    Sepete Ekle
                    </Link>
                </div>
                </div>
            );
            })}
        </div>
        </div>


        {/* Karşılaştırma Tablosu */}
        <div className="text-center rounded-lg shadow-lg overflow-hidden text-white">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Cihaz Karşılaştırma Tablosu</h3>

            {/* Tablo Başlığı */}
            <div className="grid grid-cols-4 gap-4 py-4 rounded-t-lg font-medium text-white bg-blue-800">
              <div className="text-center">Özellikler</div>
              <div className="text-center">RAGOS Lite</div>
              <div className="text-center">RAGOS Home</div>
              <div className="text-center">RAGOS Mobil</div>
            </div>

            {/* Özellik Satırları */}
            <FeatureRow label="WiFi Bağlantı" value1={devices[0].features.wifi} value2={devices[1].features.wifi} value3={devices[2].features.wifi} />
            <FeatureRow label="Ses İletimi" value1={devices[0].features.audio} value2={devices[1].features.audio} value3={devices[2].features.audio} />
            <FeatureRow label="Eşleştirme" value1={devices[0].features.pairing} value2={devices[1].features.pairing} value3={devices[2].features.pairing} />
            <FeatureRow label="Cloud AI Katmanı" value1={devices[0].features.cloud} value2={devices[1].features.cloud} value3={devices[2].features.cloud} />
            <FeatureRow label="Abonelik Uyumu" value1={devices[0].features.subscription} value2={devices[1].features.subscription} value3={devices[2].features.subscription} />
            <FeatureRow label="Ses Yalıtımı" value1={devices[0].features.isolation} value2={devices[1].features.isolation} value3={devices[2].features.isolation} />
            <FeatureRow label="Oda Desteği" value1={devices[0].features.rooms} value2={devices[1].features.rooms} value3={devices[2].features.rooms} />
            <FeatureRow label="Yerel Depolama" hazı Görüntülevalue1={devices[0].features.storage} value2={devices[1].features.storage} value3={devices[2].features.storage} />
            <FeatureRow label="Pil Ömrü" value1={devices[0].features.battery} value2={devices[1].features.battery} value3={devices[2].features.battery} />
            <FeatureRow label="GPS Desteği" value1={devices[0].features.gps} value2={devices[1].features.gps} value3={devices[2].features.gps} />
            
            {/* Satın Alma Butonları */}
            <div className="grid grid-cols-4 gap-4 pt-6">
              <div></div>
              {devices.map((device) => (
                <Link
                  key={device.id}
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-bold transition-colors"
                >
                  Detayları Gör
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesSection;
