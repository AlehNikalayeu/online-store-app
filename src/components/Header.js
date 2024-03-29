import React, {useContext, useState} from 'react';
import logo from '../data/playstation-store-logo.jpeg'
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle
} from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Photos from "../pages/Photos";
import Games from "../pages/Games";
import Blog from "../pages/Blog";
import {FaShoppingCart} from "react-icons/fa";
import Cart from "./Cart";


const Header = () => {

    const [searchText, setSearchText] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);


    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen)
    }


    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }



    return (
        <>

            <Navbar collapseOnSelect expand='md' bg='light'>

                <Container>
                    <NavbarBrand href="/">

                        <img src={logo}
                             height='50'
                             width='130'
                             alt="logo"
                        />

                    </NavbarBrand>

                    <NavbarToggle area-control='responsive-navbar-nav'/>


                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/photos" as={NavLink}>Photos</Nav.Link>
                            <Nav.Link to="/games" as={NavLink}>Games</Nav.Link>
                            <Nav.Link to="/blog" as={NavLink}>Blog</Nav.Link>
                        </Nav>

                        <Form>
                            <div>
                                <FormControl
                                    inline='true'
                                    placeholder='Search...'
                                    type='text'
                                    className='me-sm-2'
                                    onChange={handleSearch}
                                />
                            </div>
                        </Form>


                        <Button className="rounded-circle"
                                variant="outline-secondary"
                                style={{width: "3rem", height: "3rem", position: "relative", margin: "15px"}}
                                onClick={handleCartToggle}
                        >
                            <FaShoppingCart/>

                            <div className="rounded-circle bg-danger"
                                 style={{
                                     width: "1.2rem",
                                     height: "1.2rem",
                                     color: "gray",
                                     position: "absolute",
                                     transform: "translate(20%, 20%)",
                                     bottom: 0,
                                     right: 0
                                 }}

                            >

                            </div>
                        </Button>

                    </NavbarCollapse>


                    <Cart
                        isCartOpen={isCartOpen}
                        closeCart={closeCart}
                    />

                </Container>
            </Navbar>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/photos" element={<Photos searchText={searchText} />}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>

        </>);
};

export default Header;