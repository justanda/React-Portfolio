import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import "./travel.css";
import coverImg from "../../assets/images/cover/coverImg.jpg";

const TravelGallery = () => {
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const loadRandomPhotos = () => {
    if (images.length > 0) {
      const shuffledImages = shuffleArray([...images]);
      setGallery(shuffledImages.slice(0, 6));
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const imageModules = import.meta.glob(
      "../../assets/images/travels/*.{png,jpg,jpeg,svg}"
    );
    const imagePromises = Object.keys(imageModules).map((key) =>
      imageModules[key]().then((module) => module.default)
    );

    Promise.all(imagePromises).then((loadedImages) => {
      setImages(loadedImages);
      loadRandomPhotos();
    });
  }, []);

  return (
    <Container className="travel-gallery">
      <h2 className="gallery-title">Travel Photo Gallery</h2>
      {gallery.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center">
          {gallery.map((photo, index) => (
            <Card
              className="photo-card"
              key={index}
              onClick={() => handleImageClick(photo)}
            >
              <Card.Img
                variant="top"
                src={photo}
                alt={`Travel ${index + 1}`}
                className="gallery-image"
              />
            </Card>
          ))}
        </div>
      ) : (
        <img className="fallback-image" src={coverImg} alt="Loading..." />
      )}
      <Button onClick={loadRandomPhotos} className="load-more-button">
        Load More Photos
      </Button>

      {/* Modal for Enlarged Image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged Travel"
              className="enlarged-image"
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TravelGallery;
