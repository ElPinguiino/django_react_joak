import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLogoImage
} from './NavbarElements';

import logo from '../../images/secondlogo.png';
import ContactForm from '../ContactForm';
import CateringForm from '../CateringForm';
import ReviewForm from '../ReviewForm';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                <NavLogoImage
                    to='/' 
                    onClick={toggleHome}
                    src={logo}
                    alt = "joaklogo" />
                <NavLogo to='/' onClick={toggleHome}>Juan Of A Kind</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="menu"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" component={ContactForm}
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="catering" component={CateringForm}
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Catering</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="reviews" component={ReviewForm}
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Reviews</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="store"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Store</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/placeorder">Place Order</NavBtnLink>
                </NavBtn>
              </NavbarContainer>       
            </Nav>
        </>
    )
}

export default Navbar;