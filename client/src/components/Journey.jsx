import React from "react";

const Journey = () => {
  return (
    <main className="py-0 my-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:gap-10 gap-6">
          {/* Left Image */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <img
              src="	https://xcelglobalservices.com.au/assets/CountSideImg-CDeEyzA2.png"
              alt="Globe Travel"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-500">
              Your journey starts with us!
            </h2>

            <p className="mb-2 text-gray-700">
              Xcel Global Services with offices in Melbourne, Adelaide, Geelong & Perth, Australia.
            </p>

            <p className="mb-4 text-gray-700">
              Your journey to study or settle abroad begins with Xcel Global Services, where your goals become our mission. From the moment you decide to explore opportunities overseas, we offer professional, personalised guidance tailored to your aspirations. Whether it's securing university admissions, visa approvals, or planning your migration pathway, we stand by you at every step. With expert insights, trusted processes, and a welcoming approach, Xcel Global Services ensures your transition is smooth, successful, and stress-free. Let us help you turn your dreams into reality-your journey truly starts with us.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex flex-col items-center bg-blue-300 text-white p-4 rounded-lg w-1/3">
                <span className="text-3xl font-bold">15</span>
                <span className="text-sm mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col items-center bg-yellow-300 text-white p-4 rounded-lg w-1/3">
                <span className="text-3xl font-bold">8,000+</span>
                <span className="text-sm mt-1">VISA Approved</span>
              </div>
              <div className="flex flex-col items-center bg-red-300 text-white p-4 rounded-lg w-1/3">
                <span className="text-3xl font-bold">96%</span>
                <span className="text-sm mt-1">Admission Success</span>
              </div>
            </div>

            {/* Button */}
            <div className="text-center mt-6">
              <a href="/contact">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Get Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Journey;
