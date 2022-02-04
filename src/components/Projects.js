import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./projects.css";

// import all images
import RelectricCar from "../images/car.png";
import RelectricClimate from "../images/climate-off.png";
import RelectricNavigation from "../images/navigation.png";
import RelectricHome from "../images/home.png";
import RelectricGif from "../images/ui-infotainment.gif";
import InventoryPortfolio from "../images/rezellers-portfolio.png";
import InventoryInventory from "../images/rezellers-inventory.png";
import InventoryAddItem from "../images/rezellers-additem.png";
import WebsiteHome from "../images/website.png";
import RembraindtRed from "../images/rembraindt-red.png";
import RembraindtPurple from "../images/rembraindt-purple.png";
import RembraindtRainbow from "../images/rembraindt-rainbow.jpg";
import Spacestagram from "../images/spacestagram.png";
import SpacestagramVideo from "../images/spacestagram.gif";
import NearfundingHome from "../images/nearfunding-home.png";
import NearfundingAdd from "../images/nearfunding-add.png";
import NearfundingProfile from "../images/nearfunding-profile.png";

const Projects = () => {
  const [relectricIsOpen, setRelectricIsOpen] = useState(false);
  const [rembraindtIsOpen, setRembraindtIsOpen] = useState(false);
  const [websiteIsOpen, setWebsiteIsOpen] = useState(false);
  const [inventoryIsOpen, setInventoryIsOpen] = useState(false);
  const [spacestagramIsOpen, setSpacestagramIsOpen] = useState(false);
  const [nearfundingIsOpen, setNearfundingIsOpen] = useState(false);

  const customStyles = {
    content: {
      background: "rgba(255,255,255, 0.4)",
      width: "50%",
      height: "75%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      WebkitBackdropFilter: "blur(20px)",
      backdropFilter: "blur(20px)",
      border: "none",
      overflow: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  const slideshowProperties = {
    duration: 30000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    // scale: 0.4,
    arrows: true,
  };

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        <div
          className="project-preview"
          onClick={() => setSpacestagramIsOpen(true)}
        >
          <img src={Spacestagram}></img>
          Spacestagram
        </div>
        <Modal
          isOpen={spacestagramIsOpen}
          onRequestClose={() => {
            setSpacestagramIsOpen(false);
          }}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <div className="slide-container project-slideshow">
            <Fade {...slideshowProperties}>
              <div className="each-fade">
                <img src={SpacestagramVideo} />
              </div>
            </Fade>
          </div>
          <div>
            A project that's out of this world! Spacestagram is a front-end
            application that consumes NASA's API to retrieve their photos of the
            day. You can infinitely browse through photos, read the background
            about it, "like" your favourite images to add it to your collection,
            and share the images with friends! Need to take a coffee break from
            scrolling through space? Go ahead, this application utilizes browser
            caching to save your favourite images even if you leave the page.
          </div>
          <div className="button-container">
            <a
              href="https://b4yc.github.io/spacestagram/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Visit the Deployed Project
            </a>
            <a
              href="https://github.com/b4yc/spacestagram"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              View the source on Github
            </a>
          </div>
        </Modal>
        <div
          className="project-preview"
          onClick={() => setNearfundingIsOpen(true)}
        >
          <img src={NearfundingHome}></img>
          Blockchain Crowdfunding
        </div>
        <Modal
          isOpen={nearfundingIsOpen}
          onRequestClose={() => {
            setNearfundingIsOpen(false);
          }}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <div className="slide-container project-slideshow">
            <Fade {...slideshowProperties}>
              <div className="each-fade">
                <img src={NearfundingHome} />
              </div>
              <div className="each-fade">
                <img src={NearfundingProfile} />
              </div>
              <div className="each-fade">
                <img src={NearfundingAdd} />
              </div>
            </Fade>
          </div>
          <div>
            Developed a full stack crowdfunding application built on the NEAR
            block-chain protocol, find out more
            <a href="https://near.org/"> here</a>! Developed and deployed smart
            contracts written in AssemblyScript to allow linking of wallets to
            the application and securely transfer NEAR coins between wallets. I
            also designed and developed the front-end application using
            Bootstrap to allow for browsing and creation of fundraisers
          </div>
          <div className="button-container">
            <a
              href="https://github.com/b4yc/nearfunding"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              View the source on Github
            </a>
          </div>
        </Modal>
        <div
          className="project-preview"
          onClick={() => setRelectricIsOpen(true)}
        >
          <img src={RelectricCar}></img>
          Relectric Car Team
        </div>
        <Modal
          isOpen={relectricIsOpen}
          onRequestClose={() => {
            setRelectricIsOpen(false);
          }}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <div className="slide-container project-slideshow">
            <Fade {...slideshowProperties}>
              <div className="each-fade ">
                <img src={RelectricGif} />
              </div>
              <div className="each-fade">
                <img src={RelectricClimate} />
              </div>
              <div className="each-fade">
                <img src={RelectricCar} />
              </div>
              <div className="each-fade">
                <img src={RelectricNavigation} />
              </div>
            </Fade>
          </div>
          <div>
            At our team at Relectric, we are dedicated to accelerating the
            advancement of sustainable transport, while making this technology
            more accessible. At this team, I am the User Interface lead and I
            lead a group into creating a fully functioning user interface to
            implement into the car. This includes both the dashboard system and
            the infotainment system. Our UI is bootstrapped using the
            Ionic-React framework. The infotainment boasts a snappy and
            responsive touchscreen UI, and the dashboard displays all the vital
            information of the car.
          </div>
          <div className="button-container">
            <a
              href="https://teamrelectric.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Team Relectric Website
            </a>
            <a
              href="https://github.com/relectric-car-team/user-interface"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              View Our Project on Github
            </a>
          </div>
        </Modal>
        <div
          className="project-preview"
          onClick={() => setRembraindtIsOpen(true)}
        >
          <img src={RembraindtRainbow}></img>
          Generative Art
        </div>
        <Modal
          isOpen={rembraindtIsOpen}
          onRequestClose={() => {
            setRembraindtIsOpen(false);
          }}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <div className="modal-content">
            <div className="slide-container project-slideshow">
              <Fade {...slideshowProperties}>
                <div className="each-fade ">
                  <img src={RembraindtRainbow} />
                </div>
                <div className="each-fade">
                  <img src={RembraindtPurple} />
                </div>
                <div className="each-fade">
                  <img src={RembraindtRed} />
                </div>
              </Fade>
            </div>

            <div style={{ marginTop: "5%" }}>
              From its roots as the NeuroNexus 2020 hackathon first place
              winner, to a new tech start-up, I worked at RemBRAINdt as a full
              stack software developer. We work with BCI technology to create
              dynamic generative art based on the user's emotional state. The
              emotional state is determined using extensive machine learning
              from a baseline test of the user's emotional data. The backend
              relies on Google Cloud Platform and Firebase, and the front-end is
              a web application using Javascript, React, and Node.js.
            </div>
            <div className="button-container">
              <a
                href="https://rembraindt.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                View the RemBRAINdt Website
              </a>
            </div>
          </div>
        </Modal>
        <div
          className="project-preview"
          onClick={() => setInventoryIsOpen(true)}
        >
          <img src={InventoryPortfolio} alt="inventory portfolio"></img>
          Inventory Tracking
        </div>
        <Modal
          isOpen={inventoryIsOpen}
          onRequestClose={() => {
            setInventoryIsOpen(false);
          }}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <div className="slide-container project-slideshow">
            <Fade {...slideshowProperties}>
              <div className="each-fade">
                <div>
                  <img src={InventoryPortfolio} />
                </div>
              </div>
              <div className="each-fade">
                <div>
                  <img src={InventoryInventory} />
                </div>
              </div>
              <div className="each-fade">
                <div>
                  <img src={InventoryAddItem} />
                </div>
              </div>
            </Fade>
          </div>
          <div>
            This project was made for resellers to keep track of their inventory
            and profits. I worked with two other developers to make a fully
            functioning project with a dynamic database. The database is a MySQL
            database, and we used the backend framework Django Python to make
            API calls. The front-end is bootstrapped using Ionic-React. This
            project includes fully functioning login and register methods,
            inventory viewing/updating, and a nice customizable graph for
            viewing profits.
          </div>
          <div className="button-container">
            <a
              href="https://github.com/b4yc/reseller-app"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              View this Project on Github
            </a>
          </div>
        </Modal>
        <div className="project-preview" onClick={() => setWebsiteIsOpen(true)}>
          <img src={WebsiteHome}></img>
          Personal Website
        </div>
        <Modal
          isOpen={websiteIsOpen}
          onRequestClose={() => {
            setWebsiteIsOpen(false);
          }}
          style={customStyles}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <div className="modal-content">
            <div className="project-slideshow">
              <img src={WebsiteHome} />
            </div>

            <div style={{ marginTop: "5%" }}>
              This website is bootstrapped by create-react-app and I developed
              it using Javascript, HTML/CSS, and a few React frameworks. This is
              a personal project to act as a personal portfolio that showcases
              my skills, experience, and recent works. I took the initiative to
              create my own website to improve my web development skills, by
              using a variety of modern tools. This website also showcases my
              design and implementation skills. On top of front end static
              development, I also utilize back-end tools to make the contact
              form at the bottom of this page fully functional.
            </div>
            <div className="button-container">
              <a
                href="https://github.com/b4yc/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                View this Website on Github
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
