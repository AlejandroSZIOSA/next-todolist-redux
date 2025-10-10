import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col justify-between items-center min-h-screen">
        <Main className="flex flex-col mx-auto" />
        <footer className="relative mt-auto w-full h-16 bg-slate-400 justify-items-center content-center md:fixed md:bottom-0 md:mt-32">
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
