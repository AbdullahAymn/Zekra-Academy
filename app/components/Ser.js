import React from "react";
import Title from "./Title";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "./Icons";

export default function Ser() {
  const Card = ({ title, text, icon }) => (
    <section className="flex flex-col w-full max-w-[370px] items-center p-6 bg-white rounded-[12px] sh">
      <section className=" flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#3D4D4A1A] ">
        {icon}
      </section>
      <h2 className="text-[#3D4D4A] text-[20px] font-[500] my-4 text-center">
        {title}
      </h2>
      <p className="text-[#878691] text-[16px] leading-[26px] text-center">
        {text}
      </p>
    </section>
  );

  const services = [
    {
      title: `الإجازات القرآنية بالسند المتصل`,
      text: `احصل على إجازة في تلاوة وحفظ القرآن الكريم بسند متصل إلى رسول الله ﷺ، تحت إشراف مشايخ مجازين.`,
      icon: <Icon1 />,
    },
    {
      title: `تحفيظ القرآن للأطفال`,
      text: `برنامج مخصص للأطفال، بأساليب ممتعة وتفاعلية تناسب أعمارهم، مع التركيز على غرس حب القرآن في قلوبهم.`,
      icon: <Icon2 />,
    },
    {
      title: `تحفيظ القرآن للكبار والصغار`,
      text: `نظام تعليمي مرن يناسب جميع الفئات العمرية، مع متابعة مستمرة لتحقيق أهدافك في الحفظ والإتقان.`,
      icon: <Icon3 />,
    },
    {
      title: ` تعليم التجويد وإتقان التلاوة`,
      text: `دورات شاملة في أحكام التجويد، تشمل الجانب النظري والتطبيقي لضبط التلاوة وتحسين الأداء.`,
      icon: <Icon4 />,
    },
    {
      title: `برنامج حفظ القرآن في سنة`,
      text: `مسار مكثف لحفظ القرآن الكريم خلال عام واحد، مع خطة مدروسة ومتابعة دقيقة لضمان التقدم والاستمرارية.`,
      icon: <Icon5 />,
    },
    {
      title: `العلوم الشرعية`,
      text: `دورات شاملة لتعليم الطفل العقيدة الصحيحة وعلوم التفسير والحديث`,
      icon: <Icon6 />,
    },
  ];
  return (
    <div id="services">
      <Title text={`خدماتنا في "ذكري"`} />
      <div className="flex flex-wrap justify-center gap-6 px-8 md:px-16 lg:px-24">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            text={service.text}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
