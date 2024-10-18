import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="display-mob">
      <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-fixed shadow fixed-top start-0 end-0">
        <div className="container-fluid px-0">
          <NavLink
            className="navbar-brand font-weight-bolder ms-sm-3 d-block d-md-none"
            to="/"
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
          >
            <img
              src="../assets/img/logo.png"
              alt="Logo"
              width="60"
              height="40"
              style={{ objectFit: "contain" }}
            />
          </NavLink>
          <button
            className="navbar-toggler shadow-none ms-md-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-auto">
              {[
                { to: "/MobileAboutUs", icon: "ri-group-line", label: "About Us" },
                { to: "/MobileIndustries", icon: "ri-community-line", label: "Industries" },
                { to: "/MobileServices", icon: "ri-server-line", label: "Services" },
                { to: "/MobileOurLeadership", icon: "ri-insert-row-top", label: "Our Leadership" },
                { to: "/MobileTrainingPlacements", icon: "ri-presentation-line", label: "Training & Placements" },
                { to: "/MobileCareer", icon: "ri-graduation-cap-line", label: "Career" },
              ].map(({ to, icon, label }) => (
                <li className="nav-item dropdown dropdown-hover mx-2" key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `nav-link ps-2 d-flex cursor-pointer align-items-center ${
                        isActive ? "text-primary" : "text-black"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <i
                          className={`${icon} me-2 text-md ${
                            isActive ? "text-primary" : "opacity-6"
                          }`}
                        ></i>
                        {label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
