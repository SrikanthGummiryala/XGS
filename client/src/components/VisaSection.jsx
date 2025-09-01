import React from "react";

const visaData = [
  {
    img: "https://storage.googleapis.com/a1aa/image/f9e09e7a-858c-4849-dd13-60f5050235de.jpg",
    title: "Xcel Global Services - PR Visa & Immigration Experts",
    desc: "Dreaming of building a successful career and life abroad? At Xcel Global Services, we specialize in PR Visa, Immigration, and Migration services for top destinations such as Canada, Australia, Germany, and more. With years of expertise, we provide...",
    link: "/services/immigration/pr-visa",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/4cf427e8-2cce-4eb8-06e0-f1b6a92fa20f.jpg",
    title: "Xcel Global Services - Student Visa Experts",
    desc: "At Xcel Global Services, we specialize in Education Consulting, Student Visas, and Career Counseling for top destinations such as Australia, Canada, USA, UK, Germany, and more. With years of expertise, we provide end-to-end guidance.",
    link: "/services/education/student-visa",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/c4adaf1b-fa79-4ed3-5cde-feea270f0090.jpg",
    title: "Xcel Global Services - Tourist Visa Experts",
    desc: "At Xcel Global Services, we help individuals and families achieve their dreams of traveling, working, studying, and settling abroad. Whether you are looking for a Tourist Visa, Immigration Support, or a Permanent Residence.",
    link: "/services/immigration/visit-visa",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/e919ccc2-015a-4e8a-cb4a-09ad6988d73c.jpg",
    title: "Xcel Global Services - Business Visa Experts",
    desc: "At Xcel Global Services, we specialize in helping entrepreneurs, investors, and professionals explore global business and residency opportunities. Whether you are planning to expand your business internationally, secure a Business Visa.",
    link: "/services/immigration/business-visa",
  },
];

const VisaSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Visa Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {visaData.map((visa, index) => (
            <div
              key={index}
              className="visa-card rounded-lg bg-white shadow-lg p-6 flex flex-col md:flex-row items-center transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={visa.img}
                alt={visa.title}
                className="w-48 h-48 object-cover rounded mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex flex-col justify-between flex-1">
                <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {visa.title}
                </h5>
                <p className="text-gray-600 text-sm mb-4">{visa.desc}</p>
                <a
                  href={visa.link}
                  className="inline-flex items-center text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
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
    </section>
  );
};

export default VisaSection;
