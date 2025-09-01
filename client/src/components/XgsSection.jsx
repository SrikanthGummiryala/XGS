import React from "react";

const XgsSection = () => {
  const cards = [
    {
      title: "Xcel Global Services - Study Abroad & Education Experts",
      description:
        "At Xcel Global Services, we turn your dream of studying abroad into reality. With years of experience in student visas and higher education guidance, we provide end-to-end support - from choosing the right course ...",
      img: "https://xcelglobalservices.com.au/assets/Educ-BML19gd4.png",
      link: "/services/education",
    },
    {
      title: "Xcel Global Services - Immigration & Visa Experts",
      description:
        "At Xcel Global Services, we help individuals, families, and businesses achieve their global dreams. With years of expertise in immigration and visa services, we provide tailored solutions that make your journey ab...",
      img: "data:image/png;base64,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", 
      link: "/services/immigration",
    },
    {
      title: "Xcel Global Services - Training",
      description:
        "At Xcel Global Services, we empower students and professionals to achieve their global education dreams with world-class training and higher education guidance. Whether you prefer online flexibility ...",
      img: "https://xcelglobalservices.com.au/assets/TRA4-C_AnpjPd.png",
      link: "/services/training",
    },
  ];

  return (
    <section className="xgs-section py-10 bg-gray-50 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between
                         hover:shadow-xl hover:-translate-y-2 hover:scale-105
                         transform transition duration-300 ease-in-out"
            >
              <div>
                <div className="flex justify-center mb-3">
                  <img
                    src={card.img}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h5 className="text-lg font-semibold mb-2 text-center">
                  {card.title}
                </h5>
                <p className="text-gray-600 text-sm text-justify">{card.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <a
                  href={card.link}
                  className="text-green-600 border border-green-600 px-3 py-1 rounded-md flex items-center gap-1
                             hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-6-6l6 6-6 6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default XgsSection;
