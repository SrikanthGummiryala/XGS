import React from "react";

const Accreditations = () => {
  const trainings = [
    {
      img: "https://xcelglobalservices.com.au/IELTS.png",
      title: "Xcel Global Services - IELTS Coaching & Higher Education",
      link: "/services/training/ielts-coaching",
    },
    {
      img: "https://xcelglobalservices.com.au/Pearson.png",
      title: "Xcel Global Services - PTE Coaching & Higher Education",
      link: "/services/training/pte-coaching",
    },
    {
      img: "https://xcelglobalservices.com.au/sat.png",
      title: "Xcel Global Services - SAT Coaching & Higher Education",
      link: "/services/training/sat-coaching",
    },
  ];

  return (
    <div className="w-full px-6 py-10 relative">
      {/* ACCREDITATIONS */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
          ACCREDITATIONS
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            "https://xcelgs.com/assets/img/test/1.png",
            "https://xcelgs.com/assets/img/test/2.png",
            "https://xcelgs.com/assets/img/test/3.png",
            "https://xcelgs.com/assets/img/test/4.png",
            "https://xcelgs.com/assets/img/test/5.png",
          ].map((src, i) => (
            <img
              key={i}
              className="w-24 sm:w-28 md:w-32 transform transition duration-300 hover:-translate-y-2 hover:scale-105"
              src={src}
              alt={`Accreditation ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* TRAINING */}
      <div className="mt-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">
          Online &amp; Offline Training
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainings.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col 
                         transform transition duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain p-4"
              />
              <div className="flex flex-col justify-between flex-1 p-4">
                <h5 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h5>
                <a
                  href={item.link}
                  className="mt-4 inline-flex items-center text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="ml-2"
                    width="14"
                    height="14"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
