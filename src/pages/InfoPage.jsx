import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loginpage')
  }



  return (
    <div className="bg-white min-h-screen px-4 py-8 font-sans text-gray-800 max-w-xl mx-auto">
      {/* Sana va vaqt */}
      <div className="border border-red-500 rounded-lg text-red-600 font-semibold text-center text-base py-2 mb-5 shadow-sm">
        18-Iyul | Soat 21:00 da
      </div>

      {/* Kichik sarlavha */}
      <p className="text-sm text-gray-600 uppercase tracking-wide text-center mb-2">
        Tikuvchilar uchun Shaxlo Mamedovadan 1 kunlik onlayn master-klass
      </p>

      {/* Asosiy savol */}
      <h1 className="text-xl font-bold leading-snug text-center mb-6">
        Qanday qilib, tikish narxini oshirmasdan, pardoz tikuvchilik orqali 5–10 mln so‘m daromadga chiqish mumkin?
      </h1>

      {/* Rasm */}
      <div className="flex justify-center mb-6">
        <img
          src="/hahaha.jpg"
          alt="Shaxlo Mamedova"
          className="w-60 h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Birinchi tugma */}
      <button className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-3 rounded-full w-full mb-8 shadow-md">
        BEPUL JOY BAND QILISH
      </button>

      {/* Masterclass haqida ma'lumot */}
      <div className="bg-gray-50 rounded-lg p-5 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-center mb-2">Master Klass'da siz:</h2>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">💰</div>
          <p className="text-sm leading-relaxed">
            Qanday qilib, tikish narxlarini oshirmasdan turib, daromadingizni bir necha baravar oshirishni o‘rganasiz
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">🪟</div>
          <p className="text-sm leading-relaxed">
            Italiyancha pardani qanday tikish bo‘yicha to‘liq amaliy ko‘rsatmani olasiz
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">🎤</div>
          <p className="text-sm leading-relaxed">
            Umida To'lqinjonova o‘z kursining imkoniyatlarini ko‘rsatadi va sizga to‘liq yo‘l-yo‘riq beradi
          </p>
        </div>
      </div>

      {/* Ikkinchi tugma */}
      <button onClick={handleClick} className="mt-8 bg-red-600 hover:bg-red-700 transition text-white font-bold py-3 rounded-full w-full shadow-lg">
        BEPUL RO‘YXATDAN O‘TISH
      </button>
    </div>
  );
};

export default InfoPage;
