import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import coliseo from '../imagenes/coliseo.jpg';
import fontana from '../imagenes/fontana.jpg'
import templo from '../imagenes/templo.jpg';
import { Container, Row } from "react-bootstrap";
function Sitios_interes() {
    return (
    <body className="fondo">
    <Container>
        <Row>
            <h1 className="blanca centrar">Sitios de Interes</h1>
        </Row>
        <Row>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={coliseo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="negra">Coliseo </h3>
                    <p className="negra">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fontana}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="negra">Fontana </h3>
                    <p className="negra">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={templo}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="negra">Plaza</h3>
                    <p className="negra"> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Row>
    
   </Container> 
   </body>
    )

}

export default Sitios_interes;