import React from 'react';
import {NavDropdown} from "react-bootstrap";

export default function DropDown(props) {

    const {items} = props;


    return (
        <NavDropdown title={items.name} id="basic-nav-dropdown">
            {items.items.map(({name, link}, i) => (
                <NavDropdown.Item href={link} key={`key-${name}`} className="dropdown__link">{name}</NavDropdown.Item>
            ))}
        </NavDropdown>
    )
}



DropDown.defaultProps = {
    items: {}
}