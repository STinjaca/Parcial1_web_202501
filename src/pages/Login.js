import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";



function Login() {

  var pasar = false
  var direccion = "/home"

  function enviar(){
    if (inputText.length <= 8 && inputText.length >= 5) {
      return "/home"
    }
    return "/"
  }
  function error_contraseña() {
    alert("error contraseña");
  }
  const summit_password = () => {
    console.log("Button clicked...");
    setLikes(likes + 1);
    console.log(likes);
    if (inputText.length <= 8 && inputText.length >= 5) {
      console.log(direccion)
    }
    else {
      error_contraseña()
    }
  };

  const [likes, setLikes] = useState(2)
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    console.log(e.target.value)
    if (e.target.value <= 8 && e.target.value >= 5) {
      console.log(inputText);
      direccion = "/home";
    }
    setInputText(e.target.value);
  }

  const renderLikes = () => {
    if (likes === 0) return "Give us a like";
    else return "Likes: " + likes;
  };


  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="UserName">
          <Form.Control type="name" placeholder="UserName" />
          <Form.Text className="text-muted">.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control value={inputText} type="password" placeholder="Password" onChange={handleChange} />
          <Form.Text className="text-muted">Fogot pasword?</Form.Text>
        </Form.Group>
        <Link to={enviar()} > <Button variant="primary" onClick={summit_password}>
          Submit
        </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
