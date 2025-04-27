import React from 'react';

const ServicePackagesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-y-3 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mx-auto">
                Garanti ve Servis Paketleri
            </h2>
            <p className="text-lg text-gray-600 mx-auto mb-10">
                RAGOS cihazlarınız için ek güvenlik ve konfor sağlayan servis paketlerimizle tanışın.
            </p>
        </div>

        {/* Pricing Cards - Flex row with min-width */}
        <div className="flex flex-row justify-between gap-6 mb-10">
          {/* 1. Paket */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 flex-1 min-w-[280px]">
            <div className="flex flex-col gap-y-4 h-full">
              <h3 className="text-xl font-bold text-[#101828]">1 Yıl Ek Garanti</h3>
              <p className="text-2xl font-semibold text-[#101828]">499 ₺</p>
              <p className="text-gray-600">
                Cihazınıza ek 1 yıl garanti süresi ekleyin, olası arızalarda ücretsiz tamir hizmetinden yararlanın.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                  Ücretsiz Kargo
                </span>
                <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                  Hızlı Onarım
                </span>
              </div>
              <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                Hemen Satın Al
              </button>
            </div>
          </div>

          {/* 2. Paket */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 flex-1 min-w-[280px]">
            <div className="flex flex-col gap-y-4 h-full">
              <h3 className="text-xl font-bold text-[#101828]">Teknik Servis Önceliği</h3>
              <p className="text-2xl font-semibold text-[#101828]">749 ₺/yıl</p>
              <p className="text-gray-600">
                Acil servis önceliği ve cihaz yenileme hizmeti ile kesintisiz takip deneyimi yaşayın.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                  24/7 Destek
                </span>
                <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                  Öncelikli Hizmet
                </span>
              </div>
              <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                Hemen Satın Al
              </button>
            </div>
          </div>

          {/* 3. Paket */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 flex-1 min-w-[280px]">
            <div className="flex flex-col gap-y-4 h-full">
              <h3 className="text-xl font-bold text-[#101828]">Hızlı Kurulum</h3>
              <p className="text-2xl font-semibold text-[#101828]">399 ₺</p>
              <p className="text-gray-600">
                Uzman ekibimiz cihazınızı evinizde kurup test ederek sorunsuz kullanım sağlar.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                  Uzman Destek
                </span>
                <span className="bg-[#F0F5FF] text-[#101828] px-3 py-1 text-sm rounded-full">
                  Yerinde Kurulum
                </span>
              </div>
              <button className="mt-6 w-full bg-[#101828] text-white py-3 rounded-lg hover:bg-[#101828]/90 transition">
                Randevu Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;