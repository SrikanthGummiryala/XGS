import React from "react";

const CardSlider = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
        Our Team
      </h2>

      {/* Scrolling Cards */}
      <div className="flex gap-6 animate-scroll">
        {[...data, ...data].map((d, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center 
                       min-w-[180px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[280px]"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-base sm:text-lg md:text-xl">{d.name}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{d.role}</p>
              <p className="text-xs sm:text-sm text-gray-500">{d.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    name: "Pooja Rawal",
    role: "MARN - 2117645",
    country: "(Australia)",
    img: "/images/pooja.jpg",
  },
  {
    name: "Prativa Rawal",
    role: "Admissions",
    country: "(Australia)",
    img: "/images/prativa.jpg",
  },
  {
    name: "Sanketh",
    role: "Student Counselor",
    country: "(Aus & Sri Lanka)",
    img: "/images/Sanketh.jpg",
  },
  {
    name: "Hasindu",
    role: "Student Counselor",
    country: "(Aus & Sri Lanka)",
    img: "/images/Hasindu.png",
  },
  {
    name: "Arjun Patel",
    role: "Education Consultant",
    country: "(India)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOfBkqYne73e9bArldTgNDq8pqUMBRu2YP3YLen46CQ&s&ec=73068123",
  },
  {
    name: "Emily Davis",
    role: "Client Support",
    country: "(USA)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZMl5kJe0NJ5-T5EFHQJLr2bidCOXhPRFjhhouQP6zA&s&ec=73068123",
  },
  {
    name: "John Smith",
    role: "Visa Consultant",
    country: "(UK)",
    img: "https://thumbs.dreamstime.com/b/taylor-john-smith-los-angeles-ca-june-premiere-hbo-series-sharp-objects-cinerama-dome-166717567.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Immigration Advisor",
    country: "(Canada)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGELbwCXLEjlqE_SwSh9-unX1aYxIn1IuKPg&s",
  },
];

export default CardSlider;
