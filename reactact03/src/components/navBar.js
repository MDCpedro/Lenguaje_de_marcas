import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function BarraNav() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="\SitiosInteres.tsx">Navbar</Navbar.Brand> 
          </Container>
        <BrowserRouter>
          <Route path="\SitiosInteres.tsx"></Route>
        </BrowserRouter>
        </Navbar>

        
        )
    }
export default BarraNav