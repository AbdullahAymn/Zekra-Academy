import React from "react";
import Title from "./Title";

export default function Packages() {
  const Card = ({ title, price, features, num, offer = false }) => (
    <div className="flex relative border border-[#E1E4ED] flex-col w-full max-w-[300px] items-start justify-between p-6 bg-white rounded-[12px] sh">
      {offer && (
        <section className=" absolute  px-6 w-full left-0 top-[-20px]   ">
          <section className=" w-full text-[14px] font-[700]  text-white bg-[#3D4D4A] py-4 rounded-[9px] text-center ">
            الاكثر طلبا توفير 30%
          </section>
        </section>
      )}
      <section>
        <div className="flex items-center gap-2 mt-6">
          <span className="text-[#3D4D4A] text-[35px] md:text-[58px] font-bold">
            {price}
          </span>
          <span className="text-[#878691] text-[16px]">ر.س</span>
        </div>
        <h2 className="text-[#000000] text-[18px] font-[600] ">{title}</h2>
        <section className=" mb-4 pt-2 pb-4 border-b border-[#F1F3F7] ">
          <h2 className="text-[#000000] text-[14px] font-[400] ">
            {num} حصص في الشهر
          </h2>
        </section>
        <ul className="w-full space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13_19587)">
                  <path
                    d="M8.00048 15.207C11.9813 15.207 15.2085 11.9799 15.2085 7.99902C15.2085 4.01815 11.9813 0.791016 8.00048 0.791016C4.01961 0.791016 0.79248 4.01815 0.79248 7.99902C0.79248 11.9799 4.01961 15.207 8.00048 15.207Z"
                    fill="white"
                  />
                  <path
                    d="M7.99248 0.791016C6.56846 0.791016 5.17641 1.21329 3.99238 2.00443C2.80834 2.79558 1.8855 3.92007 1.34055 5.23569C0.7956 6.55132 0.653016 7.999 0.93083 9.39567C1.20864 10.7923 1.89438 12.0752 2.90131 13.0822C3.90825 14.0891 5.19117 14.7749 6.58783 15.0527C7.9845 15.3305 9.43218 15.1879 10.7478 14.6429C12.0634 14.098 13.1879 13.1752 13.9791 11.9911C14.7702 10.8071 15.1925 9.41504 15.1925 7.99102C15.1925 6.08146 14.4339 4.25011 13.0837 2.89985C11.7334 1.54958 9.90204 0.791016 7.99248 0.791016ZM11.3765 5.95902L7.82448 10.887C7.71868 11.0299 7.56427 11.129 7.39038 11.1659C7.21649 11.2027 7.03512 11.1747 6.88048 11.087L4.84048 9.89502C4.67499 9.79529 4.55589 9.63391 4.50938 9.44638C4.46287 9.25884 4.49276 9.06051 4.59248 8.89502C4.6922 8.72952 4.85358 8.61042 5.04112 8.56391C5.22866 8.5174 5.42699 8.54729 5.59248 8.64702L7.04048 9.51102L10.2405 5.11902C10.3592 5.00004 10.5159 4.92636 10.6833 4.91077C10.8507 4.89518 11.0182 4.93865 11.1569 5.03365C11.2956 5.12864 11.3967 5.26918 11.4427 5.43089C11.4886 5.5926 11.4765 5.76528 11.4085 5.91902L11.3765 5.95902Z"
                    fill="#3D4D4A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_19587">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-[#000000] text-[15px]">{feature}</span>
            </li>
          ))}
        </ul>
      </section>
      <a className=" w-full " href="https://wa.me/201069404880">
        {" "}
        <button className="mt-8 border border-[#3D4D4A] w-full py-3 bg-[#3D4D4A]/0 text-[#3D4D4A] rounded-[8px] hover:bg-[#3D4D4A] hover:text-white transition-all ease-in-out duration-300">
          سجل الان
        </button>
      </a>
    </div>
  );

  const packages = [
    {
      title: "باقة برونزية",
      price: "25",
      num: "4",
      features: [
        "حفظ القرآن في 3 سنوات",
        "متابعة دورية من قبل المشرفين",
        "تلقي عن شيخ متقن",
      ],
    },
    {
      title: "باقة فضية",
      price: "35",
      num: "8",
      features: [
        "حفظ القرآن في 3 سنوات",
        "متابعة دورية من قبل المشرفين",
        "تلقي عن شيخ متقن",
        "العلوم الشرعية",
        "تجويد القرآن وتدبره",
      ],
    },
    {
      title: "باقة ذهبية",
      price: "45",
      num: "12",
      features: [
        "حفظ القرآن في 3 سنوات",
        "متابعة دورية من قبل المشرفين",
        "تلقي عن شيخ متقن",
        "العلوم الشرعية",
        "تجويد القرآن وتدبره",
      ],
    },
    {
      offer: true,
      title: "باقة ماسية",
      price: "50",
      num: "12",
      features: [
        "حفظ القرآن في 3 سنوات",
        "متابعة دورية من قبل المشرفين",
        "تلقي عن شيخ متقن",
        "العلوم الشرعية",
        "تجويد القرآن وتدبره",
        "إجازة المتقنين بالروايات العشر",
      ],
    },
  ];

  return (
    <div id="packages">
      <Title text={"باقاتنا"} num={8} />

      <section className=" flex items-stretch justify-center gap-x-4 gap-y-12 flex-wrap ">
        {packages.map((pack, inx) => (
          <Card
            title={pack.title}
            price={pack.price}
            num={pack.num}
            features={pack.features}
            offer={!!pack.offer}
            key={inx}
          />
        ))}
      </section>

      <section className=" rounded-[20px] my-20 bg-[#3D4D4A0D] px-8 md:px-24  flex flex-wrap items-center gap-8 justify-center ">
        <section className=" flex-1 text-center lg:text-start">
          <h1 className=" mt-6 text-[25px] text-center lg:text-start md:text-[45px] lg:text-[50px]  font=[700] text-[#3D4D4A] ">
            ابدأ حصتك التجريبية مجانا
          </h1>
          <h4 className=" my-2 text-[#C3C8C7] text-center lg:text-start text-[15px] md:text-[22px] ">
            قم بالبدء الان واحصل علي أول حصة تجريبية لك مجانا مع افضل المعلمين
          </h4>
          <a className=" w-[200px]  " href="https://wa.me/201069404880">
            {" "}
            <button className="mb-6 w-[200px] border border-[#3D4D4A] mt-3  py-3 rounded-[8px] bg-[#3D4D4A] text-white transition-all ease-in-out duration-300">
              ابدأ الآن{" "}
            </button>
          </a>
        </section>
        <img src="/Quran Tutor.png" alt="" className=" w-[340px] " />
      </section>
    </div>
  );
}
