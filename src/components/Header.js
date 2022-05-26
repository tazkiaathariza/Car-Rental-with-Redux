import React from 'react';
import logoRental from "../img/Image/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Header() {
  return (

    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top navbar-light shadow-sm navbarCar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img id="logorental" src={logoRental}/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation"><span><span className="navbar-toggler-icon"/></span>
            </button>
            <div className="offcanvas offcanvas-end justify-content-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasTopLabel">
              <div className="offcanvas-body navbarKonten">
                <a className="nav-link" href="/#section2">
                  <div className="navright">Our Services</div>
                </a>
                <a className="nav-link" href="/#section3">
                  <div className="navright">Why Us</div>
                </a>
                <a className="nav-link" href="/#section4">
                  <div className="navright">Testimonial</div></a>
                <a className="nav-link" href="/#section6">
                  <div className="navright">FAQ</div></a>
                <button type="button" className="btn btn-success">Register</button>
              </div>
            </div>
          </div>
      </nav>
    </div>

  );
};

export default Header;