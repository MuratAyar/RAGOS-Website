import React from "react";
import { ShoppingBag, Camera, BarChart2 } from "lucide-react";

const SubscriptionAboutSection = () => {
  return (
    <div className="mx-auto px-8 py-12 max-w-6xl">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 items-center text-center mb-10">
        Abonelik Planlarımız Nasıl Çalışır?
      </h1>
      <div className="flex flex-nowrap flex-row items-center justify-center gap-12">
        {/* Sol taraf: Görsel veya Simgeler */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Güven ve Şeffaflık</h4>
              <p className="text-sm text-gray-600">
                Ailelerin evde bakım sürecinde tam güven ve iç huzuru sağlamak için gelişmiş sistemler sunuyoruz.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Mahremiyet Odaklı</h4>
              <p className="text-sm text-gray-600">
                Kamerasız çözümlerle, özel hayatınızı korurken bakım sürecini izleme imkanı sağlıyoruz.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <BarChart2 className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Veri Tabanlı Analiz</h4>
              <p className="text-sm text-gray-600">
                AI destekli analizlerle, bakıcı davranışlarını detaylı ve doğru bir şekilde değerlendiriyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Sağ taraf: Metin */}
        <div className="max-w-md">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            RAGOS Abonelik Planları Hakkında
          </h2>
          <p className="mb-6 text-base text-gray-600">
            Abonelik planlarımız, evde bakım sürecini daha güvenli, şeffaf ve rahat hale getirmek için tasarlandı.
          </p>
          <p className="text-base text-gray-600">
            Mahremiyet dostu yapısıyla, yalnızca gerekli olan bilgileri sunarak ailelerin iç huzurunu artırmayı hedefliyoruz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAboutSection;
