import { Row, Col, Image, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./ListaImagenes.css";



function ListaImagenes() {
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
                    setImages([
                        { "Imagen": "http://dummyimage.com/224x200.png/dddddd/000000", "Texto": "non quam" },
                        { "Imagen": "http://dummyimage.com/208x200.png/cc0000/ffffff", "Texto": "rutrum rutrum" },
                        { "Imagen": "http://dummyimage.com/105x200.png/cc0000/ffffff", "Texto": "viverra dapibus" }
                    ]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <Row className="justify-content-center bg-light py-4">
            {images.map((item, index) => (
                <Col key={index} md={3} className="text-center">
                    <div className="carda border-0 shadow-sm">
                        <Image src={item.Imagen} fluid className="rounded carda-img" />
                        <div className="text-white py-2 carda-text">
                            <p className="fw-bold mb-0">{item.Texto}</p>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default ListaImagenes;
