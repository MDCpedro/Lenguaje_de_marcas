import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Roma from '../imagenes/Roma.jpg';
function Inicio() {
    return (
        <body className="fondo blanca">
        <Container>
        <Row>
            <h2 className='centrar'>Bienvenido a Roma. </h2>
            <h4 className='centrar'>La capital de Italia.</h4>
        </Row>
        <Row>
            <Col>
                <img src={Roma}/>
            </Col>
            <Col xs={6}>
            <div>
                <p>Roma, la capital de Italia, es una extensa ciudad
                    cosmopolita que tiene a la vista casi 3,000 años de arte,
                    arquitectura y cultura de influencia mundial. Las ruinas
                    antiguas como las del Foro y el Coliseo evocan el poder
                    del antiguo Imperio Romano. La ciudad del Vaticano, sede
                    central de la Iglesia católica romana, cuenta con la Basílica
                    de San Pedro y los Museos del Vaticano, que albergan obras
                    maestras como los frescos de la Capilla Sixtina de Miguel Ángel.</p>
            </div>
            </Col>
        </Row>
        
        </Container>
        </body>
    )
}

export default Inicio;