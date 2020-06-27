import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { colorBlue } from '../assets/colors'
import GitHub from '@material-ui/icons/GitHub';
import WhatsApp from '@material-ui/icons/WhatsApp';

const NavbarComp = () => {
    return (
        <div>
            <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#20232a' }}>
                <Container>
                    <Navbar.Brand href="#" style={{ color: colorBlue }}>FIKRI SUHERI</Navbar.Brand>
                    <div>
                        <a href="https://github.com/fikrisuheri"><GitHub /> </a>
                        <a href="https://wa.me/6281222627526"><WhatsApp /></a>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
