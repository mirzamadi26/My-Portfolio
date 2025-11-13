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
import vantage from "../../Assets/Projects/12.png";
import global from "../../Assets/Projects/13.png";
import etb from "../../Assets/Projects/14.png";
import kaepa from "../../Assets/Projects/15.png";
import olive from "../../Assets/Projects/16.png";
import talaamu from "../../Assets/Projects/17.png";
import xbrikol from "../../Assets/Projects/18.png";
import cartowuser from "../../Assets/Projects/19.png";
import cartowcaptain from "../../Assets/Projects/20.png";



function Projects() {
  // Use multiple images for Neighbstor to showcase the carousel
  const neighbstorImages = [SkillzMember, SkillzProvider, SkillzMember]; 

  return (
    <Container fluid className="project-section custom-bg"> 
      <Particle />
      <Container>
        <h1 className="project-heading">
          🛠️ My Recent <strong className="purple">Mobile Works </strong>
        </h1>
        <p className="project-tagline">
          Explore a collection of **Flutter** mobile applications and platforms I've recently developed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[cartowuser]}
              isBlog={false}
              title="CarTow"
              description="CarTow is your trusted companion whenever your car breaks down. Whether you’re stuck on the highway, need emergency towing, or want to transport your vehicle safely, CarTow connects you instantly with nearby professional tow truck drivers. Built for speed, reliability, and safety, CarTow ensures you get help when you need it most — no phone calls, no waiting on hold, and no guessing where your tow truck is."
              googlePlayLink=""
              appStoreLink=""
            />
          </Col> 
            <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[cartowcaptain]}
              isBlog={false}
              title="CarTow Captain"
              description="CarTow Captain is the official driver app for tow truck owners and operators across the UAE. It connects captains with thousands of users who need towing or roadside assistance every day.
Built with simplicity and reliability in mind, CarTow Captain helps you manage your towing business efficiently — from receiving requests to tracking your earnings."
              googlePlayLink=""
              appStoreLink=""
            />
          </Col> 
           <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[vantage]}
              isBlog={false}
              title="Vantage Tennis"
              description="Unlock Your Full Tennis Potential with Expert Coaching and Tailored Feedback!
Take your tennis skills to the next level with personalized coaching, feedback, and a range of tools designed for players of all levels. Our app connects you with expert coaches who provide valuable insights, support, and customized training to help you improve every aspect of your game."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.mycompany.vantagetennis&hl=en"
              appStoreLink="https://apps.apple.com/us/app/vantage-tennis/id6742150048"
            />
          </Col> 
           <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[kaepa]}
              isBlog={false}
              title="Kaepa"
              description="In a world where fair work, transparency, and collaboration are more essential than ever, KAEPA Association emerges as a modern solution rooted in timeless values. KAEPA stands for Kuwait Airways Engineers and Pilots Association, and the Association is a collective platform where Pilots and Engineers unite to create a better, more sustainable work environment."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.app.kaepa&hl=en"
              appStoreLink="https://apps.apple.com/us/app/kaepa/id6751051106"
            />
          </Col> 
            <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[global]}
              isBlog={false}
              title="Global Live"
              description="Global Live is the all-in-one app for event enthusiasts, designed to make your event experience seamless and engaging. Whether you're looking for upcoming events, joining event communities, purchasing exclusive merchandise, or tracking your orders, Global Live has you covered."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.globalcheer.app&hl=en"
              appStoreLink="https://apps.apple.com/us/app/global-live/id6738582854"
            />
          </Col> 
            <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[etb]}
              isBlog={false}
              title="ETB Exchange Rate"
              description="Stay informed with the latest Ethiopian Dollar to Birr exchange rates, including rates from parallel markets and popular local banks.
With our app, you can:
Track Live Rates: Access real-time exchange rates for the Ethiopian Birr against the Dollar.
Compare Rates: View and compare rates from parallel markets and trusted local banks."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.etbexchange.app&hl=en"
              appStoreLink=""
            />
          </Col> 
           

              <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[olive]}
              isBlog={false}
              title="Olive Chrisian Radio"
              description="Listen to the music you know and love wherever you go. We play newly released songs, the popular in recent times and a little of the timeless. With this app you’ll enjoy Christian inspirational & worship songs. Let the Olive Radio app be your companion for encouragement and spiritual growth every day."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.oliveradio.app&hl=en"
              appStoreLink="https://apps.apple.com/us/app/olive-christian-radio/id6532618778"
            />
          </Col> 
            <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[talaamu]}
              isBlog={false}
              title="Taalamu News"
              description="Download the Taalamu News App for free and stay updated on the top business, national and property sector news being reported in Kenya, without the noise of politics or celebrity content.
The Taalamu News App features include:
- Daily posts on the top business, national and property sector news in Kenya"
              googlePlayLink="https://play.google.com/store/apps/details?id=com.taalamu.news.android&hl=en"
              appStoreLink="https://apps.apple.com/us/iphone/search?term=Talaamu%20News"
            />
          </Col> 
            <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[xbrikol]}
              isBlog={false}
              title="XBrikol"
              description="XBrikol is an on-demand service provider app that connects customers with professionals for home cleaning, electrical work, car wash, and more.
Customers can send service requests to nearby providers, and providers can accept or reject offers in real time. Once an offer is accepted, the customer can track the provider’s location, communicate directly, and complete payments securely through the app.
The app supports internal order tracking, provider status management (online/offline), and seamless request handling to make service delivery efficient and transparent for both customers and providers."
              googlePlayLink=""
              appStoreLink=""
            />
          </Col> 
            
          {/* Project 1: Affiliate Chat Box */}
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[affiliateChatBox]}
              title="Affiliate Chat Box"
              description="A platform for affiliates to share business opportunities. This online community connects industry experts and merchants for networking on CPL, CPS, CPM, CPA, and PAY PER CALL models."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.project.omd&hl=en"
              appStoreLink=""
            />
          </Col>

          {/* Project 2: Tazwedco */}
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
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
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={[Up4Grabs]}
              title="Up4Grabs"
              description="The first free, immediate job posting app connecting users directly with local landscaping and handyman pros. Post jobs, set prices, and get fast bids for affordable services."
              googlePlayLink="https://play.google.com/store/apps/details?id=com.upfourgrab&fbclid=PAZXh0bgNhZW0CMTEAAaa03Y7DBOh9fjHje_drPONPc8sp5EeCE-5XQdzP9bqefUVA7mSv5mMmNB8_aem_T0UJjY4KQRrcLW9ERvSRQA"
              appStoreLink="https://apps.apple.com/us/app/up4grabs/id6444911808"              
            />
          </Col>

          {/* Project 4: Neighbstor (SkillzMember, SkillzProvider) - Using multiple images for demo */}
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
            <ProjectCard
              imgPath={neighbstorImages}
              isBlog={false}
              title="Neighbstor"
              description="A location-based service provider platform, allowing users to request services within a 3000-meter radius. Features include chat, notifications, Stripe payment integration, and robust profile management (Firebase backend)."
              googlePlayLink=""
              appStoreLink= ""
            />
          </Col>

          {/* Project 5: Wod Pro League */}
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
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
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
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
          <Col md={6} className="project-card-col"> {/* CHANGED FROM md={4} to md={6} */}
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