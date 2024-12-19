import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/readmeIMG.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "ReviewScrapper",
      description: "Scrapes the user reviews from flipkart",
      imgUrl: projImg1,
      link: "https://github.com/AshuChoudharystd/PythonWebscrapper.git",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio webpage",
      imgUrl: projImg2,
      link: "https://github.com/AshuChoudharystd/Personal-Portfolio.git",
    },
    {
      title: "XAI in DRM",
      description: "Enchanced DRM Using XAI",
      imgUrl: projImg3,
      link: "https://github.com/AshuChoudharystd/DTM_project.git",
    },
    {
      title: "OS Simple Shell",
      description: "Created a custom shell based on Linux",
      imgUrl: projImg4,
      link: "https://github.com/AshuChoudharystd/OS_Simple_Shell.git",
    },
    {
      title: "CP Repo",
      description: "Solving CP with expertise in C++",
      imgUrl: projImg5,
      link: "https://github.com/AshuChoudharystd/GDSC_Competetive_coding.git",
    },
    {
      title: "Food Odering App",
      description: "A Full Stack MERN Project ",
      imgUrl: projImg6,
      link: "https://github.com/AshuChoudharystd/Food_Odering_App.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In this section, you'll find a collection of projects that highlight my expertise in Web Development, Machine Learning, and Software Development. Each project showcases my ability to design and build user-friendly web applications, develop mobile apps with seamless functionality, and integrate ML models into real-world solutions. From creating dynamic websites to deploying intelligent systems, my work reflects my passion for problem-solving and continuous learning. Explore my projects to see how I bring ideas to life through code and creativity.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
