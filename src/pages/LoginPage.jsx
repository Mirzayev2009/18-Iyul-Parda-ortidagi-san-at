import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabaseClient';

const LoginPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const telegramLink = "https://t.me/umida_pardalari_bot";

  useEffect(() => {
    if (submitted && secondsLeft > 0) {
      const timer = setTimeout(() => setSecondsLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (submitted && secondsLeft === 0) {
      window.location.href = telegramLink;
    }
  }, [submitted, secondsLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();

    const data = { name, phone };
    setFormData(data);

    const { error } = await supabase
      .from('submissions_parda') // ✅ updated table name here
      .insert([data]);

    if (error) {
      console.error("❌ Supabase error:", error.message);
    } else {
      console.log("✅ Data saved to Supabase:", data);
      setSubmitted(true);
    }
  };

  const handleManualRedirect = () => {
    window.location.href = telegramLink;
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <Card className="w-full max-w-lg shadow-xl border border-gray-200 z-10">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold text-black">
              Master Class uchun oʻz joyingizni band qiling
            </CardTitle>
            <p className="text-sm text-gray-500">
              Shunchaki kontaktlaringizni qoldirib, Telegram botimga oʻting
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Ismingizni yozing</Label>
                <Input name="name" id="name" placeholder="Ismingiz" className="h-12 text-base" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">Raqamingizni yozing</Label>
                <Input name="phone" id="phone" placeholder="+998 99 999 99 99" className="h-12 text-base" required />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-semibold bg-black hover:bg-gray-800">
                Yuborish
              </Button>

              <p className="text-center text-sm text-gray-400">Bu mutlaqo BEPUL</p>
            </form>
          </CardContent>
        </Card>
      </div>

      {submitted && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <div className="h-1/2 bg-black/30" />

          <div className="h-1/2 bg-black text-white px-6 py-8 flex flex-col justify-between rounded-t-2xl">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Sizni Telegram botga yuboramiz</h2>
              <p className="text-lg">
                {5 - secondsLeft + 1} soniya... avtomatik oʻtkaziladi
              </p>
              <p className="text-sm text-gray-300">
                Ismingiz: <b>{formData.name}</b><br />
                Raqamingiz: <b>{formData.phone}</b>
              </p>
            </div>

            <Button
              onClick={handleManualRedirect}
              className="w-full mt-6 bg-white text-black font-bold text-lg h-12 rounded-xl hover:bg-gray-200"
            >
              Davom etish
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
