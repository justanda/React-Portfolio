// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "./travel.css";

// const TravelGallery = () => {
//   const imagePool = [
//     "path//to/travels00030.jpeg",
//     "path//to/travels00031.jpeg",
//   ];

//   const [gallery, setGallery] = useState([]);

//   const loadRandomPhotos = () => {
//     const randomPhotos = Array.from(
//       { length: 6 },
//       () => imagePool[Math.floor(Math.random() * imagePool.length)]
//     );
//     setGallery(randomPhotos);
//   };

//   React.useEffect(() => {
//     loadRandomPhotos();
//   }, []);

//   return (
//     <Container className="travel-gallery">
//       <h2>Travel Photo Gallery</h2>
//       <Row>
//         {gallery.map((photo, index) => (
//           <Col key={index} xs={12} sm={6} md={4}>
//             <div className="photo-card">
//               <img
//                 src={photo}
//                 alt={`Travel ${index + 1}`}
//                 className="gallery-image"
//               />
//             </div>
//           </Col>
//         ))}
//       </Row>
//       <Button
//         onClick={loadRandomPhotos}
//         variant="primary"
//         className="load-more-button"
//       >
//         Load More Photos
//       </Button>
//     </Container>
//   );
// };

// export default TravelGallery;

// TravelGallery component: TravelGallery.tsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import travelData from "../../data/travel.json";

const TravelGallery = () => {
  const [gallery, setGallery] = useState([]);

  const loadRandomPhotos = () => {
    const randomPhotos = Array.from({ length: 6 }, () => travelData.images);
    setGallery(randomPhotos);
  };

  useEffect(() => {
    loadRandomPhotos();
  }, []);

  return (
    <Container className="travel-gallery">
      <h2>Travel Photo Gallery</h2>
      <Row>
        {gallery.map((photo, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <div className="photo-card">
              <img
                src={photo}
                alt={`Travel ${index + 1}`}
                className="gallery-image"
              />
            </div>
          </Col>
        ))}
      </Row>
      <Button
        onClick={loadRandomPhotos}
        variant="primary"
        className="load-more-button"
      >
        Load More Photos
      </Button>
    </Container>
  );
};

export default TravelGallery;
