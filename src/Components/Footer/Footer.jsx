import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="display">
      <div class="position-relative mt-3">
        <div class="container">
          <div class="card bg-gradient-dark z-index-2">
            <div class="card-body">
              <div class="row">
                <div class="col-md-8 mx-auto text-center my-auto">
                  <h3 class="text-white">K7iT</h3>
                  <p class="text-white opacity-8 px-7">
                    Please call us or email to us for any queries and our team
                    at K7 Infotech will evaluate your queries and revert back
                    appropriately
                  </p>
                </div>
              </div>
              <div className="row d-flex justify-content-center text-center align-items-center">
              <div className="col-lg-4">
  <a
    href="https://www.google.com/maps/place/258,+3rd+cross,+Jayanthi+Nagar+Ext,+Horamavu,+Bangalore+Pin+code+-560043/@13.0279834,77.668044,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11339ddb83d1:0x938eceb3dbb15991!8m2!3d13.0279834!4d77.670232!16s%2Fg%2F11hys4th7c?entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="p-3 info-horizontal d-flex align-items-center">
      <div class="icon icon-md icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
      </div>
      <div class="description ps-3">
         <p class="mb-0 text-white">
        New Branch (Channasandra, Kalkere Branch) : Door: 268, Site: 15,<br/>
         Near Arthala Nilayam, Near Rampura  <br/>
         Lake, Kalkeri Channasandra village,<br />
         
          Bangalore Pin code -560043
        </p>
      </div>
     
    </div>
  </a>
</div>

                <div className="col-lg-3">
                  <div class="p-3 info-horizontal d-flex align-items-center">
                    <div class="icon icon-md icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      
                    </div>
                    <div class="description ps-3">
                      <p class="mb-0 text-white">+91 8068036654</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div class="p-3 info-horizontal d-flex align-items-center">
                    <div class="icon icon-md icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      
                    </div>
                    <div class="description ps-3">
                      <p class="mb-0 text-white">careers@k7itech.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer pb-5 pt-8 bg-light mt-n5 position-relative">
        <div class="container align-items-center">
          <div class="row">
          <div class="col-lg-2">
            <img
                  src="../assets/img/logo.png"
                  alt="logo"
                  width="150"
                  height="30"
                  style={{ objectFit: "contain" }}
                />
            </div>
            
            <div class="col-lg-7 text-center">
              
              <ul class="nav flex-row align-items-center mb-5 mt-sm-0 justify-content-center">
                <li class="nav-item">
                  <Link class="nav-link" to="/Aboutus">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Industries">
                    Industries
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/Services">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/OurLeadership">
                    Our Leadership
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/TrainingPlacements">
                    Training & Placements
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Career">
                    Career
                  </Link>
                </li>
              </ul>
              <p class="mb-0">
                Copyright ©{" "}2024
                <script>document.write(new Date().getFullYear())</script> K7IT
              </p>
            </div>
            <div class="col-lg-3 text-end">
              <a
                href="https://www.facebook.com/share/c1pn8nwMo7EcLdLu/?mibextid=qi2Omg"
                class="text-secondary me-xl-4"
              >
                <span class="fa fa-facebook text-info fa-lg"></span>
              </a>
              <a
                href="https://www.instagram.com/k7infotechpvtltd"
                class="text-secondary me-xl-4"
              >
                <span class="fa fa-instagram  text-danger fa-lg"></span>
              </a>
              <a
                href="https://www.linkedin.com/company/k7infotech/"
                class="text-secondary me-xl-4"
              >
                <span class="fa fa-linkedin text-success fa-lg"></span>
              </a>
              <a
                href="https://youtube.com/@k7infotechpvtltd?si=wty7wuwiXmhp564O"
                class="text-secondary me-xl-4"
              >
                <span class="fa fa-youtube-play  text-danger fa-lg"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-fullscreen modal-dialog modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2491.3851387655654!2d77.66804407455253!3d13.02798336994981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11339ddb83d1%3A0x938eceb3dbb15991!2sK7%20Infotech!5e0!3m2!1sen!2sin!4v1722593942294!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
