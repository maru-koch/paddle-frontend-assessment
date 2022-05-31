import {Container, Navbar, Nav, Figure} from 'react-bootstrap'
import classes from './nav.module.css'
import logo from '../../assets/images/logo.png'

export const NavHeader =()=>{

    // displays social media handles

    return (
        <Navbar bg="light" expand="lg" className={classes.wrapper}>
            <Container className={classes.container} >
                <Nav className={classes.logo}>
                    <Navbar.Brand href="#home">
                        <Figure className={classes.logo}>
                            <img src ={logo} alt="logo"/>
                        </Figure>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav" className={classes.navHolder}>
                    <Nav className={classes.nav}>
                        <Nav.Link href="/about"  className={classes.link}>ABOUT US</Nav.Link>
                        <Nav.Link href="/blog"  className={classes.link}>BLOG</Nav.Link>
                        <Nav.Link href="/contact"  className={classes.link} id ={classes.contact}>CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}