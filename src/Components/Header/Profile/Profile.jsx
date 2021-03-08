import React from 'react';
import {Nav} from "react-bootstrap";
import DropDown from "../DropDown/DropDown";

export default function Profile() {
    const ddItems = {
        name: "Petr Novák",
        items:[
            {   link: "settings",
                name: "Nastavení",},
            {   link: "logout",
                name: "Odhlásit se",}
        ]
    }
 

    return (
        <Nav className="mr-auto profile">
             <DropDown items={ddItems}/>
        </Nav>
    )
}
