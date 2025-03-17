import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container
            fluid
            className="d-flex vh-100 justify-content-center align-items-center"
            style={{
                backgroundImage: "url('/fondo_home.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Row className="bg-dark bg-opacity-75 p-4 rounded justify-content-center gap-3">
                {[
                    { path: "/Menu", img: "/Menu.png", label: "Menu" },
                    { path: "/Store", img: "/store.png", label: "Store" },
                    { path: "/Cart", img: "/cart.png", label: "Cart" },
                ].map(({ path, img, label }) => (
                    <Col md={3}  key={label} className="text-center">
                        <Link to={path} className="text-decoration-none">
                            <Image src={img} alt={label} fluid />
                            <p className="text-white fw-bold fs-4">{label}</p>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
