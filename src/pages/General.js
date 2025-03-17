import { Container, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import ListaImagenes from "../components/ListaImagenes";
import "./style.css";

function General({titulo}) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    return (
        <Container fluid className="p-0">
            <div className="menu-header">
                <h2 className="menu-title">
                    <Image src="/cart.png" width={40} alt="Cart Icon" />
                    {titulo}
                    <Image src="/cart.png" width={40} alt="Cart Icon" />
                </h2>
            </div>

            <Carrusel />
            <ListaImagenes />
        </Container>
    );
}

export default General;
