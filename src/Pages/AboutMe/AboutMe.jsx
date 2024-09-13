import React from "react";

// all imges
import logo from "./images/my_photo_1.jpg";
import frontEnd from "./images/mern_stack_icons/file.png";
import gitLogo from "./images/mern_stack_icons/git.png";
import githubLogo from "./images/mern_stack_icons/github.png";
import mernStack from "./images/mern_stack_icons/mern-stack-development.png";
import gitGithub from "./images/mern_stack_icons/git_&_github.png";
import responsiveMernLogo from "./images/mern_stack_icons/What_is_the_MERN_stack_and_how_do_I_use_it.jpg";
import wordpressLogo from "./images/mern_stack_icons/wordpress-logo-removebg-preview.png";
import wordpressLogo1 from "./images/mern_stack_icons/wordpress-logo1.png"

// All CSS Files
import "./cssFiles/aboutme.css";
import "./cssFiles/mobaile.css";
import "./cssFiles/pc.css";
import "./cssFiles/tablate.css";
import "./cssFiles/laptop.css";

function AboutMe() {
  return (
    <div className="aboutme-page-all-divs">
      <div className="aboutme-page-name-and-adress-aria">
        <div className="MeinPhoto-aboutMePage">
          <img className="aboutMe-MeinPhoto " src={logo} alt="Logo" />
        </div>
        <div className="Name-Aria-AboutMePage">
          <h1>
            Name: <span>Golam Rabbani</span>
          </h1>
          <h2>
            Profession: <span>Web Developer,</span>
          </h2>
          <h2>
            Nationality: <span> Bangladeshi,</span>
          </h2>
          <h2>
            Education: <span>Bachelor’s in CSE,</span>
          </h2>
          <h2>
            Age: <span>21</span>
          </h2>
        </div>

        <div className="importent-skill-in-dev">
          <h3>My Most Important Skill !</h3>
          <p>
            My most important skill is my readiness to learn any technology
            related to software development, combined with a commitment to
            continuous learning to stay updated with the latest trends and
            technologies in the field.
          </p>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}

      <div className="skills-and-technology">
        <div className="skill-box skils-box1-content">
          <h1>Frontend Technologies I've Learned :</h1>
          <p>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Bootstrap</span>
            <span>Tailwind CSS</span>
          </p>
          <h2>
            Version Control: <span>Git</span>
          </h2>

          <div className="html-css-js-gihub-logo">
            <div className="html-js-div">
              <img src={frontEnd} alt="" />
            </div>
            <div className="git-github-logo">
              <img id="git-img" src={gitLogo} alt="git" />
              <img id="github-img" src={githubLogo} alt="git" />
              <img id="gitGithub" src={gitGithub} alt="" />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="skill-box skils-box2-content">
          <h1>Backend Development</h1>
          <h3>
            Currently learning full-stack web development using the{" "}
            <span>MERN stack</span>.
          </h3>
          <div className="mern-img-div">
            <img id="mernimg1" src={mernStack} alt="mernStack Logo" />
            <img id="mernimg2" src={responsiveMernLogo} alt="mernStack Logo" />
          </div>
        </div>

        {/*  */}

        <div className="skill-box skils-box3-content">
          <h1>Wordpress Development</h1>
          <h3>
            As a WordPress developer, I specialize in building custom,
            responsive websites tailored to client needs, leveraging themes,
            plugins, and custom coding for functionality and design. I also
            provide ongoing support, ensuring smooth site performance and
            updates..{" "}
          </h3>
          <div className="mern-img-div">
            {/* <img id="mernimg1" src={wordpressLogo} alt="mernStack Logo" /> */}
            <img id="mernimg1" src={wordpressLogo1} alt="Wordpress Logo" />
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/*  */}

      <div className="pra-aoutPage">
        <h1>About Me</h1>
        <p>
          I am Golam Rabbani, a dedicated and enthusiastic Front-End Web
          Developer. I have a passion for creating websites that not only look
          stunning but are also user-friendly. My expertise lies in HTML, CSS,
          and JavaScript, and I enjoy working with modern development tools like
          React to build dynamic and interactive web experiences. I prioritize
          writing clean, efficient code and always focus on responsive design.
          This ensures that the websites I create function flawlessly on all
          devices, from desktop computers to smartphones and tablets. My goal is
          to create seamless digital experiences that meet the needs of users
          and clients alike. I believe in the power of collaboration and
          communication, and I am always eager to work closely with clients to
          bring their visions to life. Whether you have a specific idea in mind
          or need help developing a concept from scratch, I am here to help turn
          your ideas into reality. Lets connect and create something amazing
          together! 🤝
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
