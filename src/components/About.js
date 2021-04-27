import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

AOS.init();

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <div data-aos="zoom-in">
        <div className="message-box">
          Hello! My name is Baylee Cheung and I am currently a third year
          Software Engineering student pursuing a minor in Biomedical
          Engineering. I am a driven student at the University of Calgary
          aspiring to make a positive impact in this world through technology.
        </div>
      </div>
    </div>
  );
};
export default About;
