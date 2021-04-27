import "./home.css";
import Typist from "react-typist";
import Typed from "react-typed";
import ProfileImg from "../images/smile.png";
import { FontAwesome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Particles from "react-particles-js";
import particlesConfig from "..//config/particlesConfig";

const Home = () => {
  return (
    <div className="home-section" id="home">
      {/* <div style={{ position: "absolute" }}>
        <Particles height="100vh" width="70vw" params={particlesConfig} />
      </div> */}
      <div style={{ marginTop: "100px" }}>
        <img src={ProfileImg} width="150"></img>
        <h1>Baylee Cheung</h1>
        <p>
          I'm a{" "}
          <Typed
            strings={["Software Developer ", "Creative Student"]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </p>
        <a
          href="https://ca.linkedin.com/in/bayleec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" size="20" />
        </a>
        <a
          href="https://github.com/b4yc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" size="20" />
        </a>
      </div>
      <div className="scroll-footer">
        <p>Get to Know Me!</p>
        <Link
          activeClass="active"
          className="icon"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FaChevronDown className="icon" size="20" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
