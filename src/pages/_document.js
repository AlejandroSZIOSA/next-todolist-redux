import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main className="flex flex-col mx-auto" />
        <footer className="w-full h-16 mt-24 bg-slate-400 border-t-2 border-solid border-black justify-items-center content-center md:mt-20">
          <div className="flex items-center">
            <span className="pr-4 pl-8 font-sans">Chas</span>
            <Image
              src="/chasAcademy_logo.svg"
              width={58}
              height={58}
              alt="ChasAcademy Logo"
              priority={true}
            ></Image>
            <span className="pl-4 font-sans">Academy</span>
          </div>
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
