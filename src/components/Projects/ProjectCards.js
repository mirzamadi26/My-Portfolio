import React from "react";
import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiGithub,
  SiGit,
  SiGoogleadmob,
  SiContactlesspayment,
  SiAppstore,
  SiGoogleplay,
} from "react-icons/si";
function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    console.log("Image clicked");
    setShowModal(true);
  };
  
  const handleClose = () => {
    console.log("Modal closed");
    setShowModal(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.imgPath.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.imgPath.length - 1 : prevIndex - 1
    );
  };
  return (
    <>    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath[0]} alt="card-img"  style={{ borderRadius: "15px 15px 0 0", cursor: "pointer" }}
          onClick={() => handleImageClick(0)} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Google Play Store button */}
        {props.googlePlayLink && (
            <Button
              variant="primary"
              href={props.googlePlayLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <SiGoogleplay /> &nbsp; Play Store
            </Button>
          )}

          {/* App Store button */}
          {props.appStoreLink && (
            <Button
              variant="primary"
              href={props.appStoreLink}
              target="_blank"
              style={{ marginRight: "10px" }}
            >
              <SiAppstore /> &nbsp; App Store
            </Button>
          
        )}
      </Card.Body>
    </Card>
   
    <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <img
            src={props.imgPath[currentImageIndex]}
            alt={`image-${currentImageIndex}`}
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={handlePrevImage}
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "10px 20px",
                fontSize: "20px",
              }}
            >
              ◀
            </button>
            <button
              onClick={handleNextImage}
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "10px 20px",
                fontSize: "20px",
              }}
            >
              ▶
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ProjectCards;
