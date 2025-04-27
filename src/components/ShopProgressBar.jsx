// components/ShopProgressBar.jsx
import React from 'react';

const steps = [
  'Cihaz Seçimi',
  'Abonelik Planı',
  'Servis & Garanti',
  'Depolama',
  'Özet'
];

const ShopProgressBar = ({
  selectedDeviceId,
  selectedSubscriptionId,
  selectedServices,
  selectedStorageId
}) => {
  // Hangi adımdayız?
  let current = 1;
  if (selectedDeviceId) current = 2;
  if (selectedSubscriptionId) current = 3;
  if (selectedStorageId) current = 4;
  // Özet adımına summary görünür olduğunda geç
  if (selectedDeviceId && selectedSubscriptionId && selectedStorageId) current = 5;

  return (
    <div className="w-full px-6 py-4 bg-white shadow-sm rounded-lg mb-8">
      <div className="flex items-center">
        {steps.map((label, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < current;
          const isActive = stepNum === current;

          return (
            <React.Fragment key={label}>
              {/* Daire + Numara */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                    ${
                      isCompleted
                        ? 'bg-[#101828] text-white'
                        : isActive
                        ? 'border-2 border-[#101828] text-[#101828]'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                >
                  {stepNum}
                </div>
                <span
                  className={`mt-1 text-xs font-medium ${
                    isActive ? 'text-[#101828]' : 'text-gray-600'
                  }`}
                >
                  {label}
                </span>
              </div>

              {/* Adımlar arası çizgi */}
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded ${
                    isCompleted ? 'bg-[#101828]' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ShopProgressBar;
