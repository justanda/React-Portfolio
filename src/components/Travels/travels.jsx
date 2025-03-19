import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal, Spinner } from "react-bootstrap";
import "./travel.css";
import coverImg from "../../assets/images/cover/coverImg.jpg";

const TravelGallery = () => {
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm for better randomization
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const loadRandomPhotos = () => {
    setLoading(true);
    if (images.length > 0) {
      const shuffledImages = shuffleArray([...images]);

      // Simulate network delay for smoother loading experience
      setTimeout(() => {
        setGallery(shuffledImages.slice(0, 6));
        setLoading(false);
      }, 400);
    } else {
      setLoading(false);
    }
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // Navigate through images in modal
  const navigateImages = (direction) => {
    const newIndex = selectedIndex + direction;
    if (newIndex >= 0 && newIndex < gallery.length) {
      setSelectedImage(gallery[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  useEffect(() => {
    const imageModules = import.meta.glob(
      "../../assets/images/travels/*.{png,jpg,jpeg,svg}"
    );
    const imagePromises = Object.keys(imageModules).map((key) =>
      imageModules[key]().then((module) => ({
        src: module.default,
        alt: key.split("/").pop().split(".")[0].replace(/-/g, " "),
      }))
    );

    Promise.all(imagePromises)
      .then((loadedImages) => {
        setImages(loadedImages);
        loadRandomPhotos();
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setLoading(false);
      });
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;

      if (e.key === "Escape") handleCloseModal();
      if (e.key === "ArrowRight") navigateImages(1);
      if (e.key === "ArrowLeft") navigateImages(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, selectedIndex]);

  return (
    <Container fluid className="travel-gallery">
      <h2 className="gallery-title">Travel Photography</h2>
      <p className="gallery-subtitle">
        A collection of moments captured around the world
      </p>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : gallery.length > 0 ? (
        <div className="gallery-grid">
          {gallery.map((photo, index) => (
            <Card
              className="photo-card"
              key={index}
              onClick={() => handleImageClick(photo.src, index)}
            >
              <Card.Img
                variant="top"
                src={photo.src}
                alt={photo.alt}
                className="gallery-image"
              />
              <div className="image-overlay"></div>
            </Card>
          ))}
        </div>
      ) : (
        <img className="fallback-image" src={coverImg} alt="No images found" />
      )}

      <Button
        onClick={loadRandomPhotos}
        className="load-more-button"
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner size="sm" animation="border" className="me-2" />
            Loading...
          </>
        ) : (
          "Explore More Photos"
        )}
      </Button>

      {/* Enhanced Modal for Enlarged Image */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        height="100%"
        className="photo-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {gallery[selectedIndex]?.alt || "Travel Photo"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              height={"80%"}
              width={"100%"}
              src={selectedImage}
              alt={gallery[selectedIndex]?.alt || "Enlarged Travel"}
              className="enlarged-image"
            />
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between"></Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TravelGallery;
