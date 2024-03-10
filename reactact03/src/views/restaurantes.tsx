import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row } from "react-bootstrap";
import restaurante1 from '../imagenes/restaurante1.jpg'
import restaurante2 from '../imagenes/restaurante2.jpg'
import restaurante3 from '../imagenes/restaurante3.jpg'
function Restaurantes() {
    return (
        <body className="fondo">
        <Container>
            <Row>
                <h1 className="blanca centrar">Restaurantes</h1>
            </Row>
            <Row>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={restaurante1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="negra">Restaurante 1 </h3>
                        <p className="negra">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={restaurante2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="negra">Restaurante 2</h3>
                        <p className="negra">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={restaurante3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="negra">Restaurante 3</h3>
                        <p className="negra"> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Row>
        
       </Container> 
       </body>
    )

}

export default Restaurantes;