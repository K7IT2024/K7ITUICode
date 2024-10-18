import React from "react"; 
import { NavLink } from "react-router-dom"; 

const Navbar = () => {   
  return (     
    <div>       
      <div className="display">         
        <nav           
          className="navbar navbar-expand-lg align-items-center w-100 h-15 z-index-3 mt-0 position-fixed"           
          style={{ backgroundColor: "#f6f4ee" }}         
        >           
          <div className="container-fluid w-100">             
            <div className="collapse navbar-collapse" id="navbarSupportedContent">               
              <NavLink className="navbar-brand" to="/">                 
                <img                   
                  src="../assets/img/logo.png"                   
                  alt="Logo"                   
                  width="80"                   
                  height="50"                   
                  style={{ objectFit: "contain" }}                 
                />               
              </NavLink>               
              <ul className="navbar-nav mx-auto d-flex gap-4">                 
                <li className="nav-item">                   
                  <NavLink                     
                    to="/Aboutus"                     
                    style={({ isActive }) => ({ 
                      fontWeight: isActive ? "bold" : "normal", 
                      color: isActive ? "#007bff" : "black" 
                    })}                   
                  >                     
                    About Us                   
                  </NavLink>                 
                </li>                 
                <li className="nav-item">                   
                  <NavLink                     
                    to="/Industries"                     
                    style={({ isActive }) => ({ 
                      fontWeight: isActive ? "bold" : "normal", 
                      color: isActive ? "#007bff" : "black" 
                    })}                   
                  >                     
                    Industries                   
                  </NavLink>                 
                </li>                 
                <li className="nav-item">                   
                  <NavLink                     
                    to="/Services"                     
                    style={({ isActive }) => ({ 
                      fontWeight: isActive ? "bold" : "normal", 
                      color: isActive ? "#007bff" : "black" 
                    })}                   
                  >                     
                    Services                   
                  </NavLink>                 
                </li>                 
                <li className="nav-item">                   
                  <NavLink                     
                    to="/OurLeadership"                     
                    style={({ isActive }) => ({ 
                      fontWeight: isActive ? "bold" : "normal", 
                      color: isActive ? "#007bff" : "black" 
                    })}                   
                  >                     
                    Our Leadership                   
                  </NavLink>                 
                </li>                 
                <li className="nav-item">                   
                  <NavLink                     
                    to="/TrainingPlacements"                     
                    style={({ isActive }) => ({ 
                      fontWeight: isActive ? "bold" : "normal", 
                      color: isActive ? "#007bff" : "black" 
                    })}                   
                  >                     
                    Training & Placements                   
                  </NavLink>                 
                </li>                 
                <li className="nav-item">                   
                  <NavLink                     
                    to="/Career"                     
                    style={({ isActive }) => ({ 
                      fontWeight: isActive ? "bold" : "normal", 
                      color: isActive ? "#007bff" : "black" 
                    })}                   
                  >                     
                    Contact Us                   
                  </NavLink>                 
                </li>               
              </ul>               
              <form className="d-flex gap-0 text-end justify-content-end align-items-center">                 
                <NavLink                   
                  to="https://www.facebook.com/share/c1pn8nwMo7EcLdLu/?mibextid=qi2Omg"                   
                  className="text-secondary me-xl-4"                                   
                >                   
                  <span className="fa fa-facebook text-info fa-lg"></span>                 
                </NavLink>                 
                <NavLink                   
                  to="https://www.instagram.com/k7infotechpvtltd"                   
                  className="text-secondary me-xl-4"                 
                >                   
                  <span className="fa fa-instagram text-danger fa-lg"></span>                 
                </NavLink>                 
                <NavLink                   
                  to="https://www.linkedin.com/company/k7infotech/"                   
                  className="text-secondary me-xl-4"                 
                >                   
                  <span className="fa fa-linkedin text-success fa-lg"></span>                 
                </NavLink>                 
                <NavLink                   
                  to="https://youtube.com/@k7infotechpvtltd?si=wty7wuwiXmhp564O"                   
                  className="text-secondary me-xl-4"                 
                >                   
                  <span className="fa fa-youtube-play text-danger fa-lg"></span>                 
                </NavLink>                 
                <button type="button" className="btn btn-outline-success text-xs ">                   
                  +91 8068036654{" "}                   
                  <span>                     
                    <i className="fa fa-phone ms-2" aria-hidden="true"></i>                   
                  </span>                 
                </button>               
              </form>             
            </div>           
          </div>         
        </nav>       
      </div>     
    </div>   
  ); 
};  

export default Navbar;
