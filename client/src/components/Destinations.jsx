import React from "react";

const destinations = [
  {
    name: "USA",
    img: "https://www.shutterstock.com/image-photo/immigration-visa-united-states-america-260nw-2456694351.jpg",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    name: "UK",
    img: "https://media.istockphoto.com/id/471769313/photo/united-kingdom-visa-in-passport.jpg?s=612x612&w=0&k=20&c=er_ZPeJi5O0GOkBAFhWP6TCu0QYsKRAWnmhJZcUx0CE=",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    name: "AUSTRALIA",
    img: "https://www.shutterstock.com/image-photo/tashkent-uzbekistan-13-august-2021-260nw-2026268705.jpg",
    flag: "https://flagcdn.com/au.svg",
  },
  {
    name: "CANADA",
    img: "https://media.istockphoto.com/id/1204690425/photo/canadian-working-visa-in-passport-immigration-to-canada-concept.jpg?s=612x612&w=0&k=20&c=53QL_yxoAR7t-jQ46PGo09kQokOceLo2jKvhQIO-ZwA=",
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    name: "GERMANY",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJEzUeGyRSEY8S9n-Ax-6L94PfRy-L1nhDcUclIXSlQ&s&ec=73068123",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    name: "Ireland",
    img: "https://thumbs.dreamstime.com/b/ireland-visa-passport-usa-immigration-citizens-focusing-word-travel-national-identification-close-up-d-rendering-multi-204151489.jpg",
    flag: "https://cdn.britannica.com/33/1733-131-C0C3C1CF/FLAG-Ireland.jpg?w=200&h=200&c=crop",
  },
  {
    name: "Indonesia",
    img: "https://globalindiannetwork.com/wp-content/uploads/indonesian-business-visa-for-indian.webp",
    flag: "https://static.vecteezy.com/system/resources/previews/015/272/227/non_2x/indonesia-3d-rounded-flag-with-transparent-background-free-png.png",
  },
];

const Destinations = () => {
  return (
    <div className="bg-gray-900 py-10 px-4 sm:px-8 overflow-hidden">
      {/* Centered Heading */}
      <h1 className="text-white font-bold text-2xl sm:text-3xl text-center mb-6">
        Top Destinations
      </h1>

      {/* Scrolling Wrapper */}
      <div className="flex gap-6 animate-scroll">
        {[...destinations, ...destinations].map((d, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 sm:w-56 md:w-64 text-center"
          >
            <div className="relative shadow-lg rounded-2xl overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-40 object-cover rounded-2xl"
              />
              <img
                src={d.flag}
                alt={`${d.name} flag`}
                className="absolute top-2 left-2 w-10 h-10 rounded-full border border-white shadow"
              />
            </div>
            <p className="mt-3 text-base sm:text-lg font-semibold text-white">
              {d.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
