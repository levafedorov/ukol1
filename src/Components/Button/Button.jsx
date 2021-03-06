import React from 'react'
import search from "../../assets/images/search.svg";
import edit from "../../assets/images/pen.svg";
import bin from "../../assets/images/bin.svg";

export default function Button(props) {
    const {type, fn, name} = props;
    
    
    let image;
    switch(name){
        case "search": image = search;
              break;
        case "edit": image = edit;
              break;
        case "delete": image = bin;
              break;    
    }  

    return (
        <button type="submit" className="btn" type={type} fn={fn} name={name}>
              <img src={image} alt="search"/>
        </button>
    )
}


Button.propsDefault = {
    fn: () => {},
    name: "default name",
    type: "button"
}