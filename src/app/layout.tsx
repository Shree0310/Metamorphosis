import type { Metadata } from "next";
import { Baloo_Bhaijaan_2, Kalam } from "next/font/google";
import "./globals.css";

const balooBhaijaan = Baloo_Bhaijaan_2({
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  subsets: ["latin"],
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metamorphosis Therapy Initiative",
  description: "Individual and couples therapy for Indian adults. Online, queer-affirmative, trauma-informed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${balooBhaijaan.variable} ${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
