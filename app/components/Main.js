import React from "react";

export default function Main() {
  return (
    <div id="home" className=" z-10 relative  ">
      <div className=" absolute bg-origin-content bg-cover   w-full h-full">
        <img
          className={`  transition-all ease-in-out duration-[3000ms] absolute left-0 top-0 h-full w-full object-cover brightness-[.8]`}
          src={"/hero-img.webp"}
          // src={"/hero-image.png"}
          alt="cover"
        />
      </div>
      <div className="  relative z-20 w-full py-[48px] md:py-[100px] lg:py-[140px] px-[12px] md:px-[80px] lg:px-[120px] xl:px-[160px] text-[#FFFFFF] ">
        <section className=" my-4 flex items-center flex-wrap gap-3 md:gap-10 ">
          <h1 className=" text-[32px] md:text-[48px] font-[700]"> أكادمية ذكرى</h1>
          <h1 className=" text-[19px] md:text-[24px] font-[600]">
            حيث يطيب للقران مقام
          </h1>
        </section>
        <p className="max-w-[750px] text-[12px] md:text-[18px] font-[400] leading-[38px] ">
          {`نحن أكاديمية "ذكرى" لتحفيظ القرآن الكريم، نوفر لك بيئة تعليمية متميزة
          لحفظ القرآن الكريم وإتقانه وفق أعلى المعايير الشرعية، مع برامج متخصصة
          للصغار والكبار، ودورات مكثفة لنيل الإجازات وإتقان التجويد. انضم إلينا
          اليوم وابدأ رحلتك المباركة مع كتاب الله!`}
        </p>
        <button className="my-8">
          {" "}
          <a
            href="https://wa.me/201069404880"
            // className="bg-[#3D4D4A] text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition duration-300 font-alexandria"
            className="bg-[#05846d] text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition duration-300 font-alexandria"
          >
            ابدأ رحلتك الآن
          </a>
        </button>
      </div>
    </div>
  );
}
