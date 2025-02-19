import React from "react";

export default function Rates() {
  const reviews = [
    {
      name: "أحمد فضالي",
      text: "طريقة التدريس رائعة، والمدرسون متمكنون جدًا. لم أشعر بهذا التقدم في الحفظ من قبل!",
      rating: 4.1,
    },
    {
      name: "فهد حسين",
      text: "أكاديمية متميزة، طفلي أصبح يحب القرآن بفضل طرق التدريس الممتعة والمحفزة.",
      rating: 4.1,
    },
  ];

  const ReviewCard = ({ name, text, rating }) => (
    <div className="bg-white p-6 sh rounded-[20px] w-full max-w-[580px]">
      <svg
        width="39"
        height="29"
        viewBox="0 0 39 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.7139 29C6.09264 29 3.9673 28.0794 2.33787 26.2381C0.779292 24.326 0 21.8474 0 18.8022C0 14.8364 1.16894 11.1538 3.50681 7.75458C5.84469 4.28449 8.74932 1.69963 12.2207 0L12.8583 1.27472C11.3706 2.40781 10.0599 3.85958 8.92643 5.63003C7.79292 7.40049 6.9782 9.59584 6.48229 12.2161L8.7139 12.7473C11.1935 13.3138 13.1063 14.3761 14.4523 15.9341C15.8692 17.4212 16.5777 19.2271 16.5777 21.3517C16.5777 23.6178 15.7984 25.4591 14.2398 26.8755C12.752 28.2918 10.9101 29 8.7139 29ZM31.1362 29C28.515 29 26.3896 28.0794 24.7602 26.2381C23.2016 24.326 22.4223 21.8474 22.4223 18.8022C22.4223 14.8364 23.5913 11.1538 25.9292 7.75458C28.267 4.28449 31.1717 1.69963 34.6431 0L35.2807 1.27472C33.7929 2.40781 32.4823 3.85958 31.3488 5.63003C30.2153 7.40049 29.4005 9.59584 28.9046 12.2161L31.1362 12.7473C33.6158 13.3138 35.5286 14.3761 36.8747 15.9341C38.2916 17.4212 39 19.2271 39 21.3517C39 23.6178 38.2207 25.4591 36.6621 26.8755C35.1744 28.2918 33.3324 29 31.1362 29Z"
          fill="#3D4D4A"
        />
      </svg>

      <p className="text-[#52525B] text-[16px] font-[600] my-4">{text}</p>

      <section className=" flex items-center justify-between gap-3 ">
        <p className="font-[700] text-[20px] text-[#3D4D4A]">{name}</p>
        <section className=" bg-[#3D4D4A1A] p-2 flex items-center justify-center gap-1 rounded-[8px]  text-[#313B5E] text-[12px] font-[500]">
          {rating}{" "}
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </section>
      </section>
    </div>
  );

  return (
    <div id="rates">
      <h1 className=" text-center my-8 text-[#3D4D4A] font-[700] text-[27px] md:text-[32px]  ">
        بعض أراء عملائنا
      </h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 mb-16">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            text={review.text}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
}
