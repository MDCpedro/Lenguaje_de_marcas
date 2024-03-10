import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row } from "react-bootstrap";
import hotel1 from '../imagenes/hotel1.jpg'
import hotel2 from '../imagenes/hotel2.jpg'
import hotel3 from '../imagenes/hotel3.jpg'
function Hoteles() {
    return (
    <Container>
        <body className="fondo">
        <Container className="margen_0">
            <Row>
                <h1 className="blanca centrar">Restaurantes</h1>
            </Row>
            <Row>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hotel1 }
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="negra">Hotel 1 </h3>
                        <p className="negra">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hotel2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="negra">Hotel 2</h3>
                        <p className="negra">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hotel3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="negra">Hotel 3</h3>
                        <p className="negra"> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Row>
        
       </Container> 
       </body>
    </Container>
)

}

export default Hoteles