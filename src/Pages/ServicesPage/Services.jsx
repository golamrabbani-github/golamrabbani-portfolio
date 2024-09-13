import React from "react";
import { Link } from "react-router-dom";

// All Css Files From ww
import "./cssFiles/services.css";
import "./cssFiles/mobaile.css";
import "./cssFiles/tablate.css";
import "./cssFiles/pc.css";

function Services() {
  return (
    <div className="All-dev-ServicesPage">
      <div className="para11">
        <p className="Paragraph-of-Services-page">
          <span className="Top-Titale-of-ServicesPage">
            AS A WEB DEVELOPER 🧑‍💻
          </span>
          <span className="wordpress-experience">
            AS A FRONT-END WEB DEVELOPER 👨‍💻
          </span>{" "}
          <br />
          I create attractive and responsive websites using React. <br />
          These websites are designed to look good and work seamlessly across
          all devices, including mobile phones, tablets, PCs, and laptops.
          📱💻🖥️ With a strong foundation in HTML, CSS, and JavaScript, <br />
          my goal is to transform innovative ideas into functional and
          user-friendly digital experiences. I am committed to delivering
          high-quality work that meets client needs and exceeds expectations.
          <br />
          <br />
          <span className="wordpress-experience">
            {" "}
            WORDPRESS EXPERIENCE 🌐{" "}
          </span>
          <br />
          In addition to my frontend development skills, I have expertise in
          building dynamic and customizable websites using WordPress. I can
          create user-friendly WordPress sites tailored to your specific needs,
          ensuring an easy-to-manage and visually appealing online presence.
          <br />
          <br />
          Whether you need a sleek landing page, a complex web application, or
          anything in between, I am here to bring your vision to life with
          professionalism and precision.
          <br />
          Let's work together to build a great website for you! 🤝
          <br />
          <br />
          <Link
            to="/contact"
            className="heroContactBtn-ServicesPage"
            id="idHeroContactBtn"
          >
            Contact
          </Link>
        </p>
      </div>

      {/*  */}

      <div className="why-you-need-me">
        <div className="div-of-what-can-build">
          <h1 className="what-can-build">Frontend Services 🧑‍💻</h1>
        </div>

        <div className="all-services-divbox">
          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Personal Websites : </span>
            <br />
            For showcasing work and projects, sharing experiences, expertise,
            and thoughts, <br />
            For Exampole: Portfolio, Online Resume,
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">
              Educational Websites :
            </span>
            <br />
            School/University Websites, Educational Blogs, E-learning Platforms,
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Nonprofit Websites :</span>
            <br />
            <span>Charity Websites, </span>
            <span>Fundraising Platforms, </span>
            <span>Community Organization Sites.</span>
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Portfolio Galleries :</span>
            <br />
            For artists, photographers, and designers to showcase their work.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Business Websites :</span>
            <br />
            For promoting businesses and services. and For marketing campaigns,
            Product Launch Pages, Marketing Campaign Pages, Event Sites: For
            promoting and managing events.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">
              " Front-End Collaboration Offer " :{" "}
            </span>
            <br />" I can be a part of your major projects, helping you build
            and enhance the front-end of your website or application with clean,
            responsive, and user-friendly designs. Let's work together to bring
            your vision to life! "
          </div>
        </div>
      </div>

      {/*  */}

      <div className="why-you-need-me">
        <div className="div-of-what-can-build">
          <h1 className="what-can-build">WordPress Services 🧑‍💻</h1>
        </div>

        <div className="all-services-divbox">
          <div className="Personal-Websites">
            <span className="Personal-Websites-box">
              WooCommerce Websites :{" "}
            </span>
            <br />I can build a fully functional eCommerce website for your
            business with all the necessary features, such as product pages,
            shopping carts, payment gateways, and inventory management to help
            you sell your products online effectively.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Business Websites :</span>
            <br />
            Build a professional website for your business, complete with
            service pages, contact forms, and lead generation functionalities.
            Whether you’re looking to promote services or products, WordPress is
            a flexible and cost-effective solution.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Blogging Websites :</span>
            <br />
            Create a professional blogging website with powerful built-in
            features for publishing articles, managing content, and engaging
            with readers. WordPress offers various customization options to suit
            your style and needs.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Portfolio Websites :</span>
            <br />
            Design a sleek portfolio website to showcase your work, whether
            you’re a Student, researcher, designer, photographer, or freelancer.
            With WordPress, you can easily display your projects and customize
            your site to reflect your unique Expertise.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">Landing Page :</span>
            <br />
            For promoting businesses and services. and For marketing campaigns,
            Product Launch Pages, Marketing Campaign Pages, Event Sites: For
            promoting and managing events.
          </div>

          <div className="Personal-Websites">
            <span className="Personal-Websites-box">
              News & Magazine Websites :
            </span>
            <br />
            For news outlets and online magazines, I can create a dynamic
            website with optimized site speed, search engine visibility, and the
            ability to manage large volumes of content efficiently.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
