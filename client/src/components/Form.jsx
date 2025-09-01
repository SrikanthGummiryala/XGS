// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     country: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const [submitStatus, setSubmitStatus] = useState(null); // success or error

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/contact", formData);
//       setSubmitStatus({ type: "success", message: response.data.message });
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         service: "",
//         country: "",
//         date: "",
//         time: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       setSubmitStatus({ type: "error", message: "Failed to submit. Please try again." });
//     }
//   };

//   // useEffect to handle submitStatus side-effects
//   useEffect(() => {
//     if (submitStatus) {
//       alert(submitStatus.message);
//       setSubmitStatus(null); // reset status after showing alert
//     }
//   }, [submitStatus]);

//   return (
//     <div className="max-w-5xl mx-auto p-6 mt-10 bg-gray-50 shadow-lg rounded-lg font-serif">
//       {/* Headings */}
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
//         Get in Touch
//       </h2>
//       <h3 className="text-xl text-center text-gray-600 mb-8">
//         Register for Free Consultation
//       </h3>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         {/* Full Name */}
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Phone */}
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Service */}
//         <select
//           name="service"
//           value={formData.service}
//           onChange={handleChange}
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">Select Service</option>
//           <option value="Immigration">Immigration</option>
//           <option value="Education">Education</option>
//           <option value="Training">Training</option>
//         </select>

//         {/* Country */}
//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//           placeholder="Country"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Date */}
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Time */}
//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Message (full width) */}
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Message"
//           rows="4"
//           className="md:col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         ></textarea>

//         {/* Submit Button (full width) */}
//         <button
//           type="submit"
//           className="md:col-span-2 bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition font-medium"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import Navbar from "./Navbar";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//     country: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const [submitStatus, setSubmitStatus] = useState(null); // success or error

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Posting form data to your backend API
//       const response = await axios.post("http://localhost:3000/api/contact", formData);

//       setSubmitStatus({ type: "success", message: response.data.message });

//       // Reset form after successful submission
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         service: "",
//         country: "",
//         date: "",
//         time: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error(error);
//       setSubmitStatus({ type: "error", message: "Failed to submit. Please try again." });
//     }
//   };

//   // Show alert on submitStatus change
//   useEffect(() => {
//     if (submitStatus) {
//       alert(submitStatus.message);
//       setSubmitStatus(null); // reset status after showing alert
//     }
//   }, [submitStatus]);

//   return (
//     <>
//     {/* <Navbar /> */}
//     <div className="max-w-5xl mx-auto p-6 mt-30 bg-gray-50 shadow-lg rounded-lg font-serif">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
//         Get in Touch
//       </h2>
//       <h3 className="text-xl text-center text-gray-600 mb-8">
//         Register for Free Consultation
//       </h3>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <select
//           name="service"
//           value={formData.service}
//           onChange={handleChange}
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">Select Service</option>
//           <option value="Immigration">Immigration</option>
//           <option value="Education">Education</option>
//           <option value="Training">Training</option>
//         </select>

//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//           placeholder="Country"
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Message"
//           rows="4"
//           className="md:col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         ></textarea>

//         <button
//           type="submit"
//           className="md:col-span-2 bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition font-medium"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default Form;

// -----------------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );
      setSubmitStatus({ type: "success", message: response.data.message });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        country: "",
        date: "", 
        time: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({ type: "error", message: "Failed to submit. Please try again." });
    }
  };

  useEffect(() => {
    if (submitStatus) {
      alert(submitStatus.message);
      setSubmitStatus(null);
    }
  }, [submitStatus]);

  return (
    <div className="relative max-w-5xl mx-auto p-6 mt-10 bg-gray-50 shadow-lg rounded-lg font-serif">
      {/* Close Button */}
      <Link to="/">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
      </Link>

      <h2 className="text-4xl font-bold text-center bg-blue-400 rounded-2xl  text-gray-800 mb-2">
        Get in Touch
      </h2>
      <h3 className="text-xl text-center text-gray-600 mb-8">
        Register for Free Consultation
      </h3>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Service</option>
          <option value="Immigration">Immigration</option>
          <option value="Education">Education</option>
          <option value="Training">Training</option>
        </select>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
          className="md:col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

