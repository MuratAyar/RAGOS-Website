// components/DeviceSelector.jsx
import React from 'react';

const devices = [
  {
    id: 'ragos_lite',
    name: 'RAGOS Lite',
    price: 1390,
    description: 'Wifi destekli, tek yönlü ses iletimi.',
    image: '/images/RAGOS_image.png',
  },
  {
    id: 'ragos_home',
    name: 'RAGOS Home',
    price: 2290,
    description: 'Çift yönlü iletişim ve gelişmiş ses yalıtımı.',
    image: '/images/red_speaker.jpg',
  },
  {
    id: 'ragos_mobile',
    name: 'RAGOS Mobile',
    price: 2990,
    description: 'GPS destekli taşınabilir kullanım.',
    image: '/images/mobil.png',
  },
];

const DeviceSelector = ({ selectedDevice, onSelect }) => {
  const hasSelection = Boolean(selectedDevice?.id);

  return (
    <div className="space-y-6 mt-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        1. Cihaz Seçimi
      </h2>
      <div className="flex justify-center gap-6 overflow-x-auto overflow-y-hidden pb-4">
        {devices.map(device => {
          const isSelected = selectedDevice?.id === device.id;

          // Temel sınıflar
          const classes = [
            'relative', 'group', 'mt-10', 'flex-shrink-0', 'w-80', 'rounded-lg',
            'p-6', 'cursor-pointer', 'transition-all', 'duration-300',
            'transform', 'origin-center', 'bg-white'
          ];

          if (!hasSelection) {
            // Henüz seçim yok: tüm kartlar eşit
            classes.push(
              'border', 'border-gray-200',
              'hover:shadow-xl', 'hover:scale-105'
            );
          } else if (isSelected) {
            // Seçilen kart
            classes.push(
              'border-4', 'border-[#101828]',
              'ring-2', 'ring-[#101828]', 'ring-offset-2', 'ring-offset-white',
               'scale-105'
            );
          } else {
            // Diğer kartlar (seçim var, ama bu kart seçili değil)
            classes.push(
              'border', 'border-gray-300',
              'opacity-60',
              'hover:opacity-100', 'hover:bg-white',
              'hover:shadow-xl', 'hover:scale-105'
            );
          }

          return (
            <div
              key={device.id}
              className={classes.join(' ')}
              onClick={() => {
                if (!isSelected) onSelect(device.id, 1); // Select with quantity 1
              }}
            >
              {/* Görsel */}
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img
                  src={device.image}
                  alt={device.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isSelected
                      ? 'bg-[#101828] opacity-20'
                      : 'bg-gray-900 opacity-10 group-hover:opacity-20'
                  }`}
                />
              </div>

              {/* Metinler */}
              <h3 className={`mt-4 text-xl font-bold ${
                isSelected ? 'text-[#101828]' : 'text-gray-900'
              }`}>
                {device.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {device.description}
              </p>
              <div className="mt-4 mb-4 text-xl font-bold text-blue-600">
                ₺{device.price.toLocaleString()}
              </div>

              {/* Quantity Selector */}
              {isSelected && (
                <div className="mt-4">
                  <label className="block text-sm text-gray-700 mb-1">
                    Adet (Her oda için 1 adet)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={selectedDevice.quantity}
                    onChange={(e) =>
                      onSelect(device.id, parseInt(e.target.value))
                    }
                    className="w-full p-2 border rounded-md"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Not: Ses analizi yapılacak her oda için bir cihaz satın alın.
                  </p>
                </div>
              )}

              {/* Buton */}
              <button
                className={`w-full py-2 rounded-md font-semibold transition duration-300 ${
                  isSelected
                    ? 'bg-[#101828] text-white scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {isSelected ? 'Seçildi' : 'Seç'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeviceSelector;
