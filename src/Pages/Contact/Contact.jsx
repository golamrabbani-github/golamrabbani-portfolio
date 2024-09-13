import React from "react";

// All CSS Files
import "./cssFiles/contact.css";
import "./cssFiles/mobaile.css";
import "./cssFiles/tablate.css";
import "./cssFiles/pc.css";

// All Images Files
import logo from "./images/grimage1122e.png";
import FreelanceTop from "./images/FreelancerTop.png";
import RemotTop from "./images/RemoteTop.png";
import OfficeTop from "./images/OfficeTop.png";
import BlueTick from "./images/BlueTick.png";

// All Font Awosam icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact-main-div">
      <div className="contact-page">
        <h1 className="contact-Info-Text">CONTACT INFO</h1>
        <p className="Talk-About-Work">Let's Talk About Work</p>
      </div>
      <div>
        <div className="contactINFO ">
          <div className="contactPage-Img-Name-socialIcons-Aria">
            <div className="bg-of-img-address-socialIcons-contactPage">
              <div className="contactPage-Img-Name-Aria ">
                <img className="ContactPageImg " src={logo} alt="Logo" />
              </div>

              <div className="contact-location ">
                <h1 className="ContactPage-my-Name">GOLAM RABBANI</h1>

                <p className="ContactPage-my-WorkPossition">
                  Front End Web Developer
                </p>

                <div className="contactpage-address-aria">
                  <a>
                    <FontAwesomeIcon
                      className="Location-icon-contactPage icon-hover"
                      icon={faLocationDot}
                    />
                  </a>

                  <div className="address-contact-page">
                    <h1>Address </h1>
                    <h2> Rongpur, Dhaka, Bangladesh</h2>
                  </div>
                </div>

                <div className="social-midea-icon">
                  <div className="social-midea-text">Social Midea</div>

                  <div className="icon-address-contactPage ">
                    <a href="https://wa.me/qr/V6SRI2RELCNEF1">
                      <FontAwesomeIcon
                        className="icon-hover"
                        icon={faSquareWhatsapp}
                      />
                    </a>

                    <a href="t.me/GolamRabbaniTelegram">
                      <FontAwesomeIcon
                        className="icon-hover"
                        icon={faTelegram}
                      />
                    </a>

                    <a href="https://www.linkedin.com/in/golam-rabbani-linked-in/">
                      <FontAwesomeIcon
                        className="icon-hover"
                        icon={faLinkedin}
                      />
                    </a>

                    <a href="https://x.com/GolamRabbani_GR">
                      <FontAwesomeIcon
                        className="icon-hover"
                        icon={faSquareTwitter}
                      />
                    </a>

                    <a href="https://www.facebook.com/GolamRabbaniBangladesh">
                      <FontAwesomeIcon
                        className="icon-hover"
                        icon={faSquareFacebook}
                      />
                    </a>

                    <a href="mailto:golamrabbani.professional321@gmail.com">
                      <FontAwesomeIcon
                        className="icon-hover"
                        icon={faEnvelope}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            {/*  */}
            {/*  */}

            <div className="available-frelance-remote-offece">
              <h1>AVAILABLE RIGHT NOW</h1>
              <div className="available-dev-2">
                <div className="Available-mode-Boxs">
                  <h2 className="Available-all-h2">
                    Freelance
                    <img
                      src={BlueTick}
                      className="BlueTick-Available-Box"
                      alt="Blue Tick"
                    />
                  </h2>
                  <div className="Icon-3d-dev">
                    <img
                      className="freelance-icon avilable-icons"
                      src={FreelanceTop}
                    />
                  </div>
                </div>

                <div className="Available-mode-Boxs">
                  <h2 className="Available-all-h2">
                    Remote Job
                    <img
                      src={BlueTick}
                      className="BlueTick-Available-Box"
                      alt="Blue Tick"
                    />
                  </h2>

                  <div className="Icon-3d-dev">
                    <img
                      className="remote-icon avilable-icons"
                      src={RemotTop}
                      alt="remote-icon"
                    />
                  </div>
                </div>

                <div className="Available-mode-Boxs">
                  <h2 className="Available-all-h2">
                    Offline Job
                    <img
                      src={BlueTick}
                      className="BlueTick-Available-Box"
                      alt="Blue Tick"
                    />
                  </h2>

                  <div className="Icon-3d-dev">
                    <img
                      className="office-icon  avilable-icons"
                      src={OfficeTop}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}

          <div className="social-midia-info">
            <div className="allBox-social-midia-info">
              <a
                href="https://wa.me/qr/V6SRI2RELCNEF1"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faSquareWhatsapp}
                  />
                </span>
                <div className="address-contact-page">
                  <h1>Whats App </h1>
                  <h2>+88 01306-170232</h2>
                </div>
              </a>
            </div>

            <div className="allBox-social-midia-info">
              <a
                href="https://t.me/GolamRabbaniTelegram"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faTelegram}
                  />
                </span>

                <div className="address-contact-page">
                  <h1> Telegram </h1>
                  <h2>https://t.me/ GolamRabbaniTelegram</h2>
                </div>
              </a>
            </div>

            <div className="allBox-social-midia-info">
              <a
                href="https://www.linkedin.com/in/golam-rabbani-linked-in/"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faLinkedin}
                  />
                </span>

                <div className="address-contact-page">
                  <h1> Linked-in </h1>
                  <h2>https://www.linkedin.com/ in/golam-rabbani-linked-in/</h2>
                </div>
              </a>
            </div>

            <div className="allBox-social-midia-info">
              <a
                href="https://x.com/GolamRabbani_GR"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faSquareTwitter}
                  />
                </span>

                <div className="address-contact-page">
                  <h1> X-Twitter </h1>
                  <h2>https://x.com/GolamRabbani_GR</h2>
                </div>
              </a>
            </div>

            <div className="allBox-social-midia-info">
              <a
                href="https://www.facebook.com/GolamRabbaniBangladesh"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faSquareFacebook}
                  />
                </span>
                <div className="address-contact-page">
                  <h1> Facebook </h1>
                  <h2>https://www.facebook.com/ GolamRabbaniBangladesh</h2>
                </div>
              </a>
            </div>

            <div className="allBox-social-midia-info">
              <a
                href="mailto:golamrabbani.professional321@gmail.com"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faEnvelope}
                  />
                </span>
                <div className="address-contact-page">
                  <h1> Gmail </h1>
                  <h2>golamrabbani.professional321 @gmail.com</h2>
                </div>
              </a>
            </div>

            <div className="allBox-social-midia-info">
              <a
                href="https://github.com/golam-rabbani-github"
                className=" allBox-social-midea-a-tag "
              >
                <span>
                  <FontAwesomeIcon
                    className="box-icons-contactInfo-contactPage"
                    icon={faSquareGithub}
                  />
                </span>
                <div className="address-contact-page">
                  <h1> Github </h1>
                  <h2>https://github.com/ golam-rabbani-github</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
