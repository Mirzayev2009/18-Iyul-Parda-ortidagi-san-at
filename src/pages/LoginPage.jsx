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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const telegramLink = "https://t.me/umida_pardalari_bot";

  useEffect(() => {
    if (submitted && secondsLeft > 0) {
      const timer = setTimeout(() => setSecondsLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (submitted && secondsLeft === 0) {
      window.location.href = telegramLink;
    }
  }, [submitted, secondsLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    let rawPhone = e.target.phone.value.trim().replace(/\s+/g, "");

    if (!/^\d{9}$/.test(rawPhone)) {
      alert("Raqamni to‘g‘ri kiriting: 90 123 45 67");
      setIsSubmitting(false);
      return;
    }

    const fullPhone = '+998' + rawPhone;
    const data = { name, phone: fullPhone };

    // Check for duplicates
    const { data: existing, error: selectError } = await supabase
      .from('submissions_parda')
      .select("*")
      .eq("phone", fullPhone);

    if (selectError) {
      console.error("❌ Supabase select error:", selectError.message);
      alert("Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
      setIsSubmitting(false);
      return;
    }

    if (existing.length > 0) {
      alert("Bu raqam allaqachon ro‘yxatdan o‘tgan.");
      setIsSubmitting(false);
      return;
    }

    // Insert if unique
    const { error: insertError } = await supabase
      .from('submissions_parda')
      .insert([data]);

    if (insertError) {
      console.error("❌ Supabase insert error:", insertError.message);
      alert("Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
      setIsSubmitting(false);
    } else {
      setFormData(data);
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
              Kontaktlaringizni yozing, keyin Telegram botga oʻtasiz
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Ismingiz</Label>
                <Input name="name" id="name" placeholder="Ismingiz" className="h-12 text-base" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">Telefon raqam</Label>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-md text-sm font-medium text-gray-600">
                    +998
                  </span>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="90 123 45 67"
                    className="h-12 text-base rounded-l-none"
                    pattern="^\s*\d{2}[\s]?\d{3}[\s]?\d{2}[\s]?\d{2}\s*$"
                    title="Raqamni to‘g‘ri formatda kiriting: 90 123 45 67"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-black hover:bg-gray-800 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
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
