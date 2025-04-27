import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          {/*} <span className="text-blue-600 font-semibold text-lg">MÜŞTERİ YORUMLARI</span> */}
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Kullanıcılarımız Ne Diyor?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Gerçek kullanıcılarımızın deneyimlerini keşfedin.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Ayşe Yılmaz</h6>
                  <p className="text-sm text-gray-500">Çalışan Anne</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "Bakıcımızın çocuğumla nasıl iletişim kurduğunu görmek harika. Sistem sayesinde işteyken bile içim rahat."
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Mehmet Kaya</h6>
                  <p className="text-sm text-gray-500">Baba</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "Yaşlı babamın bakımı için mükemmel bir çözüm. Anlık bildirimler sayesinde her şeyden haberdar oluyorum."
            </p>
          </div>

          {/* Review Card 3 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/28.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Zeynep Demir</h6>
                  <p className="text-sm text-gray-500">Doktor</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "Uzun hastane vardiyalarında çocuğumun güvende olduğunu bilmek paha biçilemez. Sistem gerçekten güven verici."
            </p>
          </div>

          {/* Review Card 4 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Emre Şahin</h6>
                  <p className="text-sm text-gray-500">İş Adamı</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "Sistem sayesinde bakıcımızın performansını objektif olarak değerlendirebiliyoruz. Kurulumu da çok kolaydı."
            </p>
          </div>

          {/* Review Card 5 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Selin Arslan</h6>
                  <p className="text-sm text-gray-500">Öğretmen</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "Çocuğum ve bakıcısı arasındaki iletişimi görmek bana çok iyi geldi. Artık çok daha huzurluyum."
            </p>
          </div>

          {/* Review Card 6 */}
          <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="user avatar"
                width="400"
                height="400"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">Can Aydın</h6>
                  <p className="text-sm text-gray-500">Mühendis</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-600">
              "Alzheimer hastası annem için aldık. Anlık bildirimler ve aktivite raporları bakım kalitesini artırdı."
            </p>
          </div>
        </div>

        {/* Alt kısımda boşluk için div */}
        <div className="mt-16"></div>
      </div>
    </section>
  );
};

export default SocialProofSection;