import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Para manejar la navegación

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el recargo de la página
    if (password.length >= 5 && password.length <= 8) {
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="UserName">
          <Form.Control type="text" placeholder="UserName" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">Forgot password?</Form.Text>
        </Form.Group>

        {error && <p style={{ color: "red" }}>The password must be between 5 and 8 characters long.</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default LoginForm;
