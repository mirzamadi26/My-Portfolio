import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import {
  BsGithub,
} from "react-icons/bs";
import {
  CgWebsite
} from "react-icons/cg";
import {
  SiGoogleplay,
  SiAppstore,
  // Removed SiLink, as it does not exist in react-icons/si
} from "react-icons/si";
import { 
    FiLink // <--- ADDED: Importing a generic link icon from Feather Icons
} from "react-icons/fi"; 

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    // Reset to the first image when opening
    setCurrentImageIndex(0); 
    setShowModal(true);
  };
  
  const handleClose = () => {
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

  const hasMultipleImages = props.imgPath.length > 1;

  return (
    <>    
    {/* PROJECT CARD */}
    <Card className="project-card-view custom-project-card">
      {/* Card Image */}
      <div className="card-img-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath[0]} 
       alt={props.title}
          className="project-main-image"
          onClick={handleImageClick} 
        />
        {hasMultipleImages && (
          <div className="image-count-badge" onClick={handleImageClick}>
            {props.imgPath.length} Screenshots 📸
          </div>
        )}
      </div>

      <Card.Body>
        <Card.Title className="project-title-name">{props.title}</Card.Title>
        <Card.Text className="project-description-text">
          {props.description}
        </Card.Text>
        
        <div className="project-button-group">
          {/* GitHub Button */}
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="project-button gh-button"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {/* Website Button (For non-mobile links) */}
          {props.demoLink && !props.googlePlayLink && !props.appStoreLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-button demo-button"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {/* Google Play Store button */}
          {props.googlePlayLink && (
              <Button
                variant="primary"
                href={props.googlePlayLink}
                target="_blank"
                className="project-button playstore-button"
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
                className="project-button appstore-button"
              >
                <SiAppstore /> &nbsp; App Store
              </Button>
            
          )}
           {/* Generic Link Button (if only a general link exists) */}
           {/* USING FiLink HERE */}
           {props.link && !props.ghLink && !props.demoLink && !props.googlePlayLink && !props.appStoreLink && (
              <Button
                variant="primary"
                href={props.link}
                target="_blank"
                className="project-button link-button"
              >
                <FiLink /> &nbsp; Link
              </Button>
            )}
        </div>
      </Card.Body>
    </Card>
   
    {/* IMAGE CAROUSEL MODAL */}
    <Modal 
      show={showModal} 
      onHide={handleClose} 
      centered 
      dialogClassName="custom-modal-dialog" // Custom class for modal size/styling
    >
      <Modal.Header closeButton className="modal-custom-header">
        <Modal.Title>{props.title} - Screenshot {currentImageIndex + 1} of {props.imgPath.length}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-custom-body">
        <img
          src={props.imgPath[currentImageIndex]}
          alt={`image-${currentImageIndex}`}
          className="modal-image-content"
        />

        {/* Navigation Buttons (Only show if multiple images exist) */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className="modal-nav-button prev-button"
            >
              ◀
            </button>
            <button
              onClick={handleNextImage}
              className="modal-nav-button next-button"
            >
              ▶
            </button>
          </>
        )}
      </Modal.Body>
    </Modal>
    </>
  );
}
export default ProjectCards;