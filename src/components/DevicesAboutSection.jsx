import React from 'react';

const DevicesAboutSection = () => {
  return (
    <div className="mx-auto px-8 py-12 max-w-6xl">
      <div className="flex flex-nowrap flex-row items-center justify-center gap-12">
        {/* Sol taraf: Çapraz Resimler */}
        <div className="flex flex-row gap-4"> {/* gap-2 ile resimler arası boşluğu azalttık */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/RAGOS_image.png"
              alt="Child"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
            <img
              src="/images/red_speaker.jpg"
              alt="Elder"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="mt-auto mb-auto"> {/* mt-8 ile dikey kaydırmayı azalttık */}
            <img
              src="/images/mobil.png"
              alt="Application"
              className="w-48 h-40 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Sağ taraf: Metin - Resimlere çok daha yakın */}
        <div className="max-w-md">
            <span className="block mb-3 text-lg font-semibold text-blue-600">
                RAGOS Bakıcı Güvenlik Cihazları İle
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Sevdiklerinizi Kamera Görüntüsü Olmadan Anlık Olarak Koruyup Kollayın 
            </h2>
            
            <p className="mb-3 text-base text-gray-600">
                RAGOS Bakıcı Güvenlik Cihazları evinizde bakıcı ile sevdikleriniz arasında geçen her diyaloğu <strong>Akıllı Ses Ayırt Etme </strong> teknolojisi ve gelişmiş yapay zekası sayesinde şifrelenmiş bir şekilde RAGOS Cloud ortamına aktarır. Kamera kullanmadan, mahremiyeti koruyarak ev güvenliğini ve huzuru sağlar.
            </p>

            <p className="mb-3 text-base text-gray-600">
                <strong>Bataryalı ve Mobil seçenekleriyle</strong> günün her anında sizlere eşlik ederek <strong>Türkiye ve Dünya'nın ilk</strong> bakıcı analiz yapay zeka yazılımı ile evde her şeyin yolunda gittiğinden emin olabilirsiniz.
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

        </div>
      </div>
    </div>
  );
};

export default DevicesAboutSection;