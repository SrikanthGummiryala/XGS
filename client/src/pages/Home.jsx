// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import CardSlider from "../components/CardSlider";
// import Accreditations from "../components/Accreditations";
// import Journey from "../components/Journey";
// import VisaSection from "../components/VisaSection";
// import Destinations from "../components/Destinations";
// import WhyChooseUs from "../components/WhyChooseUs";
// import XgsSection from "../components/XgsSection";
// import HomeCarousel from "../components/HomeCarousel";
// // import SocialSidebar from "../components/SocialSidebar";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <HomeCarousel />
//       {/* <SocialSidebar /> */}
//       <XgsSection />
//       <WhyChooseUs />
//       <Destinations />
//       <VisaSection />
//       <Journey />
//       <Accreditations />
//       <CardSlider />
//       <Footer />
//     </>
//   );
// };

// export default Home;

// -----------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import CardSlider from "../components/CardSlider";
// import Accreditations from "../components/Accreditations";
// import Journey from "../components/Journey";
// import VisaSection from "../components/VisaSection";
// import Destinations from "../components/Destinations";
// import WhyChooseUs from "../components/WhyChooseUs";
// import XgsSection from "../components/XgsSection";
// import HomeCarousel from "../components/HomeCarousel";
// import Form from "../components/Form"; 

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Show modal after 4 seconds
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 4000);

//     return () => clearTimeout(timer); // cleanup
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <HomeCarousel />
//       <XgsSection />
//       <WhyChooseUs />
//       <Destinations />
//       <VisaSection />
//       <Journey />
//       <Accreditations />
//       <CardSlider />
//       <Footer />

//       {/* Contact Form Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
//             {/* Close button */}
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-2xl"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>

//             {/* Contact Form */}
//             <Form />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;



// ------------------------------------------------------------------------------------


// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import CardSlider from "../components/CardSlider";
// import Accreditations from "../components/Accreditations";
// import Journey from "../components/Journey";
// import VisaSection from "../components/VisaSection";
// import Destinations from "../components/Destinations";
// import WhyChooseUs from "../components/WhyChooseUs";
// import XgsSection from "../components/XgsSection";
// import HomeCarousel from "../components/HomeCarousel";
// import Form from "../components/Form"; 
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Show modal after 4 seconds
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <HomeCarousel />
//       <XgsSection />
//       <WhyChooseUs />
//       <Destinations />
//       <VisaSection />
//       <Journey />
//       <Accreditations />
//       <CardSlider />
//       <Footer />

//       {/* Contact Form Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
//             <Link to="/contact">
//             {/* Close button */}
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-2xl"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>
//             </Link>


//             {/* Contact Form */}
//             <Form />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;


// ---------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardSlider from "../components/CardSlider";
import Accreditations from "../components/Accreditations";
import Journey from "../components/Journey";
import VisaSection from "../components/VisaSection";
import Destinations from "../components/Destinations";
import WhyChooseUs from "../components/WhyChooseUs";
import XgsSection from "../components/XgsSection";
import HomeCarousel from "../components/HomeCarousel";
import Form from "../components/Form";
import SocialSidebar from "../components/SocialSidebar";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show modal after 4 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    console.log("called")
    setShowModal(false);
    // navigate("/"); // ✅ navigate back to home
  };

  return (
    <>
      <Navbar />
      <HomeCarousel />
      {/* <SocialSidebar /> */}
      <XgsSection />
      <WhyChooseUs />
      <Destinations />
      <VisaSection />
      <Journey />
      <Accreditations />
      <CardSlider />
      <Footer />

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            {/* Close button */}
            {/* <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-2xl"
              onClick={handleClose}
            >
              &times;
            </button> */}

            {/* Contact Form */}
            <Form onClose={handleClose}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
