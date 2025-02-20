import Script from "next/script";
import Footer from "./components/Footer";
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
  description: `"ذكرى" هي أكاديمية متخصصة في تحفيظ القرآن الكريم وتعليمه وفق منهجية علمية حديثة`,
  // description: `نحن أكاديمية "ذكرى" لتحفيظ القرآن الكريم، نوفر لك بيئة تعليمية متميزة لحفظ القرآن الكريم وإتقانه وفق أعلى المعايير الشرعية، مع برامج متخصصة للصغار والكبار، ودورات مكثفة لنيل الإجازات وإتقان التجويد. انضم إلينا اليوم وابدأ رحلتك المباركة مع كتاب الله!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        {/* Snap Pixel Code */}
        <Script
          id="snap-pixel"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(e,t,n){
              if(e.snaptr) return;
              var a=e.snaptr=function(){
                a.handleRequest ? a.handleRequest.apply(a,arguments) : a.queue.push(arguments)
              };
              a.queue=[];
              var s='script';
              r=t.createElement(s);
              r.async=!0;
              r.src=n;
              var u=t.getElementsByTagName(s)[0];
              u.parentNode.insertBefore(r,u);
            })(window,document,'https://sc-static.net/scevent.min.js');
            
            snaptr('init', '9706ba7f-af13-4fe8-9794-33ed4eb36b4a', {});
            snaptr('track', 'PAGE_VIEW');
          `,
          }}
        />

        {/* End Snap Pixel Code */}
      </head>
      <body className={`  almarai-regular ${workSans.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
