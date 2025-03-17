import { useEffect, useState } from "react";
import { Carousel, Col, Image, Row, Spinner } from "react-bootstrap";

export default function Carrusel() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            let url = `https://my.api.mockaroo.com/parcial1.json?key=066bd6d0`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (Array.isArray(data)) {
                    setImages(data);
                } else {
                    console.error("API response is not an array:", data);
                    setImages([{
                        "Imagen": "http://dummyimage.com/224x100.png/dddddd/000000",
                        "Texto": "non quam"
                      }, {
                        "Imagen": "http://dummyimage.com/208x100.png/cc0000/ffffff",
                        "Texto": "rutrum rutrum"
                      }, {
                        "Imagen": "http://dummyimage.com/105x100.png/cc0000/ffffff",
                        "Texto": "viverra dapibus"
                      }, {
                        "Imagen": "http://dummyimage.com/190x100.png/5fa2dd/ffffff",
                        "Texto": "quam a"
                      }, {
                        "Imagen": "http://dummyimage.com/242x100.png/cc0000/ffffff",
                        "Texto": "rutrum"
                      }, {
                        "Imagen": "http://dummyimage.com/188x100.png/ff4444/ffffff",
                        "Texto": "eleifend"
                      }, {
                        "Imagen": "http://dummyimage.com/173x100.png/dddddd/000000",
                        "Texto": "fusce"
                      }])
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } 
        };

        fetchImages();
    }, []);

    return (
      <Row className="justify-content-center">
          <Col md={8} className="d-flex justify-content-center">
              <Carousel id="Carrusel">
                  {images.map((item, index) => (
                      <Carousel.Item key={index}>
                          <Image src={item.Imagen} alt={`Imagen ${index + 1}`} fluid />
                      </Carousel.Item>
                  ))}
              </Carousel>
          </Col>
      </Row>
  );
  
}
