import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zekra Academy",
  description: `نحن أكاديمية "ذكري" لتحفيظ القرآن الكريم، نوفر لك بيئة تعليمية متميزة لحفظ القرآن الكريم وإتقانه وفق أعلى المعايير الشرعية، مع برامج متخصصة للصغار والكبار، ودورات مكثفة لنيل الإجازات وإتقان التجويد. انضم إلينا اليوم وابدأ رحلتك المباركة مع كتاب الله!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
