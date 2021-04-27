import Experience from "./Experience";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Page = () => {
  return (
    <div className="main">
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <p></p>
    </div>
  );
};

export default Page;
