// import React, { useState } from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="p-3 flex justify-between shadow-md items-center text-gray-600 bg-blue-50 fixed top-0 w-full z-50 font-serif">
//         {/* Logo */}
//         <div>
//           <Link to="/">
//             <img
//               className="w-40"
//               src="https://xcelglobalservices.com.au/assets/XgsLogo5-CFHHsCCj.png"
//               alt="Logo"
//             />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex">
//           <ul className="flex gap-8 text-lg font-medium items-center text-black">
//             <Link to="/">
//               <li>Home</li>
//             </Link>
//             <Link to="/about">
//               <li>About Us</li>
//             </Link>
//             <Link to="/services">
//               <li>Services</li>
//             </Link>
//             <Link to="/contact">
//               <li>Contact</li>
//             </Link>
//             <Link to="/form">
//               <li className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg cursor-pointer hover:bg-blue-700 transition">
//                 Book Consultation <FaArrowRightLong />
//               </li>
//             </Link>
//           </ul>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-blue-50 shadow-md fixed top-16 left-0 w-full z-40 font-serif">
//           <ul className="flex flex-col gap-5 p-5 text-lg font-medium text-black">
//             <Link to="/" onClick={() => setIsOpen(false)}>
//               <li>Home</li>
//             </Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}>
//               <li>About Us</li>
//             </Link>
//             <Link to="/services" onClick={() => setIsOpen(false)}>
//               <li>Services</li>
//             </Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)}>
//               <li>Contact</li>
//             </Link>
//             <li className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:bg-blue-700 transition">
//               Book Consultation <FaArrowRightLong />
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// ---------------------------------------------------------------------------------


// import React, { useState } from "react";
// import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="p-3 flex justify-between shadow-md items-center text-gray-600 bg-blue-50 fixed top-0 w-full z-50 font-serif">
//         {/* Logo */}
//         <div>
//           <Link to="/">
//             <img
//               className="w-40"
//               src="https://xcelglobalservices.com.au/assets/XgsLogo5-CFHHsCCj.png"
//               alt="Logo"
//             />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex">
//           <ul className="flex gap-8 text-lg font-medium items-center text-black">
//             <Link to="/"><li>Home</li></Link>
//             <Link to="/about"><li>About Us</li></Link>
//             <Link to="/services"><li>Services</li></Link>
//             <Link to="/contact"><li>Contact</li></Link>
//             <Link to="/form">
//               <li className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg cursor-pointer hover:bg-blue-700 transition">
//                 Book Consultation <FaArrowRightLong />
//               </li>
//             </Link>
//           </ul>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-blue-50 shadow-md fixed top-16 left-0 w-full z-40 font-serif">
//           <ul className="flex flex-col gap-5 p-5 text-lg font-medium text-black">
//             <Link to="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}><li>About Us</li></Link>
//             <Link to="/services" onClick={() => setIsOpen(false)}><li>Services</li></Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)}><li>Contact</li></Link>
//             <Link to="/form" onClick={() => setIsOpen(false)}>
//               <li className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:bg-blue-700 transition">
//                 Book Consultation <FaArrowRightLong />
//               </li>
//             </Link>
//           </ul>
//         </div>
//       )}

//       {/* Fixed Social Sidebar (Left Center) */}
//       <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
//         <a
//           href="https://www.facebook.com/xgsaus"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//         >
//           <FaFacebookF size={20} />
//         </a>
//         <a
//           href="https://www.instagram.com/xcel_global_australia/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
//         >
//           <FaInstagram size={20} />
//         </a>
//         <a
//           href="https://www.linkedin.com/company/xcel-global-australia/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition"
//         >
//           <FaLinkedin size={20} />
//         </a>
//       </div>

//       {/* Fixed Free Consultation Button (Right Center) */}
//       <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
//         <Link to="/contact">
//           <button className="bg-blue-800 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
//             Free Consultation
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// -----------------------------------------------------------------------

import React, { useState } from "react";
import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="p-3 flex justify-between shadow-md items-center text-gray-600 bg-blue-50 fixed top-0 w-full z-50 font-serif">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="w-40"
              src="https://xcelglobalservices.com.au/assets/XgsLogo5-CFHHsCCj.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-8 text-lg font-medium items-center text-black">
            <Link to="/" className="hover:text-blue-600 hover:underline"><li>Home</li></Link>
            <Link to="/about" className="hover:text-blue-600 hover:underline"><li>About Us</li></Link>
            <Link to="/services" className="hover:text-blue-600 hover:underline"><li>Services</li></Link>
            <Link to="/contact" className="hover:text-blue-600 hover:underline"><li>Contact</li></Link>
            <Link to="/form">
              <li className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg cursor-pointer hover:bg-blue-700 transition">
                Book Consultation <FaArrowRightLong />
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 shadow-md fixed top-16 left-0 w-full z-40 font-serif">
          <ul className="flex flex-col gap-5 p-5 text-lg font-medium text-black">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:underline"><li>Home</li></Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:underline"><li>About Us</li></Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:underline"><li>Services</li></Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 hover:underline"><li>Contact</li></Link>
            <Link to="/form" onClick={() => setIsOpen(false)}>
              <li className="bg-blue-800 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:bg-blue-700 transition">
                Book Consultation <FaArrowRightLong />
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* Fixed Free Consultation Button (Left Vertical) */}
      <div className="fixed left-[0px] top-1/2 z-50 ">
  <Link to="/contact">
    <button className="bg-blue-800 text-white px-10 py-2 rounded-r-full shadow-lg hover:bg-blue-700 transition transform -rotate-90 origin-center">
      Free Consultation
    </button>
  </Link>
</div>


      {/* Fixed Social Icons (Right Center) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <a
          href="https://www.facebook.com/xgsaus"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/xcel_global_australia/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/xcel-global-australia/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </>
  );
};

export default Navbar;


