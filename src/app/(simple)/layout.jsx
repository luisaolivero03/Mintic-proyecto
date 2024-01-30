import { Inter } from "next/font/google";
import Head from "next/head";

export const metadata = {
  title: "holap sami",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>b{children}</body>
    </html>
  );
}
