import React from 'react';

const DataStorageSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 mb-10">
        {/* Header - Tam ortalanmış */}
        <div className="flex flex-col items-center gap-y-3 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10">
            Veri & Rapor Arşivleme
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-10">
            Ses kayıtlarınızı ve analiz raporlarınızı güvenle saklayın, istediğiniz zaman erişin.
          </p>
        </div>

        {/* Storage Plans - Ortalanmış ve scrollable */}
        <div className="relative">
          <div className="flex justify-center overflow-x-auto pb-4 px-4">
            <div className="flex flex-nowrap gap-6">
              {/* Ücretsiz Plan */}
              <div className="w-72 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col gap-y-4 h-full">
                  <h3 className="text-xl font-bold text-[#101828] text-center">Temel Saklama</h3>
                  <p className="text-2xl font-semibold text-[#101828] text-center">Ücretsiz</p>
                  <p className="text-gray-600 text-center">
                    30 gün boyunca 20GB depolama alanı ile temel veri saklama hizmeti.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      20GB Depolama
                    </span>
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      30 Gün Saklama
                    </span>
                  </div>
                  <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                    Ücretsiz Kullan
                  </button>
                </div>
              </div>

              {/* 6 Aylık Plan */}
              <div className="w-72 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col gap-y-4 h-full">
                  <h3 className="text-xl font-bold text-[#101828] text-center">6 Aylık Arşiv</h3>
                  <p className="text-2xl font-semibold text-[#101828] text-center">199 ₺</p>
                  <p className="text-gray-600 text-center">
                    6 ay boyunca 100GB depolama alanı ile genişletilmiş veri arşivleme.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      100GB Depolama
                    </span>
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      6 Ay Saklama
                    </span>
                  </div>
                  <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                    Satın Al
                  </button>
                </div>
              </div>

              {/* 1 Yıllık Plan */}
              <div className="w-72 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col gap-y-4 h-full">
                  <h3 className="text-xl font-bold text-[#101828] text-center">1 Yıllık Arşiv</h3>
                  <p className="text-2xl font-semibold text-[#101828] text-center">349 ₺</p>
                  <p className="text-gray-600 text-center">
                    1 yıl boyunca 250GB depolama alanı ile kapsamlı veri arşivleme çözümü.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      250GB Depolama
                    </span>
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      1 Yıl Saklama
                    </span>
                  </div>
                  <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                    Satın Al
                  </button>
                </div>
              </div>

              {/* Kurumsal Plan */}
              <div className="w-72 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col gap-y-4 h-full">
                  <h3 className="text-xl font-bold text-[#101828] text-center">Kurumsal Yedekleme</h3>
                  <p className="text-2xl font-semibold text-[#101828] text-center">2,999 ₺</p>
                  <p className="text-gray-600 text-center">
                    Kurum içi yedekleme çözümü ile verilerinizin tam kontrolü sizde.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      Sınırsız Depolama
                    </span>
                    <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                      Yerel Sunucu
                    </span>
                  </div>
                  <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                    Teklif Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataStorageSection;