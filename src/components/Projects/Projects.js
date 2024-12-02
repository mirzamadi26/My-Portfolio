import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
              imgPath={[affiliateChatBox]}
             
              title="Affiliate Chat Box"
              description="A platform for affiliates to share possible business opportunities.

Affiliate chat box is an online affiliate community to connect industry experts and enthusiasts.
Affiliate chat box provide platform for affiliates and merchants to connect and share possible business opportunities.
For people working on CPL, CPS, CPM, CPA, PAY PER CALL, and more."
googlePlayLink="https://play.google.com/store/apps/details?id=com.project.omd&hl=en"
appStoreLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[tazwedco]}
              isBlog={false}
              title="Tazwedco"
              description="This app helps to connect wholesalers companies to people looking for to buy the products directly from wholesaler companies. This app helps to find the best wholesaler company for particular products.
and Add the product to cart and make an order. Also track the order and it will deliver to you."
googlePlayLink="https://play.google.com/store/apps/details?id=com.yaaks.tazwedcom&hl=en"
appStoreLink="https://apps.apple.com/pk/app/tazwedco/id6479000822"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[Up4Grabs]}
             
              title="Up4Grabs"
              description="Up4Grabs connects you directly with local pros. Post jobs, set prices, get bids—fast, easy, and entirely free to use! Up4Grabs: The First Free, Immediate Landscaping and Handyman Job Posting and Job Grabbing App
At Up4Grabs, cash is king. Whether you're a homeowner seeking affordable outdoor or landscaping services, or a small landscaping or handyman business seeking to expand your clientele and make more money freelancing."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.upfourgrab&fbclid=PAZXh0bgNhZW0CMTEAAaa03Y7DBOh9fjHje_drPONPc8sp5EeCE-5XQdzP9bqefUVA7mSv5mMmNB8_aem_T0UJjY4KQRrcLW9ERvSRQA"
              appStoreLink="https://apps.apple.com/us/app/up4grabs/id6444911808"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[SkillzMember, SkillzProvider]}
              isBlog={false}
              title="Neighbstor"
              description="A location-based service provider platform, facilitating users to request services within a 3000-meter radius of their current
location. Firebase is serving as backend. App holds functionality of chat, notification services, stripe payment, profile
management and much more."
googlePlayLink=""
appStoreLink= ""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[wod]}
              isBlog={false}
              title="Wod Pro League"
              description="The first online Cross Training league in Spain. Designed for athletes of all levels, our app offers you the tools and motivation necessary for you to enjoy a whole season of competition."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.webrangesolutions.wod_pro_league"
              appStoreLink="https://apps.apple.com/pk/app/wod-pro-league/id6538719686"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[neurobridge]}
              isBlog={false}
              title="Neurobridge"
              description="This app is designed to support individuals with autism. The app features educational lessons and quizzes that users can
take after completing the lessons to reinforce their learning. Additionally, Neurobridge allows users to track the progress
of their exercises, providing a comprehensive tool to assist with their development and growth."
googlePlayLink=""
             appStoreLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[makanai]}
              isBlog={false}
              title="Makanai"
              description="This app is designed to support individuals with autism. The app features educational lessons and quizzes that users can
take after completing the lessons to reinforce their learning. Additionally, Neurobridge allows users to track the progress
of their exercises, providing a comprehensive tool to assist with their development and growth."
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
