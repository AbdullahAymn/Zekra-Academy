import React from "react";
const links = [
  { id: "home", text: "الرئيسية" },
  { id: "who", text: "من نحن" },
  { id: "services", text: "خدماتنا" },
  { id: "features", text: "ما يميزنا" },
  { id: "packages", text: "الباقات" },
  { id: "rates", text: "اراء العملاء" },
  { id: "faqs", text: "الاسئلة الشائعة" },
  { id: "contacts", text: "تواصل معنا" },
];

export default function Nav() {
  return (
    <div>
      <nav className="w-full bg-white shadow-md">
        <div className=" w-full px-12 py-3 flex justify-center md:justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Zekra Academy Logo"
              className="h-[70px] rounded-[10px] w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden xl:flex items-center justify-around flex-1 font-alexandria">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-700 hover:text-[#3D4D4A] text-lg"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className=" hidden md:flex items-center">
            <a
              href="https://wa.me/201069404880"
              className="bg-[#3D4D4A] text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition duration-300 font-alexandria"
            >
              تواصل معنا
            </a>
          </div>

          {/* Mobile Menu Button */}
        </div>
      </nav>
    </div>
  );
}
