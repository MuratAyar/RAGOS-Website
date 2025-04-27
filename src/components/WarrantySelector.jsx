// components/WarrantySelector.jsx
import React from 'react';

const services = [
  { id: 'warranty', name: '1 Yıl Ek Garanti', price: 499 },
  { id: 'priority', name: 'Teknik Servis ve Cihaz Yenileme', price: 749 },
  { id: 'installation', name: 'Hızlı Kurulum', price: 399 },
];

const WarrantySelector = ({ selectedServices, onChange }) => {
  const handleToggle = (serviceId) => {
    const isSelected = selectedServices.includes(serviceId);
    const updated = isSelected
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    onChange(updated);
  };

  return (
    <div className="pt-10 space-y-6 mt-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        3. Servis ve Garanti Paketleri
      </h2>
      <div className="flex justify-center gap-6 overflow-x-auto overflow-y-hidden pb-4">
        {services.map(service => {
          const isSelected = selectedServices.includes(service.id);

          // Ortak sınıflar
          const classes = [
            'relative', 'group',
            'mt-10', 'flex-shrink-0', 'w-80',
            'rounded-lg', 'p-6',
            'cursor-pointer', 'transition-all', 'duration-300',
            'transform', 'origin-center', 'bg-white'
          ];

          // Seçili kart efektleri
          const selectedClasses = [
            'border-4', 'border-[#101828]',
            'ring-2', 'ring-[#101828]', 'ring-offset-2', 'ring-offset-white',
            'shadow-2xl', 'scale-105'
          ];

          // Seçili olmayan kart efektleri
          const unselectedClasses = [
            'border', 'border-gray-200',
            'hover:shadow-xl', 'hover:scale-105'
          ];

          classes.push(...(isSelected ? selectedClasses : unselectedClasses));

          return (
            <div
              key={service.id}
              className={classes.join(' ')}
              onClick={() => handleToggle(service.id)}
            >
              {/* Başlık */}
              <h3 className={`mt-4 text-xl font-bold ${
                isSelected ? 'text-[#101828]' : 'text-gray-900'
              }`}>
                {service.name}
              </h3>

              {/* Fiyat */}
              <div className="mt-2 mb-4 text-xl font-bold text-blue-600">
                ₺{service.price.toLocaleString()}
              </div>

              {/* Buton */}
              <button
                className={`w-full py-2 rounded-md font-semibold transition duration-300 ${
                  isSelected
                    ? 'bg-[#101828] text-white scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {isSelected ? 'Eklendi' : 'Ekle'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarrantySelector;
