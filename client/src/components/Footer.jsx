import React from "react";
import { MdEmail } from "react-icons/md";
import { FaCheck, FaLocationDot, FaRegCopyright } from "react-icons/fa6";
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaGreaterThan,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-white mt-10 font-serif">
      {/* Top Section (Contact Info) */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6 justify-around items-center text-center md:text-left">
          {/* Australia */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <img
              className=" animate-bounce [animation-duration:6s] w-32"
              src="https://xcelglobalservices.com.au/assets/Ship-a2pgNVAg.png"
              alt="Australia Office"
            />
            <ul className="space-y-2">
              <li className="font-semibold">Australia</li>
              <a href="tel:1800959619" className="text-white hover:text-blue-600">
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <FaPhone /> 1800 959 619
                </li>
              </a>
              <a href="mailto:migration@xcelgs.com" className="text-white hover:text-blue-600">
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <MdEmail /> migration@xcelgs.com
                </li>
              </a>
            </ul>
          </div>

          {/* India */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <img
              className="animate-bounce [animation-duration:6s] w-24"
              src="https://xcelglobalservices.com.au/assets/Charminar-D2wrmlbU.png"
              alt="India Office"
            />
            <ul className="space-y-2">
              <li className="font-semibold">India</li>
              <a href="tel:+919343369999" className="text-white hover:text-blue-600">
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <FaPhone /> +91 93433 69999
                </li>
              </a>
              <a href="mailto:kukatpally@xcelgs.com" className="text-white hover:text-blue-600">
                <li className="flex gap-2 items-center justify-center md:justify-start">
                  <MdEmail /> kukatpally@xcelgs.com
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <hr className="bg-white opacity-50" />

      {/* Middle Section (Links) */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
          {/* Study Abroad */}
          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-lg">Study In Abroad</li>
              {[
                { flag: "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg", name: "USA", link: "/study/usa" },
                { flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoAVxY5SJjZ7BCg41pNTT-mbRN6LO3AhDyg&s", name: "UK", link: "/study/uk" },
                { flag: "https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Australia_converted.svg", name: "Australia", link: "/study/australia" },
                { flag: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-xl.png", name: "Canada", link: "/study/canada" },
                { flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMuZZnHhZce51YjZijUFyG3eu_mgpIW4Jbg&s", name: "Germany", link: "/study/germany" },
              ].map((country, i) => (
                <a key={i} href={country.link} className="text-white hover:text-blue-600">
                  <li className="cursor-pointer flex items-center gap-2">
                    <img className="w-5 h-5 rounded-full" src={country.flag} alt={country.name} />
                    {country.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* Immigration */}
          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-lg">Immigration</li>
              {[
                { flag: "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg", name: "USA", link: "/immigration/usa" },
                { flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoAVxY5SJjZ7BCg41pNTT-mbRN6LO3AhDyg&s", name: "UK", link: "/immigration/uk" },
                { flag: "https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Australia_converted.svg", name: "Australia", link: "/immigration/australia" },
                { flag: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-xl.png", name: "Canada", link: "/immigration/canada" },
                { flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMuZZnHhZce51YjZijUFyG3eu_mgpIW4Jbg&s", name: "Germany", link: "/immigration/germany" },
              ].map((country, i) => (
                <a key={i} href={country.link} className="text-white hover:text-blue-600">
                  <li className="cursor-pointer flex items-center gap-2">
                    <img className="w-5 h-5 rounded-full" src={country.flag} alt={country.name} />
                    {country.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* Visa */}
          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-lg">Visa</li>
              {["Student Visa", "PR Visa", "Visitor Visa", "Dependent Visa", "Work Visa", "Business Visa"].map((visa, i) => (
                <a key={i} href={`/visa/${visa.replace(" ", "-").toLowerCase()}`} className="text-white hover:text-blue-600">
                  <li className="flex gap-2 items-center cursor-pointer">
                    <FaCheck />
                    {visa}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-lg">Important Links</li>
              {[
                { name: "Terms and Conditions", link: "/terms" },
                { name: "Refund Policy", link: "/refund" },
                { name: "Privacy Policy", link: "/privacy" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, i) => (
                <a key={i} href={item.link} className="text-white hover:text-blue-600">
                  <li className="flex gap-2 items-center cursor-pointer">
                    <FaGreaterThan />
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <ul className="space-y-2">
              <li className="font-semibold text-lg">Location</li>
              <li className="flex gap-2 items-center text-white">
                <FaLocationDot /> Headoffice at Melbourne, Australia
              </li>
              {[
                { flag: "https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Australia_converted.svg", name: "Australia", link: "/location/australia" },
                { flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png", name: "India", link: "/location/india" },
                { flag: "https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg", name: "Indonesia", link: "/location/indonesia" },
                { flag: "https://2021-2025.state.gov/wp-content/uploads/2018/08/ce-lgflag.gif", name: "SriLanka", link: "/location/srilanka" },
                { flag: "https://cdn.countryflags.com/thumbs/nepal/flag-400.png", name: "Nepal", link: "/location/nepal" },
              ].map((loc, i) => (
                <a key={i} href={loc.link} className="text-white hover:text-blue-600">
                  <li className="cursor-pointer flex items-center gap-2">
                    <img className="w-5 h-5 rounded-full" src={loc.flag} alt={loc.name} />
                    {loc.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        <p className="flex items-center gap-2 justify-center text-sm md:text-base text-white">
          <FaRegCopyright /> 2025 Xcelgs | All Rights Reserved
        </p>

        <div className="flex items-center gap-6 text-xl md:text-2xl justify-center mt-4">
          <a href="https://facebook.com" target="_blank" className="text-white hover:text-blue-600" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white hover:text-blue-600" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-white hover:text-blue-600" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
