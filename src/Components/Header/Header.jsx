import React from 'react';
import {Navbar} from "react-bootstrap";
import Container from "../Container/Container";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import logo from "../../assets/images/logo.svg"; 
import Profile from "./Profile/Profile";

export default function Header() {
    return (
        <header className="header">
            <Container>
                <Navbar bg="light" expand="lg" className="header__nav">
                    <Navbar.Brand href="/" className="header__logo-place">
                        <img src={logo} alt="logo" className="header__logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="header__collapse">
                       <Menu />
                       <Search />
                       <Profile />
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}
