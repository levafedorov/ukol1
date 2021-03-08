import React from 'react';
import {Nav} from "react-bootstrap";
import DropDown from "../DropDown/DropDown";
import {ddItems} from "../../../other/other";

export default function Menu() {
   
    return (
        <Nav className="mr-auto menu">
        <Nav.Link href="/" className="menu__link typo-menu">Nová zakázka</Nav.Link>
        <Nav.Link href="/sections" className="menu__link typo-menu">Seznam zakázek</Nav.Link>
           <DropDown items={ddItems }/>
        </Nav>
    )
}

