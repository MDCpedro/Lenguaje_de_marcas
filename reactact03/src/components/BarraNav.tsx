import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNav() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/views/inicio.tsx">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/views/sitios_de_interes.tsx">Sitios de interes</Nav.Link>
            <Nav.Link href="/views/restaurantes.tsx">Restaurantes</Nav.Link>
            <Nav.Link href="/views/hoteles.tsx">Hoteles</Nav.Link>
            <Nav.Link href="/views/actividades.tsx">Actividades</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        )
    }
export default BarraNav