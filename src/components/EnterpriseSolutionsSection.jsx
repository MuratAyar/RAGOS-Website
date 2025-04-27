import React from 'react';

const EnterpriseSolutionsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-y-3 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mx-auto">
                Kurumsal Çözümler
            </h2>
            <p className="text-lg text-gray-600 mx-auto mb-10">
                Huzurevleri, kreşler ve bakıcı ajansları için profesyonel RAGOS çözümleri
            </p>
        </div>

        {/* Pricing Cards - Flex row with min-width */}
        <div className="flex justify-center overflow-x-auto pb-4 px-4 flex-nowrap gap-6 mb-10">
          {/* Mini Paket */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 flex-1 min-w-[280px] max-w-md">
            <div className="flex flex-col gap-y-4 h-full">
              <h3 className="text-xl font-bold text-[#101828]">Mini Paket</h3>
              <p className="text-gray-600">
                10 cihaz için kurumsal çözüm paketi
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10 cihaz desteği</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Aylık 10.000+ analiz</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Merkezi yönetim paneli</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personel performans raporları</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">SLA garantisi</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">7/24 canlı destek</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                Teklif Alın
              </button>
            </div>
          </div>

          {/* Standart Paket */}
          <div className="bg-white rounded-xl border-2 border-[#101828] p-6 hover:shadow-lg transition-all duration-300 flex-1 min-w-[280px] max-w-md relative">
            <div className="absolute top-4 right-6 bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
              POPÜLER
            </div>
            <div className="flex flex-col gap-y-4 h-full">
              <h3 className="text-xl font-bold text-[#101828]">Standart Paket</h3>
              <p className="text-gray-600">
                25 cihaz için ideal kurumsal çözüm
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">25 cihaz desteği</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Aylık 25.000+ analiz</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Gelişmiş yönetim paneli</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Detaylı personel raporları</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium SLA garantisi</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Özel müşteri yöneticisi</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                Teklif Alın
              </button>
            </div>
          </div>

          {/* Kurumsal Paket */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 flex-1 min-w-[280px] max-w-md">
            <div className="flex flex-col gap-y-4 h-full">
              <h3 className="text-xl font-bold text-[#101828]">Kurumsal Paket</h3>
              <p className="text-gray-600">
                50+ cihaz için özel çözümler
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">50+ cihaz desteği</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sınırsız analiz</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Kurumsal dashboard</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">API entegrasyonu</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">VIP SLA garantisi</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Özel eğitim ve destek</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                Teklif Alın
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutionsSection;