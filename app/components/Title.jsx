import React from "react";

export default function Title({ text, num = 12 }) {
  const Rec = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.49512"
        y="-0.0078125"
        width="12"
        height="12"
        rx="2"
        transform="rotate(30 5.49512 -0.0078125)"
        fill="#3D4D4A"
      />
    </svg>
  );

  return (
    <div className=" mt-8 py-6 text-center ">
      <h1 className=" text-[30px] font-[500] text-[#3D4D4A] leading-[45px] ">
        {text}
      </h1>

      <section className=" my-4 flex items-center justify-center gap-1 ">
        {[...Array(num || 12)].map((_, i) => (
          <Rec key={i} />
        ))}
      </section>
    </div>
  );
}
