// components/SubscriptionSelector.jsx
import React from 'react';

const allPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 899,
    description: 'Temel ses analizi ve günlük rapor.',
    compatibleDevices: ['ragos_lite', 'ragos_home', 'ragos_mobile'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 1199,
    description: 'AI destekli analiz ve gerçek zamanlı bildirimler.',
    compatibleDevices: ['ragos_home', 'ragos_mobile'],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 1499,
    description: 'Kişiye özel analiz ve duygu takibi.',
    compatibleDevices: ['ragos_home', 'ragos_mobile'],
  },
];

const SubscriptionSelector = ({
  deviceId,
  selectedSubscriptionId,
  onSelect
}) => {
  const compatiblePlans = allPlans.filter(plan =>
    plan.compatibleDevices.includes(deviceId)
  );
  const hasSelection = Boolean(selectedSubscriptionId);

  return (
    <div>
        <div className="space-y-6">
      <h2 className="pt-10 text-3xl font-bold text-gray-900 text-center mb-10">
        2. Abonelik Planı Seçimi
      </h2>
      <div className="flex justify-center gap-6 overflow-x-auto overflow-y-hidden pb-4">
        {compatiblePlans.map(plan => {
          const isSelected = plan.id === selectedSubscriptionId;

          // Ortak sınıflar
          const classes = [
            'relative', 'group',
            'mt-10', 'flex-shrink-0', 'w-80',
            'rounded-lg', 'p-6',
            'cursor-pointer', 'transition-all', 'duration-300',
            'transform', 'origin-center', 'bg-white'
          ];

          if (!hasSelection) {
            // Henüz seçim yok
            classes.push(
              'border', 'border-gray-200',
              'hover:shadow-xl', 'hover:scale-105'
            );
          } else if (isSelected) {
            // Seçilen kart
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
              key={plan.id}
              className={classes.join(' ')}
              onClick={() => onSelect(plan.id)}
            >
              {/* Plan Adı */}
              <h3 className={`text-xl font-bold ${
                isSelected ? 'text-[#101828]' : 'text-gray-900'
              }`}>
                {plan.name}
              </h3>

              {/* Açıklama */}
              <p className="mt-2 text-sm text-gray-600">
                {plan.description}
              </p>

              {/* Fiyat */}
              <div className="mt-4 mb-4 text-xl font-bold text-blue-600">
                ₺{plan.price.toLocaleString()} /ay
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
    </div>
  );
};

export default SubscriptionSelector;
