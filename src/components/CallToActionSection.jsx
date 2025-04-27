import React from "react";

const CallToActionSection = () => {
  return (
    <section
      id="call-to-action"
      className="bg-fixed bg-center bg-cover bg-no-repeat py-20"
      style={{
        backgroundImage: `url('/images/CTA.jpeg')`, // kendi görsel yolunu buraya yaz
      }}
    >
      <div className="bg-black/50 py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left lg:w-3/4 mb-6 lg:mb-0">
            <h3 className="text-3xl font-bold text-white mb-4">Cihazlarımıza Göz Atın</h3>
            <p className="text-white text-lg max-w-3xl mx-auto lg:mx-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="text-center lg:w-1/4">
            <a
              href="#"
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition duration-300"
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
