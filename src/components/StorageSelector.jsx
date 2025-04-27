// components/StorageSelector.jsx
import React from 'react';

const storageOptions = [
  { id: '30-days', name: '30 Günlük Saklama (20GB)', price: 0 },
  { id: '6-months', name: '6 Ay Saklama (100GB)', price: 199 },
  { id: '1-year', name: '1 Yıl Saklama (250GB)', price: 349 },
  { id: 'enterprise', name: 'Yıllık Kurumsal Yedekleme', price: 2999 },
];

const StorageSelector = ({ selectedStorageId, onSelect }) => {
  const hasSelection = Boolean(selectedStorageId);

  return (
    <div className="space-y-6 mt-12 pt-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        4. Depolama Seçenekleri
      </h2>
      <div className="flex justify-center gap-6 overflow-x-auto overflow-y-hidden pb-4">
        {storageOptions.map(option => {
          const isSelected = option.id === selectedStorageId;

          // Ortak sınıflar
          const classes = [
            'relative', 'group',
            'mt-10', 'flex-shrink-0', 'w-80',
            'rounded-lg', 'p-6',
            'cursor-pointer', 'transition-all', 'duration-300',
            'transform', 'origin-center', 'bg-white'
          ];

          if (!hasSelection) {
            // Hiç seçim yokken
            classes.push(
              'border', 'border-gray-200',
              'hover:shadow-xl', 'hover:scale-105'
            );
          } else if (isSelected) {
            // Seçili kart
            classes.push(
              'border-4', 'border-[#101828]',
              'ring-2', 'ring-[#101828]', 'ring-offset-2', 'ring-offset-white',
              'shadow-2xl', 'scale-105'
            );
          } else {
            // Seçim var ama bu kart seçili değil
            classes.push(
              'border', 'border-gray-300',
              'opacity-60',
              'hover:opacity-100', 'hover:bg-white',
              'hover:shadow-xl', 'hover:scale-105'
            );
          }

          return (
            <div
              key={option.id}
              className={classes.join(' ')}
              onClick={() => onSelect(option.id)}
            >
              {/* Başlık */}
              <h3 className={`mt-4 text-xl font-bold ${
                isSelected ? 'text-[#101828]' : 'text-gray-900'
              }`}>
                {option.name}
              </h3>

              {/* Fiyat */}
              <div className="mt-2 mb-4 text-xl font-bold text-blue-600">
                {option.price === 0 ? 'Ücretsiz' : `₺${option.price.toLocaleString()} /ay`}
              </div>

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

export default StorageSelector;
