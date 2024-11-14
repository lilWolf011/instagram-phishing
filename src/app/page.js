"use client";
import { useState } from 'react';
import Image from "next/image";

import facebook from "@/../public/facebook.svg";
import playstore from "@/../public/playstore.png";
import microsoft from "@/../public/microsoft.png";
import Link from 'next/link';
// dark:invert
export default function Home() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="space-y-4 row-start-2 items-center sm:items-start w-full max-w-[350px]">
        <div className="flex flex-col gap-8 border border-[#363636] p-10 w-full">
          <div className="flex justify-center w-full">
            <Image
              className="pt-4"
              src="/instagram-white.png"
              alt="Instagram logo"
              width={180}
              height={38}
              priority
            />
          </div>

          <div className="flex flex-col w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-2 w-full"
            >
              <div className="relative w-full border border-1 border-[#555555] rounded-lg">
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  aria-label="Telefon numarası, kullanıcı adı veya e-posta"
                  className="w-full h-11 rounded-lg text-xs bg-[#121212] p-3 py-1 focus:outline-none focus:border-none transition-colors peer"
                  autoComplete="off"
                  value={usernameValue}
                  onChange={handleUsernameChange}
                />
                <label
                  htmlFor="username"
                  className={`absolute w-full left-3 text-[#a8a8a8] cursor-text pointer-events-none peer-focus:text-[11px] peer-focus:-top-0.5 transition-all select-none ${
                    usernameValue.trim() !== "" ? "-top-0.5 text-[11px]" : "top-3 text-[12px]"
                  }`}
                >
                  Telefon numarası, kullanıcı adı veya e-posta
                </label>
              </div>

              <div className="relative w-full border border-1 border-[#555555] rounded-lg">
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  className="w-full h-11 rounded-lg text-xs bg-[#121212] p-3 py-1 focus:outline-none focus:border-none transition-colors peer"
                  autoComplete="off"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />
                <label
                  htmlFor="password"
                  className={`absolute w-full left-3 text-[#a8a8a8] cursor-text pointer-events-none peer-focus:text-[11px] peer-focus:-top-0.5 transition-all select-none ${
                    passwordValue.trim() !== "" ? "-top-0.5 text-[11px]" : "top-3 text-[12px]"
                  }`}
                >
                  Şifre
                </label>
              </div>

              <button
                className="h-[32px] flex items-center justify-center rounded-xl bg-[#0069AD] text-[#F5F5F5] font-medium text-base font-roboto w-full"
                type="submit"
              >
                Giriş yap
              </button>
            </form>

            <span className="flex flex-row items-center py-4">
              <hr className="flex-1 h-px border-0 bg-[#262626]" />
              <p className="text-xs px-2 font-robot text-[#A8A8A8]">YA DA</p>
              <hr className="flex-1 h-px border-0 bg-[#262626]" />
            </span>

            <div className="flex flex-col gap-2">
              <Link
                className="flex items-center justify-center w-full"
                href="/"
              >
                <Image
                  src={facebook}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <p className="font-[500] font-roboto text-[#3897F1]">
                  Facebook ile Giriş Yap
                </p>
              </Link>

              <Link href="/" className="text-sm text-center">
                Şifreni mi unuttun?
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#363636] p-6 w-full">
          <p className="text-sm text-center font-roboto">
            Hesabın yok mu?{" "}
            <Link
              href="/"
              className="text-sm font-roboto font-[500] text-[#3897F1]"
            >
              Kaydol
            </Link>
          </p>
        </div>

        <div className='space-y-2'>
          <p className='text-center'>Uygulamayı indir.</p>
          <span className='flex justify-center gap-2'>
            <Image
              src={playstore}
              width={134}
              height={40}
              alt="Picture of the author"
            />
            <Image
              src={microsoft}
              width={110}
              height={40}
              alt="Picture of the author"
            />
          </span>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs text-[#A8A8A8]">
        <a>Meta</a>
        <a>Hakkında</a>
        <a>İş Fırsatları</a>
        <a>Yardım</a>
        <a>API</a>
        <a>Gizlilik</a>
        <a>Koşullar</a>
        <a>Konumlar</a>
        <a>Instagram Lite</a>
        <a>Threads</a>
        <a>Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
        <a>Meta Verified</a>
      </footer>
    </div>
  );
}
