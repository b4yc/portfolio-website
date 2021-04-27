import "./navbar.css";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const wrapperRef = React.useRef(null);

  function handleClick() {
    const wrapper = wrapperRef.current;
    console.log(wrapper.classList);
    wrapper.classList.toggle("nav-active");
  }

  return (
    <div>
      <nav ref={wrapperRef}>
        <div className="burger" onClick={() => handleClick()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <Link
              activeClass="active"
              className="nav-links-link"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <div className="nav-underline"></div>
          <li>
            <Link
              activeClass="active"
              className="nav-links-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <div className="nav-underline"></div>
          <li>
            <Link
              activeClass="active"
              className="nav-links-link"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <div className="nav-underline"></div>
          <li>
            <Link
              activeClass="active"
              className="nav-links-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <div className="nav-underline"></div>
          <li>
            <Link
              activeClass="active"
              className="nav-links-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <div className="nav-underline"></div>
          <li>
            <Link
              activeClass="active"
              className="nav-links-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <div className="nav-underline"></div>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
