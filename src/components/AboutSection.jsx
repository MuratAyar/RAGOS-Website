import React from 'react';

const AboutSection = () => {
  return (
    <div className="mx-auto px-8 py-12 max-w-6xl">
      <div className="flex flex-nowrap flex-row items-center justify-center gap-12">
        {/* Sol taraf: Çapraz Resimler */}
        <div className="flex flex-row gap-4"> {/* gap-2 ile resimler arası boşluğu azalttık */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/child.jpg"
              alt="Child"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
            <img
              src="/images/elder.jpg"
              alt="Elder"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="mt-auto mb-auto"> {/* mt-8 ile dikey kaydırmayı azalttık */}
            <img
              src="/images/application.jpg"
              alt="Application"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Sağ taraf: Metin - Resimlere çok daha yakın */}
        <div className="max-w-md">
            <span className="block mb-3 text-lg font-semibold text-blue-600">
                Neden RAGOS?
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Sevdiğiniz kişilerin bakımında içinizi rahat ettirecek teknoloji
            </h2>
            
            <p className="mb-3 text-base text-gray-600">
                RAGOS, çocuğunuzu veya yaşlı yakınlarınızı emanet ettiğiniz bakıcıların davranışlarını <strong>ses analiz teknolojisiyle</strong> takip eden Türkiye'nin ilk AI destekli bakım güvenlik sistemidir. Kamera kullanmadan, mahremiyeti koruyarak ev güvenliğini ve huzuru sağlar.
            </p>

            <p className="mb-3 text-base text-gray-600">
                <strong>Gerçek zamanlı bildirimler</strong> ve <strong>günlük davranış raporlarıyla</strong> artık evde her şeyin yolunda gittiğinden emin olabilirsiniz.
            </p>

            <div className="mb-6 space-y-2">
                <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Bakıcının sevdiklerinize nasıl davrandığını anlayın</span>
                </div>
                <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Kamera kullanmadan, mahremiyet dostu çözüm</span>
                </div>
                <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Yapay zeka ile duygu, niyet analizi ve anlık bildirimler.</span>
                </div>
                <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-600">Modern ve basit arayüze sahip mobil uygulama.</span>
                </div>
            </div>

            <a
                href="/devices"
                className="inline-flex items-center justify-center py-3 px-6 text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg"
            >
                Cihazları Keşfet
            </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;