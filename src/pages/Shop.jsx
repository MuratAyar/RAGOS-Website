// pages/Shop.jsx
import React, { useEffect, useState } from 'react';
import ShopProgressBar from '../components/ShopProgressBar';
import DeviceSelector from '../components/DeviceSelector';
import SubscriptionSelector from '../components/SubscriptionSelector';
import WarrantySelector from '../components/WarrantySelector';
import StorageSelector from '../components/StorageSelector';
import TotalSummary from '../components/TotalSummary';

const Shop = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) setNavbarHeight(navbar.offsetHeight);
  }, []);

  // Update handleSelectDevice to accept deviceId and quantity
  const handleSelectDevice = (deviceId, quantity = 1) => {
    if (!selectedDevice || deviceId !== selectedDevice.id) {
      setSelectedDevice({ id: deviceId, quantity });
      setSelectedSubscription(null);
      setSelectedServices([]);
      setSelectedStorage(null);
    } else {
      // Update quantity for the same device
      setSelectedDevice(prev => ({ ...prev, quantity }));
    }
  };

  // Abonelik değişince servis+depolamayı sıfırla
  const handleSelectSubscription = (planId) => {
    if (planId !== selectedSubscription) {
      setSelectedSubscription(planId);
      setSelectedServices([]);
      setSelectedStorage(null);
    }
  };

  return (
    <div>
      {/* Navbar spacer */}
      {navbarHeight > 0 && (
        <div
          style={{
            height: `${navbarHeight}px`,
            backgroundColor: '#101828',
          }}
        />
      )}

      <div className="max-w-5xl mx-auto px-6 pt-8 space-y-12">
        {/* 0. İlerleme Çubuğu */}
        <ShopProgressBar
          selectedDeviceId={selectedDevice}
          selectedSubscriptionId={selectedSubscription}
          selectedServices={selectedServices}
          selectedStorageId={selectedStorage}
        />

        {/* 1. Cihaz Seçimi */}
        <DeviceSelector
        selectedDevice={selectedDevice}
        onSelect={handleSelectDevice}
        />
        {/* Pass quantity to TotalSummary */}
        {selectedDevice && selectedSubscription && selectedStorage && (
          <TotalSummary
            deviceId={selectedDevice.id}
            quantity={selectedDevice.quantity}
            subscriptionId={selectedSubscription}
            services={selectedServices}
            storageId={selectedStorage}
          />
        )}

        {/* 2. Abonelik Seçimi */}
        {selectedDevice && (
          <SubscriptionSelector
            deviceId={selectedDevice.id}
            selectedSubscriptionId={selectedSubscription}
            onSelect={handleSelectSubscription}
          />
        )}

        {/* 3. Servis & Garanti */}
        {selectedSubscription && (
          <WarrantySelector
            selectedServices={selectedServices}
            onChange={setSelectedServices}
          />
        )}

        {/* 4. Depolama */}
        {selectedSubscription && (
          <StorageSelector
            selectedStorageId={selectedStorage}
            onSelect={setSelectedStorage}
          />
        )}

        {/* 5. Özet & Ödeme */}
        {selectedDevice && selectedSubscription && selectedStorage && (
          <TotalSummary
            deviceId={selectedDevice.id}
            quantity={selectedDevice.quantity}
            subscriptionId={selectedSubscription}
            services={selectedServices}
            storageId={selectedStorage}
          />
        )}
      </div>
    </div>
  );
};

export default Shop;
