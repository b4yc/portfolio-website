import "./skills.css";
import { FontAwesome } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import React, { useState } from "react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [moreLess, setMoreLess] = useState("View More");
  const onClick = () => {
    setShowSkills(!showSkills);
    if (moreLess == "View More") {
      setMoreLess("View Less");
    } else setMoreLess("View More");
  };

  function SkillList() {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        data-aos="fade-in"
      >
        <div style={{ width: "30%" }}>
          <p className="skill-category">Languages</p>
          <ul className="skill-list">
            <li>C / C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>SQL</li>
            <li>Assembly</li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>
          <p className="skill-category">Tools and Frameworks</p>
          <ul className="skill-list">
            <li>React</li>
            <li>Ionic-React</li>
            <li>Git + Github</li>
            <li>Bash</li>
            <li>Kanban + SCRUM</li>
            <li>
              Adobe Suite including:
              <ul>
                <li>Photoshop</li>
              </ul>
              <ul>
                <li>Illustrator</li>
              </ul>
              <ul>
                <li>InDesign</li>
              </ul>
              <ul>
                <li>XD</li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>
          <p className="skill-category">Concepts</p>
          <ul className="skill-list">
            <li>Object Oriented Programming</li>
            <li>Server/Client Architecture</li>
            <li>Data Structures and Algorithms</li>
            <li>Networking Principles + HTTP</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skills-box" data-aos="fade-right">
          <FaPenNib size="50" />
          <h2>UI/UX Design</h2>
          <p>
            Rapid prototyping using design tools including Adobe Suite and Figma
          </p>
        </div>
        <div className="skills-box" data-aos="fade-left">
          <FaLaptopCode size="50" />
          <h2>Full Stack Development</h2>
          <p>
            Programming both front-end and back-end projects in a variety of
            languages
          </p>
        </div>
      </div>

      {showSkills ? <SkillList /> : null}
      <button onClick={onClick}>{moreLess}</button>
    </div>
  );
};

export default Skills;
