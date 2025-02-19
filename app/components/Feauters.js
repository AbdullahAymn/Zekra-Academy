import React from "react";
import Title from "./Title";

export default function Feauters() {
  const Card = ({ image, text }) => (
    <div className="flex flex-col items-center w-full max-w-[150px] md:max-w-[250px] lg:max-w-[370px] sh p-2 md:p-6">
      <img src={image} alt="" className="w-[140px]  mb-4" />
      <p className="text-[#878691] text-[16px] leading-[26px] text-center">
        {text}
      </p>
    </div>
  );

  const features = [
    {
      image: "/feature1.png",
      text: "معملون متخصصون",
    },
    {
      image: "/feature2.png",
      text: "متابعة وإشراف مستمر",
    },
    {
      image: "/feature3.png",
      text: "تحفيظ القرءان لجميع الاعمار",
    },
    {
      image: "/feature4.png",
      text: "حلقات إلكترونية تفاعلية",
    },
  ];

  return (
    <div
      id="features"
      className=" my-20 px-8 md:px-16 lg:px-24 xl:flex items-center gap-8"
    >
      <section className=" w-full mx-auto  max-w-[400px] flex justify-center ">
        <Title text={"ما يميز اكادميتنا"} />
      </section>
      <section className="flex flex-wrap justify-center gap-6 ">
        {features.map((feature, index) => (
          <Card key={index} image={feature.image} text={feature.text} />
        ))}
      </section>
    </div>
  );
}
