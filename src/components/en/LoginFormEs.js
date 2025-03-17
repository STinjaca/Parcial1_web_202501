import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginFormEs() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Para manejar la navegación

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el recargo de la página
    if (password.length >= 5 && password.length <= 8) {
      navigate("/casa");
    } else {
      setError(true);
    }
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="UserName">
          <Form.Control type="text" placeholder="Nombre de Usuario" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">Olvidó la contraseña?</Form.Text>
        </Form.Group>

        {error && <p style={{ color: "red" }}>La contraseña debe tener entre 5 y 8 caracteres.</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default LoginFormEs;
