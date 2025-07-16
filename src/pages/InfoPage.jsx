import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loginpage");
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen px-4 py-10 font-sans text-gray-800 max-w-2xl mx-auto space-y-8">
      
      {/* Date & Time */}
      <div className="border border-red-500 rounded-xl text-red-600 font-bold text-center text-lg py-2 shadow-md tracking-wide">
        📅 18-Iyul | 🕘 Soat 21:00 da
      </div>

      {/* Main Headline */}
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center space-y-4">
        <h1 className="text-2xl font-bold leading-snug">
          Pardani <span className="text-red-600">QIMMATGA</span> sotishni, <span className="text-red-600">PARDA BIZNESINI</span> 0 dan boshlashni va <span className="text-red-600">ITALYANKA</span> modelini o‘rganishni xohlaysizmi?
        </h1>
        <h2 className="text-xl font-medium">Unda BEPUL master-klassimiz aynan siz uchun! 👇</h2>
      </div>

{/* Unified Image + Button Block */}
<div className="rounded-2xl overflow-hidden flex flex-wrap justify-center w-fit mx-auto">
  <img
    src="/IMG_5339 (1) (2).webp"
    alt="Umida To‘lqinjonova"
    className="w-72 h-auto block" // `block` removes inline whitespace
  />
  <button
    onClick={handleClick}
    className="bg-red-600 w-2/3 block hover:bg-red-700 text-white text-2xl rounded-full font-extrabold py-4 px-10 transition-all"
  >
    🎁 BEPUL QATNASHISH!
  </button>
</div>


      {/* Offer Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-red-400 p-5 text-center space-y-4">
        <h2 className="text-xl font-semibold">
          <span className="text-red-600 font-bold">6 000 000</span> so‘mlik kursni <span className="text-red-600 font-bold">mutlaqo bepul</span> olish imkoniyatini boy bermang!
        </h2>
        <p className="text-base">
          Hali hech kimga berilmagan <span className="text-red-600 font-bold">maxfiy bonus</span> video darslikni ham qo‘lga kiriting!
        </p>
      </div>

      {/* Masterclass Info */}
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-red-400 space-y-4">
        <h2 className="text-lg font-bold text-center text-gray-800">Master-klassing eng muhim qismi!</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>📌 Parda sohasida hali hech kimda bo‘lmagan yangi kurs taqdimoti bo‘ladi!</li>
          <li>📌 Sizga aniq <span className="font-bold text-red-600">VADA</span> beriladi – bu taklif boshqalarda yo‘q!</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPage;

