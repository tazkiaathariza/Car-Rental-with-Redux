import React from 'react';
import iconFacebook from "../img/Image/icon_facebook.svg";
import iconInsta from "../img/Image/icon_instagram.svg";
import iconTwitter from "../img/Image/icon_twitter.svg";
import iconMail from "../img/Image/icon_mail.svg";
import iconTwitch from "../img/Image/icon_twitch.svg";
import logoRental from "../img/Image/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Footer() {
  return (
      <div className="container-fluid mt-5 pt-5 footerCar">
        <footer>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3 footerTitle">Find us</h5>
                <ul className="list-unstyled mb-0 footerDesc">
                  <li className="mb-1">
                    <a>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</a>
                  </li>
                  <li className="mb-1">
                    <a>binarcarrental@gmail.com</a>
                  </li>
                  <li className="mb-1">
                    <a>081-233-334-808</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3 footerTitle">This web</h5>
                <ul className="list-unstyled mb-0 footerDesc">
                  <li className="mb-1">
                    <a>Our Servirces</a>
                  </li>
                  <li className="mb-1">
                    <a>Why Us</a>
                  </li>
                  <li className="mb-1">
                    <a>Testimonial</a>
                  </li>
                  <li className="mb-1">
                    <a>FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3 footerTitle">Contact with us :</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a><img src={iconFacebook}/> <img src={iconInsta}/>  <img src={iconTwitter}/>  <img src={iconMail}/>  <img src={iconTwitch}/></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3 footerTitle">Copyright Binar 2022</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a><img src={logoRental}/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center p-3 footerEnd">
            Author : Binar Rental and Tazkia Athariza
          </div>
        </footer>
      </div>

  );
};

export default Footer;