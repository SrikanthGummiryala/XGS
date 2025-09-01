import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Images */}
          <div className="flex flex-col items-center mt-[60px] gap-6">
            <img
              src="https://xcelglobalservices.com.au/assets/Books-DdNR1EU7.png"
              alt="Books with graduation cap"
              className="rounded-lg w-full md:w-auto max-w-[250px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            />
            <img
              src="https://xcelglobalservices.com.au/assets/Presentation-U5AG_Osx.png"
              alt="Business meeting"
              className="rounded-lg w-full md:w-auto max-w-[250px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            />
          </div>

          {/* Middle Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://xcelglobalservices.com.au/assets/Family-uBoFBD4_.png"
              alt="Family at airport"
              className="rounded-lg object-left-bottom w-full max-w-[350px] h-auto max-h-[500px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-900 font-bold text-lg uppercase tracking-wide mb-2">
              Why Choose Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              One-Stop Destination for <br /> All Abroad Needs
            </h2>
            <p className="text-gray-600 mb-4">
              Xcel Global Services stands out for its trusted expertise in
              overseas education, immigration, and training. With certified
              counselors and licensed migration agents, we offer personalized
              guidance tailored to your academic or migration goals. Our
              end-to-end support ensures a smooth journey—from application to
              visa—delivered with complete transparency and care. With a strong
              track record of success and satisfied clients across Australia and
              India, we are the reliable partner you can count on.
            </p>
            <p className="text-gray-600 mb-4">
              Here’s why thousands trust us to turn their global aspirations
              into reality:
            </p>

            {/* Features */}
            <div className="flex flex-col md:flex-row md:items-start mt-6 gap-6">
              <div className="flex-1">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    End-to-End Abroad Solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Trusted Experts, Proven Results
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Personalized Approach
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Strong Global Network
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Transparent Process
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Multilingual & Multicultural Support
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Fast, Reliable, and Stress-Free
                  </li>
                </ul>
              </div>

              {/* Badge Image */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="https://xcelglobalservices.com.au/assets/YearsLogo-DJquKWPW.png"
                  alt="15 years badge"
                  className="w-40 h-40 transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
