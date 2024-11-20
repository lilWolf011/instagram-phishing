import Image from "next/image";import instagram from "@/../public/instagram.png";
import meta from "@/../public/meta.png";
import Link from 'next/link';


export default function Loading() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-svh sm:p-20">
      <main className="space-y-4 row-start-2 items-center sm:items-start w-full max-w-[350px]">
        <div className="flex flex-col items-center w-full">
          <Image
            src={instagram}
            width={80}
            height={80}
            alt="Instagram Icon"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs text-[#A8A8A8]">
        <Image src={meta} width={75} height={40} alt="Picture of the author" />
      </footer>
    </div>
  );
}
