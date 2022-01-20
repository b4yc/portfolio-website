import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesome } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgba(0,0,0, 0.1)",
            border: "solid",
            borderColor: "rgb(255, 255, 255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #fff" }}
          iconStyle={{ background: "#395461", color: "#fff" }}
          date="2018 - Expected 2023"
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Calgary
          </h4>
          <p>Minor in Biomedical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0,0,0, 0.1)",
            border: "solid",
            borderColor: "rgb(255, 255, 255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #fff" }}
          iconStyle={{ background: "#395461", color: "#fff" }}
          date="2019 - present "
          icon={<FaTabletAlt />}
        >
          <h3 className="vertical-timeline-element-title">UI Team Lead</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Relectric Car Team
          </h4>
          <p>Front end development and user experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0,0,0, 0.1)",
            border: "solid",
            borderColor: "rgb(255, 255, 255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #fff" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="May 2021 - Aug 2021"
          iconStyle={{ background: "#395461", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            RemBRAINdt Technologies
          </h4>
          <p>
            A startup that uses BCI technology to generate live art based on
            emotional state.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0,0,0, 0.1)",
            border: "solid",
            borderColor: "rgb(255, 255, 255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #fff" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="Sept 2021 - Apr 2022 "
          iconStyle={{ background: "#395461", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">RBC</h4>
          <p>
            A startup that uses BCI technology to generate live art based on
            emotional state.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
