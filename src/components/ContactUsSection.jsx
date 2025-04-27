import React, { useState } from 'react';

const ContactUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="bg-gray-900 text-white body-font relative">
      <div className="container px-5 py-12 mx-auto flex md:flex-row w-full gap-8">
        {/* Parça 1: Google Maps ve Overlay */}
        <div className="w-full md:w-3/4 bg-gray-300 rounded-lg overflow-hidden p-5 md:p-10 flex items-end justify-start relative h-96 md:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.29468073371487!2d29.177498716653066!3d40.899186247306965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac3868c5f56ff%3A0x7de81282c4aa8bff!2sTedi!5e0!3m2!1str!2str!4v1745164945304!5m2!1str!2str" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            className="absolute inset-0 w-full h-full pointer-events-auto" // pointer-events-auto allows interaction with iframe
            title="Google Map"
          ></iframe>


          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>

          {/* Address and Info Block */}
          <div className="relative flex flex-wrap py-6 rounded shadow-md z-10 text-white bg-gray-900/90 max-w-md">
            <div className="lg:w-1/2 px-6">
              <p className="mt-1 text-gray-100">Petrol İş Mah., Mesire Sk., No:8, D:3</p>
              <p className="mt-1 text-gray-100">Kartal/İstanbul</p>

            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <a className="text-blue-500 leading-relaxed">ayar.murat55@gmail.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed text-gray-100">+905317158068</p>
            </div>
          </div>
        </div>

        {/* Parça 2: Contact Form */}
        <div className="w-full md:w-1/4 bg-white flex flex-col p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Bizlere Ulaşın!</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Hizmetlerimiz hakkında bilgi almak için bizimle ücretsiz bir şekilde iletişime geçin.</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">İsim Soyisim</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Telefon Numarası (5xx)-xxx-xx-xx </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mesaj</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button 
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Gönder
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">İlgili ekibimiz sizlere en kısa zaman içerisinde uaşacaktır.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
