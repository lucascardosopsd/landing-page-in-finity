import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisScroll";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Agência IN-FINITY",
  description: "Marketing comm quem sabe fazer, com estratégia e resultado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/lenis@1.1.20/dist/lenis.css"
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <LenisProvider>{children}</LenisProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
