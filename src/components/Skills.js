import "./skills.css";
import { FontAwesome } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import React, { useState } from "react";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [moreLess, setMoreLess] = useState("VIEW MORE");
  const onClick = () => {
    setShowSkills(!showSkills);
    if (moreLess == "VIEW MORE") {
      setMoreLess("VIEW LESS");
    } else setMoreLess("VIEW MORE");
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
        </div>
        <div style={{ width: "30%" }}>
          <p className="skill-category">Tools and Frameworks</p>
          <ul className="skill-list">
            <li>React</li>
            <li>Ionic-React</li>
            <li>Git + Github</li>
            <li>Bash</li>
            <li>Kanban + SCRUM</li>
          </ul>
        </div>
        <div style={{ width: "30%" }}>
          <p className="skill-category">Concepts</p>
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
      {showSkills && (
        <div className="skills-container">
          <br />
          <div className="skills-box" data-aos="fade-down">
            <h2>Languages and Tools</h2>
            <ul className="skill-list">
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React + Redux</li>
              <li>Angular + NGRX</li>
              <li>C/C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Assembly</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="skills-box" data-aos="fade-down">
            <h2>Concepts</h2>
            <ul className="skill-list">
              <li>Software Testing</li>
              <li>Agile Methodologies</li>
              <li>Object Oriented Programming</li>
              <li>Server/Client Architecture</li>
              <li>Data Structures and Algorithms</li>
              <li>Networking Principles + HTTP</li>
              <li>Rest Frameworks, Rest APIs</li>
              <li>Blockchain Development</li>
            </ul>
          </div>
        </div>
      )}
      <button className="button" onClick={onClick}>
        {moreLess}
      </button>
    </div>
  );
};

export default Skills;
