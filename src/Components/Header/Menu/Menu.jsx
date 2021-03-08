import React from 'react';
import {Nav} from "react-bootstrap";
import DropDown from "../DropDown/DropDown";
import {ddItems} from "../../../other/other";
import {Link} from "react-router-dom";

export default function Menu() {
   
    return (
        <Nav className="mr-auto menu">
        <Link to="/" className="menu__link typo-menu nav-link">Nová zakázka</Link>
        <Link to="/sections" className="menu__link typo-menu nav-link">Seznam zakázek</Link>
           <DropDown items={ddItems }/>
        </Nav>
    )
}

