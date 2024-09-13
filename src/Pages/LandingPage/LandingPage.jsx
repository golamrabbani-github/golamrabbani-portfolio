import React from "react";
import logo from "./imges/my_photo_1.jpg";
import { Link } from "react-router-dom";

// All CSS Files 👉 Landing Page CSS Files✅
import "./cssFiles/home.css";
import "./cssFiles/mobaile.css";
import "./cssFiles/tablate.css";
import "./cssFiles/pc.css";

// Font Awasome
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  return (
    <div>
      <div className="heroAria">
        <div className="heroPhotoAria">
          <div className="bg-myHeroMeinPhoto">
            <img className="myHeroMeinPhoto " src={logo} alt="Logo" />
          </div>

          {/*  Home Page Social Icons */}

          <div className="homepage-social-media-icons">
            <a href="https://wa.me/qr/V6SRI2RELCNEF1">
              <FontAwesomeIcon
                className="homepage-icon"
                icon={faSquareWhatsapp}
              />
            </a>

            <a href="t.me/GolamRabbaniTelegram">
              <FontAwesomeIcon className="homepage-icon" icon={faTelegram} />
            </a>

            <a href="https://www.linkedin.com/in/golam-rabbani-linked-in/">
              <FontAwesomeIcon className="homepage-icon" icon={faLinkedin} />
            </a>

            <a href="https://x.com/GolamRabbani_GR">
              <FontAwesomeIcon
                className="homepage-icon"
                icon={faSquareTwitter}
              />
            </a>

            <a href="https://www.facebook.com/GolamRabbaniBangladesh">
              <FontAwesomeIcon
                className="homepage-icon"
                icon={faSquareFacebook}
              />
            </a>

            <a href="mailto:golamrabbani.professional321@gmail.com">
              <FontAwesomeIcon className="homepage-icon" icon={faEnvelope} />
            </a>
          </div>
        </div>

        {/*  Hero Text Aria */}
        {/*  Hero Text Aria */}
        {/*  Hero Text Aria */}

        <div className="heroTextAria">
          <div className="heroTextAria-M-P">
            <div className="div-of-home-myTopPhoto">
              <img className="myTopPhoto " src={logo} alt="Logo" />
            </div>

            <h3 className="heroHello ">HELLO, MY NAME IS</h3>
            <h1 className="heroMyName ">GOLAM RABBANI</h1>
            <h2 className="HeroIamDeveloper">I AM Web Developer</h2>
            <p className="heroPragraph">
              I am a Front End Web Developer who loves making websites that look
              great and easy to use. I work with HTML, CSS, JavaScript, and
              modern tools like React. I make sure my code is clean and focus on
              responsive design so my designs work well on all devices. Let's
              work together to turn your ideas into reality.
            </p>

            <div className="resume-later-contact">
              <a
                className="heroContactBtn "
                href="https://docs.google.com/document/d/1dK54Nu5dF0w9c09HMxLpcwUfJyk-DDNUMxcyHTTAlv0/edit?usp=sharing"
              >
                Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <a
                className="heroContactBtn "
                href="https://docs.google.com/document/d/1tGzAGOKW2KLoVZb9FN9GZrPEu_jUCXsm1ePSx-4XGk0/edit?usp=sharing"
              >
                Cover Later <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <Link
                className="heroContactBtn "
                id="id-HeroContactBtn"
                to="/contact"
              >
                Contact <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
