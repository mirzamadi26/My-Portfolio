import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// ... (Your imports remain the same)
import affiliateChatBox from "../../Assets/Projects/Affiliate_Chat_Box.png";
import tazwedco from "../../Assets/Projects/Tazwedco.png";
import Up4Grabs from "../../Assets/Projects/Up4Grabs.png";
import SkillzMember from "../../Assets/Projects/Skillz-Member.png";
import SkillzProvider from "../../Assets/Projects/Skillz-Provider.png";
import wod from "../../Assets/Projects/wod.png";
import neurobridge from "../../Assets/Projects/neurobridge.png";
import makanai from "../../Assets/Projects/makanai.png";

function Projects() {
  return (
    // Updated: Added a custom class for potential background gradient/color
    <Container fluid className="project-section custom-bg"> 
      <Particle />
      <Container>
        {/* Updated: Added an emoji for visual appeal */}
        <h1 className="project-heading">
          💻 My Recent <strong className="purple">Works </strong>
        </h1>
        {/* Updated: Slightly more descriptive text */}
        <p style={{ color: "rgb(180, 180, 180)", fontSize: "1.2em", marginBottom: "40px" }}>
          Explore a collection of mobile applications and platforms I've recently developed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Project 1: Affiliate Chat Box */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[affiliateChatBox]}
              title="Affiliate Chat Box"
              description="A platform for affiliates to share possible business opportunities. This online community connects industry experts and merchants for networking on CPL, CPS, CPM, CPA, and PAY PER CALL models."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.project.omd&hl=en"
              appStoreLink=""
            />
          </Col>

          {/* Project 2: Tazwedco */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[tazwedco]}
              isBlog={false}
              title="Tazwedco"
              description="Connects wholesale companies directly to customers. Find the best wholesalers, add products to your cart, place orders, and track deliveries efficiently."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.yaaks.tazwedcom&hl=en"
              appStoreLink="https://apps.apple.com/pk/app/tazwedco/id6479000822"
            />
          </Col>

          {/* Project 3: Up4Grabs */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Up4Grabs]}
              title="Up4Grabs"
              description="The first free, immediate job posting app connecting users directly with local landscaping and handyman pros. Post jobs, set prices, and get fast bids for affordable services."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.upfourgrab&fbclid=PAZXh0bgNhZW0CMTEAAaa03Y7DBOh9fjHje_drPONPc8sp5EeCE-5XQdzP9bqefUVA7mSv5mMmNB8_aem_T0UJjY4KQRrcLW9ERvSRQA"
              appStoreLink="https://apps.apple.com/us/app/up4grabs/id6444911808"              
            />
          </Col>

          {/* Project 4: Neighbstor (SkillzMember, SkillzProvider) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[SkillzMember, SkillzProvider]}
              isBlog={false}
              title="Neighbstor"
              description="A location-based service provider platform, allowing users to request services within a 3000-meter radius. Features include chat, notifications, Stripe payment integration, and robust profile management (Firebase backend)."
              googlePlayLink=""
              appStoreLink= ""
            />
          </Col>

          {/* Project 5: Wod Pro League */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[wod]}
              isBlog={false}
              title="Wod Pro League"
              description="The first online Cross Training league in Spain. Designed for athletes of all levels, the app provides tools and motivation for enjoying a full season of competition."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.webrangesolutions.wod_pro_league"
              appStoreLink="https://apps.apple.com/pk/app/wod-pro-league/id6538719686"
            />
          </Col>

          {/* Project 6: Neurobridge */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[neurobridge]}
              isBlog={false}
              title="Neurobridge"
              description="Designed to support individuals with autism through educational lessons, reinforcing quizzes, and comprehensive exercise progress tracking to assist with development and growth."
              googlePlayLink=""
              appStoreLink="https://apps.apple.com/us/app/neurobridge/id6511249364"
            />
          </Col> 

          {/* Project 7: Makanai */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[makanai]}
              isBlog={false}
              title="Makanai (AI Food Assistant)"
              description="Your AI-powered food assistant. Find the best nearby restaurants and cafes instantly with a chat. Get location-based, top-rated recommendations seamlessly, with multi-language support for hassle-free food discovery."
              googlePlayLink=""
              appStoreLink=""
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;