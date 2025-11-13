import React from "react";
import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import {
  SiAppstore,
  SiGoogleplay,
} from "react-icons/si";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index); // Set the clicked image as the starting image
    setShowModal(true);
  };
  
  const handleClose = () => {
    setShowModal(false);
    // Optional: Reset index when closing modal if you want it to always open to the first image
    // setCurrentImageIndex(0); 
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.imgPath.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.imgPath.length - 1 : prevIndex - 1
    );
  };
  
  const hasMultipleImages = props.imgPath && props.imgPath.length > 1;

  return (
    <>    
      {/* Custom class 'project-card-view' needs accompanying CSS for a modern look */}
      <Card className="project-card-view">
        <Card.Img 
          variant="top" 
          src={props.imgPath[0]} 
          alt="Project Screenshot"
          // Enhanced: Added a subtle shadow and scale on hover for better visual feedback
          style={{ 
            borderRadius: "10px 10px 0 0", 
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            objectFit: 'cover', // Ensures image covers the area nicely
            maxHeight: '250px', // Set a reasonable height for all card images
          }}
          onClick={() => handleImageClick(0)} // Always show the first image on card click
        />
        <Card.Body>
          {/* Enhanced: Typography update */}
          <Card.Title style={{ color: "#a55eea", fontWeight: 700, fontSize: "1.4em" }}>
            {props.title}
          </Card.Title>
          {/* Enhanced: Readability update */}
          <Card.Text style={{ textAlign: "justify", color: "rgb(200, 200, 200)", fontSize: "1em" }}>
            {props.description}
          </Card.Text>
          
          <div style={{ marginTop: "20px" }}>
            {/* Google Play Store button */}
            {props.googlePlayLink && (
                <Button
                  variant="primary"
                  href={props.googlePlayLink}
                  target="_blank"
                  className="store-button google-play-btn" // Custom classes for styling
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
                  className="store-button app-store-btn" // Custom classes for styling
                >
                  <SiAppstore /> &nbsp; App Store
                </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      
      {/* Image Gallery Modal */}
      <Modal show={showModal} onHide={handleClose} dialogClassName="fullscreen-modal" centered>
        <Modal.Header 
          closeButton 
          style={{ border: 'none', background: 'rgba(0, 0, 0, 0.8)', padding: '10px' }}
        />
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            position: "relative",
            background: 'rgba(0, 0, 0, 0.8)', // Dark overlay for focus
            minHeight: '80vh',
          }}
        >
          {/* Image Display */}
          <img
            src={props.imgPath[currentImageIndex]}
            alt={`image-${currentImageIndex}`}
            style={{
              maxWidth: "90%",
              maxHeight: "90vh",
              objectFit: "contain",
              transition: "opacity 0.5s ease-in-out", // Smooth transition when image changes
            }}
          />
          
          {/* Only show navigation if there is more than one image */}
          {hasMultipleImages && (
            <>
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "20px",
                  transform: "translateY(-50%)",
                  background: "rgba(255, 255, 255, 0.2)", // Subtle background
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: "15px",
                  fontSize: "24px",
                  zIndex: 10, // Ensure it's above the image
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              >
                &#9664; {/* Left arrow */}
              </button>
              
              {/* Next Button */}
              <button
                onClick={handleNextImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: "15px",
                  fontSize: "24px",
                  zIndex: 10,
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              >
                &#9654; {/* Right arrow */}
              </button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;