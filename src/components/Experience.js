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
          className="vertical-timeline-element--work"
          contentStyle={{
            // background: "rgba(255,255,255, 0.1)",
            background: "rgba(0,0,0, 0.1)",
            // backgroundImage: "linear-gradient(#292e49,#395461)",
            border: "solid",
            borderColor: "rgb(255, 255, 255)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "10px solid #fff" }}
          date="2016 - present"
          iconStyle={{ background: "#395461", color: "#fff" }}
          icon={<FaPaintBrush />}
        >
          <h3 className="vertical-timeline-element-title">
            Graphic Designer and Medical Office Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ADC X-Ray and Ultrasound
          </h4>
          <p>
            Design of the company logo, requisitions, business cards, forms, and
            more.
          </p>
        </VerticalTimelineElement>
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
          date="2018 - Expected 2022 "
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
          date="2020 - present "
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
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
