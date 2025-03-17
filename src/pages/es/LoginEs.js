import { Container, Row, Col, Image } from "react-bootstrap";
import LoginFormEs from "../../components/en/LoginFormEs";

function Login() {
  return (
    <Container fluid className="p-0 vh-100 justify-content-center align-items-center">
      <Row className="p-0 vh-100 w-100 justify-content-center align-items-center">
        <Col className="p-0 w-100 h-100">
          <Image  className="w-100 h-100 object-fit-cover" src="https://canaltrece.com.co/wp-content/uploads/2024/03/Panaderia-pan-colombia.jpg" fluid  />
        </Col>
        <Col className="p-0 h-100 d-flex justify-content-center align-items-center bg-dark">
          <LoginFormEs/>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
