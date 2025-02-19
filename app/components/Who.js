import React from "react";
import Title from "./Title";
import Icon from "./Icon";
import IconServ from "./IconServ";

export default function Who() {
  const Sec = ({ title, text }) => (
    <section className=" w-full ">
      <section className=" flex items-center gap-3 ">
        <Icon />
        <h1 className=" text-[#000] font-[500] text-[19px] ">{title}</h1>
      </section>
      <p className=" text-[18px] font-[400] leading-[30px] text-[#878691] my-4 ">
        {text}
      </p>
    </section>
  );

  const SubSec = ({ num, text, serv = false }) => (
    <section className=" my-2 w-[48%] min-w-[157px] flex items-center gap-3 ">
      {serv ? <IconServ /> : <Icon />}
      <section>
        <h1 className=" text-[#0D0C22] text-[20px] md:text-[32px] font-[600] ">
          {num}
        </h1>
        <h1 className=" text-[#878691] text-[10px] md:text-[18px] font-[600] ">
          {text}
        </h1>
      </section>
    </section>
  );
  return (
    <div id="who">
      <Title text={"من نحن"} num={7} />

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 md:px-16 lg:px-24 ">
        <section className=" col-span-1">
          <Sec
            title={"نبذه عنا"}
            text={`"ذكرى" هي أكاديمية متخصصة في تحفيظ القرآن الكريم وتعليمه وفق منهجية علمية حديثة، تهدف إلى تسهيل الحفظ والتلاوة لجميع الفئات العمرية، مع التركيز على الإتقان والالتزام بأحكام التجويد.
`}
          />

          <section className=" flex items-center mt-6 mb-20 gap-x-2 gap-y-4 flex-wrap ">
            <SubSec serv={false} num={"500"} text={"عدد المعلمين"} />
            <SubSec serv={true} num={"2000"} text={"عدد الطلاب"} />
            <SubSec serv={false} num={"50"} text={"عدد التقييمات"} />
            <SubSec serv={true} num={"4.8"} text={"التقيم الكلي"} />
          </section>
        </section>

        <section className=" col-span-1 hidden lg:flex ">
          <img
            src="/service-image.png"
            className="  w-full max-w-[510px] rounded-[12px] "
            alt=""
          />
        </section>
        <Sec
          title={"رسالتنا"}
          text={`إحياء روح التعلّق بالقرآن الكريم، وتعزيز فهمه وتطبيقه في الحياة اليومية.
`}
        />
        <Sec
          title={"قيمنا"}
          text={`أن تكون "ذكرى" الوجهة الأولى لتعليم القرآن الكريم وتحفيظه لجميع الأعمار، مع تقديم بيئة تعليمية محفزة ومرنة تناسب الجميع.
`}
        />
      </div>
    </div>
  );
}
