import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function Store() {

    function llenar_fotos(data){
        let target = document.getElementById('Carrusel');
        console.log(data[0]);

        target.innerHTML = "data";

    }
    
    function {
        let mockarooApiKey = '066bd6d0';
        let url = `https://api.mockaroo.com/api/269d7510?count=7&key=${mockarooApiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => llenar_fotos(data));       
    }
    getContent() 
 return (
   <div>
     <div id="visualization-area"></div>
     <h1>Ejemplo de Home!</h1>
     <Carousel id="Carrusel">
      </Carousel>
    
     

   </div>
 );
}

export default Store;
