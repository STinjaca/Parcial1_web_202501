import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <div>
            <Row>
            <Col>
                <Link to={"/Menu"}>
                    <Image src="./public/Menu.png" thumbnail />
                    Menu
                </Link>
            </Col>
            <Col>
                <Link to={"/Store"}>
                    <Image src="./public/Menu.png" thumbnail />
                    Store
                </Link>
            </Col>
            </Row>

        </div>
    );
}

export default Home;
