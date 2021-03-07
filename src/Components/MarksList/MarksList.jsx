import React from 'react';
import {ListGroup} from "react-bootstrap";
import Badge from "../Badge/Badge";

export default function MarksList() {
   
   

    return (
        <div className="marks">
            <ListGroup className="marks__list-outer">
                {sections.map(item => (
                    <ListGroup.Item className="marks__section" key={item.name}>
                        <h3 className="marks__header typo-h3">{item.name}</h3>
                        <ul className="marks__list-inner">
                            {item.items.map(type => (
                               <li className="marks__item">
                                  <Badge type={type}/>
                               </li>
                            ))}
                        </ul>
                   </ListGroup.Item>
                ))}
           </ListGroup>
        </div>
       
    )
}


var sections = [
    {
     name: "Příprava",
     items: [
            "čekajíci",
            "kontrola plantogramu",
            "k výrobě"
            ]
    },
    {
        name: "Realizace",
        items:[
            "v realizaci",
            "kontrola výrobku"
        ]
    },
    {
        name: "Předávka",
        items: [
            "k expedicí",
            "k vyzkoušení",
            "k vyzvednutí",
            "kontaktovat klienta"
        ]
    },
    {
        name: "Ukončeno",
        items: [
            "uzavřená"
        ]
    },
    {
        name: "Chyba",
        items: [
            "reklamace",
            "nevyzvednuto"
        ]
    }
]


