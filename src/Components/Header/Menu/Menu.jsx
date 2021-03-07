import React from 'react';
import {Nav} from "react-bootstrap";
import DropDown from "../DropDown/DropDown";

export default function Menu() {
    const ddItems = {
        name: "Procházet stavy",
        items:[
            "Čekajíci",
            "Kontrola plantogramu",
            "K výrobě",
            "K realizaci",
            "Kontrola výrobku",
            "K expedici",
            "K vyzvednutí",
            "K vyzkoušení",
            "Kontaktovat klienta",
            "Uzavřeno",
            "Reklamace"
        ]
    }
    return (
        <Nav className="mr-auto menu">
        <Nav.Link href="#home" className="menu__link typo-menu">Nová zakázka</Nav.Link>
        <Nav.Link href="#link" className="menu__link typo-menu">Seznam zakázek</Nav.Link>
           <DropDown items={ddItems }/>
        </Nav>
    )
}
