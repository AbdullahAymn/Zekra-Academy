import Nav from "./components/Nav";
import "./globals.css";
import localFont from "next/font/local";

const workSans = localFont({
  src: [
    {
      path: "./fonts/Alexandria-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Alexandria-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Zekra Academy",
  description: `"ذكري" هي أكاديمية متخصصة في تحفيظ القرآن الكريم وتعليمه وفق منهجية علمية حديثة`,
  // description: `نحن أكاديمية "ذكري" لتحفيظ القرآن الكريم، نوفر لك بيئة تعليمية متميزة لحفظ القرآن الكريم وإتقانه وفق أعلى المعايير الشرعية، مع برامج متخصصة للصغار والكبار، ودورات مكثفة لنيل الإجازات وإتقان التجويد. انضم إلينا اليوم وابدأ رحلتك المباركة مع كتاب الله!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`  almarai-regular ${workSans.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
