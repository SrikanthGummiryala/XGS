import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SocialSidebar = () => {
  return (
    <div className="container my-4">
      {/* Free Consultation Button */}
      <div className="text-center mb-4">
        <a href="/contact" data-discover="true">
          <button
            type="button"
            className="btn btn-primary px-4 py-2 rounded-pill vertical-align: middle;"
          >
            Free Consultation
          </button>
        </a>
      </div>

      {/* Social Sidebar */}
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/xgsaus"
          className="text-decoration-none text-primary fs-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/xcel_global_australia/"
          className="text-decoration-none text-danger fs-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/xcel-global-australia/"
          className="text-decoration-none text-info fs-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
