import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Especifique os pesos que deseja usar
});
export const metadata: Metadata = {
  title: "Aluga look",
  description: "Aluguel de roupas de forma inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
