import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col justify-between items-center min-h-screen">
        <Main className="flex flex-col mx-auto" />
        <NextScript />
      </body>
    </Html>
  );
}
