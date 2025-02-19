import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#061F13] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className=" mx-auto flex items-start justify-between flex-wrap gap-8">
        {/* About Section */}
        <div className="space-y-10 flex-1 min-w-[320px] my-2 ">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Zekra Academy Logo"
              className="h-[70px] rounded-[10px] w-auto"
            />
          </div>

          <p className="text-[18px] font-[400] max-w-[460px] leading-[36px] my-4">
            "ذكرى" هي أكاديمية متخصصة في تحفيظ القرآن الكريم وتعليمه وفق منهجية
            علمية حديثة، تهدف إلى تسهيل الحفظ والتلاوة لجميع الفئات العمرية، مع
            التركيز على الإتقان والالتزام بأحكام التجويد.
          </p>

          <section className=" flex items-center gap-3 ">
            <a
              href="https://www.facebook.com/profile.php?id=61572423157230"
              target="_blank"
            >
              {" "}
              <svg
                width="14"
                height="28"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_14939)">
                  <path
                    d="M1.78694 14V7.43079H0V5.06556H1.78694V3.04535C1.78694 1.45785 2.84249 0 5.27471 0C6.25947 0 6.98766 0.09177 6.98766 0.09177L6.93028 2.30049C6.93028 2.30049 6.18765 2.29347 5.37725 2.29347C4.50015 2.29347 4.35963 2.68638 4.35963 3.33851V5.06556H7L6.88512 7.43079H4.35963V14H1.78694Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_14939">
                    <rect width="7" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </section>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 w-[250px] my-2   ">
          <h3 className="text-xl mb-10 font-bold">الخدمات</h3>
          <ul className="space-y-6 ">
            <li>
              <h1>العلوم الشرعية</h1>
            </li>
            <li>
              <h1>حفظ القران</h1>
            </li>
            <li>
              <h1>اجازة بالسند المتصل</h1>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 w-full max-w-[320px] md:max-w-[350px] my-2   ">
          <h3 className="text-xl mb-10 font-bold">التواصل</h3>
          <ul className="space-y-6 ">
            <li className=" flex items-center gap-2 text-[16px]   ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.49375 3.39531L3.98984 0.901563C4.16592 0.724712 4.3752 0.584392 4.60567 0.488665C4.83614 0.392938 5.08325 0.34369 5.33281 0.34375C5.8414 0.34375 6.31953 0.542969 6.67812 0.901563L9.36406 3.5875C9.54091 3.76358 9.68123 3.97286 9.77696 4.20333C9.87269 4.4338 9.92193 4.68091 9.92187 4.93047C9.92187 5.43906 9.72266 5.91719 9.36406 6.27578L7.4 8.23984C7.85974 9.25319 8.49893 10.175 9.28672 10.9609C10.0725 11.7506 10.9943 12.3922 12.0078 12.8547L13.9719 10.8906C14.148 10.7138 14.3572 10.5735 14.5877 10.4777C14.8182 10.382 15.0653 10.3328 15.3148 10.3328C15.8234 10.3328 16.3016 10.532 16.6602 10.8906L19.3484 13.5742C19.5255 13.7506 19.6659 13.9603 19.7617 14.1912C19.8574 14.4221 19.9065 14.6696 19.9062 14.9195C19.9062 15.4281 19.707 15.9062 19.3484 16.2648L16.857 18.7562C16.2852 19.3305 15.4953 19.6562 14.6844 19.6562C14.5133 19.6562 14.3492 19.6422 14.1875 19.6141C11.0281 19.0938 7.89453 17.4133 5.36562 14.8867C2.83906 12.3625 1.16094 9.23125 0.633593 6.0625C0.474218 5.09453 0.795311 4.09844 1.49375 3.39531Z"
                  fill="white"
                />
              </svg>

              <h1>201069404880+</h1>
            </li>

            <li className=" flex items-center gap-2 text-[16px]   ">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.8937 0.800781H18.7937C20.2937 0.800781 21.0497 1.50878 21.0497 2.94878V13.0528C21.0497 14.4808 20.2937 15.2008 18.7937 15.2008H2.8937C1.3937 15.2008 0.637695 14.4808 0.637695 13.0528V2.94878C0.637695 1.50878 1.3937 0.800781 2.8937 0.800781ZM10.8377 11.1208L18.9257 4.48478C19.2137 4.24478 19.4417 3.69278 19.0817 3.20078C18.7337 2.70878 18.0977 2.69678 17.6777 2.99678L10.8377 7.62878L4.0097 2.99678C3.5897 2.69678 2.9537 2.70878 2.6057 3.20078C2.2457 3.69278 2.4737 4.24478 2.7617 4.48478L10.8377 11.1208Z"
                  fill="white"
                />
              </svg>

              <a
                href="mailto:Zekraacademy@gmail.com"
                className="hover:underline"
              >
                <h1>Zekraacademy@gmail.com</h1>
              </a>
            </li>
{/* 
            <li className=" flex items-center gap-2 text-[16px]   ">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.38594 18.525C4.48281 16.1426 0.25 10.3684 0.25 7.125C0.25 3.18992 3.38396 0 7.25 0C11.1146 0 14.25 3.18992 14.25 7.125C14.25 10.3684 9.98438 16.1426 8.11406 18.525C7.66562 19.0928 6.83437 19.0928 6.38594 18.525ZM7.25 9.5C8.53698 9.5 9.58333 8.43496 9.58333 7.125C9.58333 5.81504 8.53698 4.75 7.25 4.75C5.96302 4.75 4.91667 5.81504 4.91667 7.125C4.91667 8.43496 5.96302 9.5 7.25 9.5Z"
                  fill="white"
                />
              </svg>

              <h1>الزقازيق محافظة الشرقية مصر</h1>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="border-t border-white/10 mt-8 pt-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Zekra Academy. جميع الحقوق محفوظة
        </p>
      </div> */}
    </footer>
  );
}
