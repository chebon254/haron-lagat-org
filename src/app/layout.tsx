import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Montserrat } from 'next/font/google';

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
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
