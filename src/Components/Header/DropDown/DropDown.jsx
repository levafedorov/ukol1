import React from 'react';
import {NavDropdown} from "react-bootstrap";

export default function DropDown(props) {

    const {items} = props;


    return (
        <NavDropdown title={items.name} id="basic-nav-dropdown" className="dropdown">
            {items.items.map((item, i) => (
                <NavDropdown.Item href="#" key={`key-${item}`} className="dropdown__link">{item}</NavDropdown.Item>
            ))}
        </NavDropdown>
    )
}



DropDown.defaultProps = {
    items: {}
}