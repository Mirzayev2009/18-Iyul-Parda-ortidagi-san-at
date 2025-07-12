import React from 'react';

const InfoPage = () => {
  const telegramLink = "https://t.me/umida_pardalar1";

  const handleClick = () => {
    window.location.href = telegramLink;
  };

  return (
    <div className="bg-white min-h-screen px-4 py-8 font-sans text-gray-800 max-w-xl mx-auto">
      {/* Sana va vaqt */}
      <div className="border border-red-500 rounded-lg text-red-600 font-semibold text-center text-base py-2 mb-5 shadow-sm">
        18-Iyul | Soat 20:00 da
      </div>

      {/* Kichik sarlavha */}
      <p className="text-sm text-gray-600 uppercase tracking-wide text-center mb-2">
        Tikuvchilar uchun Umida To‘lqinjonova bilan 1 kunlik bepul onlayn master-klass
      </p>

      {/* Asosiy sarlavha */}
      <h1 className="text-xl font-semibold leading-snug text-center mb-6 shadow-lg rounded-2xl">
        Qanday qilib parda sohasida o'z Mehnatingizni <span className='font-bold text-red-600'>"QIMMATGA SOTISH"</span>, <span className='font-bold text-red-600'>"PARDA BIZNESINI 0 dan"</span> qanday boshlash va shuningdek  <span className='font-bold text-red-600'>“ITALYANKA”</span> modelini boshidan oxirigacha o‘rganishni xohlaysizmi!?
      </h1>

      {/* Kurs narxi qismi */}
      <div className="w-full  p-6 rounded-2xl shadow-lg border-red-600 bg-white flex justify-center items-center mt-5 mb-6">
        <h2 className="text-2xl font-semibold text-center ">
          <span className='text-red-600 font-bold'>6 000 000</span> so‘mlik kursni <span className="text-red-600 font-bold">mutlaqo bepul</span> olish imkoniyatini boy bermang!
        </h2>
      </div>

      {/* Rasm */}
      <div className="flex w-full justify-center  ">
        <img
          src="/IMG_5339.PNG"
          alt="Umida To‘lqinjonova"
          className="w-60 h-auto rounded-xl "
        />
      </div>
          <div className='w-full flex justify-center items-center'>
              <button
        onClick={handleClick}
        className=" bg-red-600 pt-5 pb-5 hover:bg-red-700 transition text-white font-bold py-3 rounded-4xl shadow-lg w-3/4 "
      >
        <h1 className='font-bold text-4xl'>
          BEPUL QATNASHISH!
        </h1>
      </button>
          </div>

      {/* Masterklass haqida */}
      <div className="bg-gray-50 rounded-lg p-5 shadow-lg space-y-6 ">
        <h2 className="text-lg font-semibold text-center mb-2">Ushbu master-klassda siz:</h2>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">💰</div>
          <p className="text-sm leading-relaxed">
            Mehnatingizni qanday qadrlashni, narx belgilashni va mijoz bilan ishlash sirlarini bilib olasiz.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">🪟</div>
          <p className="text-sm leading-relaxed">
            “Italiyanka” modelini — doskada chizishdan boshlab, tikish, taxlash va osishgacha — to‘liq amaliy o‘rganasiz.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">🎤</div>
          <p className="text-sm leading-relaxed">
            Ustoz Umida To‘lqinjonova o‘z sirlarini ochib beradi va sizni o‘z yo‘li bilan ustozlik sari yetaklaydi.
          </p>
        </div>
      </div>

      {/* Tugma */}

    </div>
  );
};

export default InfoPage;
