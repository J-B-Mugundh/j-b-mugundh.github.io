import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";



export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/Next-Gen-Security_Enhanced-DDoS-Attack-Detection-for-Autonomous-Vehicles-in-6G-Networks" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Next-Gen Security: Enhanced DDoS Attack Detection for AVs in 6G Networks</h3>
              <p>
              This research proposed an Advanced DDoS Attack Detection System using a Hybrid Detection Model (HDM) and Continuous Learning Model (CLM) for dynamic adaptation to evolving attack patterns.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, Machine Learning, SUMO</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/Integrated-Assistive-System-For-Object-Detection-And-Blind-Navigation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Integrated Assistive System For Object Detection And Blind Navigation</h3>
              <p>
              Integrated assistive system combining advanced object detection and blind navigation, designed to enhance accessibility for individuals with visual impairments.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, OpenCV, Yolo, Raspberry Pi</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/File-Locking-Mechanism-Using-Facial-Recognition" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>FileCoffer - File Locking Mechanism Using Facial Recognition</h3>
              <p>
              An innovative approach to enhance file protection and deception detection mechanisms using face recognition technology within the Windows operating system.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, OpenCV, Machine Vision, OS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/PrivacyOps" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>PrivacyOps: Empowered by Privacy, Supported by Law</h3>
              <p>
              This innovative project, "PrivacyOps," tackles the challenge of data security and privacy head-on. Designed specifically for the Karnataka State Police Datathon, PrivacyOps empowers officers with a suite of powerful tools.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Web3, Solidity, React.js, Gemini, Tensorflow, Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/Detoxify" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Detoxify: Empowering Youth Against Drug Addiction with AI</h3>
              <p>
              Detoxify is an innovative Drug Mitigation App developed for the Haryana Police Hackathon - Reinventing Youth Communication Hackathon!
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Figma, Python, Gemini, Flutter</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/E-Commerce-Website" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-Commerce Website</h3>
              <p>
              A basic E-Commerce application for seamless online shopping experiences and integrated with Stripe payment for secure and convenient transactions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js, React.js, Node.js, and MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/j-b-mugundh.github.io" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Personal Potrfolio</h3>
              <p>
              This website serves as a showcase of my skills, projects, and experiences in the field of Computer Science.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React, Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/J-B-Mugundh/E-MEDICAL-SERVICE-PLATFORM" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-Medical Service Platform</h3>
              <p>
              An impactful E-Medical Services Platform specifically designed to provide essential healthcare services during pandemic times.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML, CSS, JavaScript, Bootstrap, PHP, MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
       

      </div>
    </Container>
  );
}