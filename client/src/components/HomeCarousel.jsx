import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for carousel functionality

const HomeCarousel = () => {
  return (
    <section className="home-carousel-section mt-25">
      <div className="container-fluid p-0">
        <div
          id="homeCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Auto slide every 3s
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://xcelglobalservices.com.au/assets/XgsBanner4-BxekDTRz.png"
                className="d-block w-100 banner-img img-fluid"
                alt="Banner 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://xcelglobalservices.com.au/assets/XgsBanner3-BarKEkzj.png"
                className="d-block w-100 banner-img img-fluid"
                alt="Banner 2"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Extra Responsive Styling */}
      <style jsx>{`
        .banner-img {
          max-height: 600px; /* Desktop height */
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .banner-img {
            max-height: 400px; /* Tablet */
          }
        }

        @media (max-width: 576px) {
          .banner-img {
            max-height: 250px; /* Mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default HomeCarousel;
