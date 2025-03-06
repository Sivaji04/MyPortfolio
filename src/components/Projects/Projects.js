import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/jobby.png";
import chatify from "../../Assets/Projects/ecom.png";
import moodTracker from "../../Assets/Projects/moodtracker.png";
import bitsOfCode from "../../Assets/Projects/nxtwatch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NxTrendz"
              description="A React-based e-commerce application offering a seamless shopping experience with features like user authentication, product catalog, cart management, secure checkout, and order tracking. Designed for speed, responsiveness, and easy navigation."
              ghLink="https://github.com/Sivaji04/Ecommerce-Application"
              demoLink="https://sivajiecomweb.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moodTracker}
              isBlog={false}
              title="Daily Mood Tracker"
              description="A **Daily Mood Tracker** built with **ReactJS**, allowing users to log their moods daily using emojis or text. It features a calendar view, mood analytics, filtering options, and personalized insights. Users can track emotional patterns over time and gain a better understanding of their well-being through visual reports."
              ghLink="https://github.com/Sivaji04/Daily-Mood-Tracker"
              demoLink="https://sivajidailymood.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NxtWatch"
              description="A **YouTube-like application** built with **ReactJS** for video streaming, featuring a responsive UI, real-time search, user authentication, and interactive video playback. It includes functionalities like video uploads, likes, comments, subscriptions, and a personalized recommendation system for an engaging user experience."
              ghLink="https://github.com/Sivaji04/nxtWatch"
              demoLink="https://sivajiecomapp.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Jobby App"
              description="A **Jobby Application** built with **ReactJS** for job seekers and recruiters, featuring a user-friendly interface, real-time job listings, advanced search filters, resume uploads, and application tracking. It includes user authentication, job recommendations, and an employer dashboard for posting and managing job listings."
              ghLink="https://github.com/Sivaji04/Jobby-App"
              demoLink="https://sivajijobbyapp.ccbp.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
