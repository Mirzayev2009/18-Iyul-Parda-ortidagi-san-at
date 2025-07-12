import React from 'react';

const InfoPage = () => {
  const telegramLink = "https://t.me/umida_pardalarN1";

  const handleClick = () => {
    window.location.href = telegramLink;
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8 font-sans text-gray-800 max-w-xl mx-auto">
      {/* Sana va vaqt */}
      <div className="border border-red-500 rounded-lg text-red-600 font-semibold text-center text-base py-2 mb-5 shadow-sm">
        18-Iyul | Soat 20:00 da
      </div>



      {/* Asosiy sarlavha */}
      <h1 className="text-xl font-semibold leading-snug text-center mb-6 shadow-lg rounded-2xl">
        Pardani <span className='font-bold text-red-600'>QIMMATGA</span> sotishni,<span className='font-bold text-red-600'> PARDA BIZNESINI</span> 0 dan boshlashni va <span className='font-bold text-red-600'>“ITALYANKA”</span> modelini to‘liq o‘rganishni xohlaysizmi?

      <h1>Unda BEPUL master-klassimiz aynan siz uchun! 👇</h1>
      </h1>

      {/* Kurs narxi qismi */}
   

      {/* Rasm */}
      <div className="flex w-full justify-center  ">
        <img
          src="/IMG_5339 (1) (2).webp"
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
  
      <div className="w-full  p-6 rounded-2xl shadow-lg border-red-600 bg-white flex justify-center items-center mt-5 mb-6">
        <h2 className="text-2xl font-semibold text-center ">
          <span className='text-red-600 font-bold'>6 000 000</span> so‘mlik kursni <span className="text-red-600 font-bold">mutlaqo bepul</span> olish imkoniyatini boy bermang!
        </h2>
      </div>
      {/* Masterklass haqida */}
      <div className="bg-gray-50 rounded-2xl p-5 shadow-lg space-y-6 ">
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
            “Italiyanka” modelini doskada chizishdan boshlab, tikish, taxlash va osishgacha to‘liq amaliy o‘rganasiz.
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
