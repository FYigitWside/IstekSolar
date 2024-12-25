import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';



const MyNavbar = () => {

    
    return (
        <>

            <Navbar collapseOnSelect
                    expand="lg"
                    variant="light"
                    id="navbarCollapse"

                    className="fixed-top navbar-scroll ">
                <div className="navbar-brand d-lg-none" style={{flex:"1"}}  id="navbarTablet">
                    <a href="#"><img className="logoImage" src="/assets/Evalightlight.png" alt="" style={{ maxWidth: '700px' }}/></a>
                </div>
                <Navbar.Toggle className="col-md-3" id="navbarToggle" aria-controls="responsive-navbar-nav"  style={{marginRight:"90px"}} />

                <Navbar.Collapse  id="responsive-navbar-nav">
                    <div className="col-md-4 nav-animate" id="mainLogoClass">
                        <div className="logoSetting">
                            <a  href="https://isteksolar.netlify.app"><img className="logoImage" src="/assets/Evalightlight.png" alt=" "/></a>
                        </div>
                    </div>
                    <div className="col-md-4" id="navbarContentTextRoute">
                    <Nav className="ml-auto" id="navbarBar">
                        <div id="firstChild"><Nav.Link  style={{color:"#ffffff"}} href="/">HOME</Nav.Link></div>
                        <div id="secondChild"><Nav.Link  style={{color:"#ffffff"}} href="/isteksolar/about">about</Nav.Link></div>
                        <div id="thirdChild"><Nav.Link  style={{color:"#ffffff"}} href="/isteksolar/product">product</Nav.Link></div>
                    </Nav>
                    </div>
                    
                </Navbar.Collapse>
            </Navbar>
        </>

    );
};

export default MyNavbar;