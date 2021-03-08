import React from 'react';
import {Navbar} from "react-bootstrap";
import Container from "../Container/Container";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import logo from "../../assets/images/logo.svg"; 
import Profile from "./Profile/Profile";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <Container>
                <Navbar bg="light" expand="lg" className="header__nav">
                    <Link to="/" className="header__logo-place navbar-brand">
                        <img src={logo} alt="logo" className="header__logo"/>
                    </Link>
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
