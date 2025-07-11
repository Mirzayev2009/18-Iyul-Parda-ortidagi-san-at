import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loginpage');
  };

  return (
    <div className="bg-white min-h-screen px-4 py-8 font-sans text-gray-800 max-w-xl mx-auto">
      {/* Sana va vaqt */}
      <div className="border border-red-500 rounded-lg text-red-600 font-semibold text-center text-base py-2 mb-5 shadow-sm">
        18-Iyul | Soat 20:00 da
      </div>

      {/* Kichik sarlavha */}
      <p className="text-sm text-gray-600 uppercase tracking-wide text-center mb-2">
        Tikuvchilar uchun Umida To‘lqinjonova bilan 1 kunlik onlayn master-klass
      </p>

      {/* Asosiy sarlavha */}
      <h1 className="text-xl font-bold leading-snug text-center mb-6">
        13 yillik tajriba, 400+ shogird, va endi navbat sizga — “Italiyanka” modelini boshidan oxirigacha o‘rganing, san’atingizni qadrlang va 6 000 000 so‘mlik kursni tekinga olish imkoniyatini qo‘ldan boy bermang!
      </h1>

      {/* Rasm */}
      <div className="flex justify-center mb-6">
        <img
          src="/hahaha.jpg"
          alt="Umida To‘lqinjonova"
          className="w-60 h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Birinchi tugma */}
      <button onClick={handleClick} className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-3 rounded-full w-full mb-8 shadow-md">
        BEPUL JOY BAND QILISH
      </button>

      {/* Masterklass haqida */}
      <div className="bg-gray-50 rounded-lg p-5 shadow-sm space-y-6">
        <h2 className="text-lg font-semibold text-center mb-2">Ushbu Master-klassda siz:</h2>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">💰</div>
          <p className="text-sm leading-relaxed">
            Mehnatingizga narx qo‘yishni, san’atingizni qadrlashni va mijoz bilan to‘g‘ri ishlash sirlarini bilib olasiz!
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">🪟</div>
          <p className="text-sm leading-relaxed">
            “Italiyanka” modelini -  doskada chizishdan tortib,  tikish, taxlash va osishgacha – har bir bosqichini o'rganib olasiz!
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-red-500 text-2xl">🎤</div>
          <p className="text-sm leading-relaxed">
            Ustoz Umida To‘lqinjonova o‘z sirlarini ochib, sizni to‘g'ri yo‘ldan boshlab, masterlik safariga olib chiqadi.
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
