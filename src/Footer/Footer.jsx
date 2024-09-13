import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./cssFiles/Footer.css";
import "./cssFiles/mobile.css";
import "./cssFiles/tablet.css";
import "./cssFiles/pc.css";
import "./cssFiles/footerHigh.css";

// Modal component
function SuccessModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Thank You ❤️</h2>
        <p>
          Your message has been sent successfully. We will get back to you as
          soon as possible.
        </p>
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

function Footer() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5sw3i0o", "template_h7ky7cp", form.current, {
        publicKey: "DCoN_9BgziKQiQ69d",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset(); // Reset the form fields
          setIsModalOpen(true); // Open modal on successful form submission
        },
        (error) => {
          console.log(
            "FAILED...Check the Contact Form emailjs error",
            error.text
          );
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div className="contactForm">
        <div className="contactForm-inside">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contactForm-main-items"
          >
            <div className="contactForm-header">
              <h1>Send Us a Message</h1>
            </div>
            <div>
              <input
                className="contactForm-inputBox"
                type="text"
                required
                name="name"
                placeholder="Your Name"
              />
              <br />
              <input
                className="contactForm-inputBox"
                type="email"
                required
                name="email"
                placeholder="Your Gmail"
              />
              <br />
              <input
                className="contactForm-inputBox"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <br />
              <textarea
                id="contactForm-message-inputBox"
                name="message"
                required
                placeholder="Write Your Message"
              />
              <br />
              <div className="submit-button-div">
                <input
                  id="contactForm-message-submit-button"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
          {isModalOpen && <SuccessModal closeModal={closeModal} />}{" "}
          {/* Conditionally render modal */}
        </div>
      </div>
    </>
  );
}

export default Footer;
