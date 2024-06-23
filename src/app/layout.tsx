import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

const montserrat = Montserrat({ 
  weight: ["400", "500", "600", "700"], // specify the weights you need
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Haron Lagat Organization",
  description: "Helping the unfortunate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js" integrity="sha512-7x3zila4t2qNycrtZ31HO0NnJr8kg2VI67YLoRSyi9hGhRN66FHYWr7Axa9Y1J9tGYHVBPqIjSE1ogHrJTz51g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></Script> 
        <Script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></Script>
      </body>
    </html>
  );
}
