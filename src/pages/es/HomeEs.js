import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeEs() {
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
                    { path: "/casa", img: "/Menu.png", label: "casa" },
                    { path: "/tienda", img: "/store.png", label: "tienda" },
                    { path: "/carrito", img: "/cart.png", label: "carrito" },
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

export default HomeEs;
