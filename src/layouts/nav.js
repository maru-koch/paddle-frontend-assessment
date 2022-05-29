import {Container, Navbar, Nav} from 'bootstrap'
import classes from './nav.module.css'

export const SocialMedia =()=>{

    // displays social media handles

    return (
        <Navbar bg="light" expand="lg" className={classes.wrapper}>
            <Container className={classes.container} >
                <Navbar.Brand href="#home">METRICKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}