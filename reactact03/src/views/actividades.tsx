import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row } from "react-bootstrap";
import act1 from '../imagenes/act1.jpg';
import act2 from '../imagenes/act2.jpg';
import act3 from '../imagenes/act3.jpg';
function Actividades() {
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
                        src={act1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Actividad 1 </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={act2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Actividad 2</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={act3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Actividad 3</h3>
                        <p> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Row>
        
       </Container> 
       </body>
    )

}

export default Actividades;