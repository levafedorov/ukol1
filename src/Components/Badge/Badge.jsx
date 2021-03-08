import React from 'react'

export default function Badge(props) {
    const {type} = props;

    let color = badgeMap.get(type);

    return (
        <div className={`badge badge--${color} typo-submenu typo-submenu--upper typo-submenu--white `}>
            {type}
        </div>
    )
}

Badge.defaultProps = {
    type: "default"
}

var badgeMap = new Map([
    ["čekajíci", "yellow"],
    ["kontrola plantogramu", "orange"],
    ["k výrobě", "brown"],
    ["v realizaci", "purple-dark"],
    ["kontrola výrobku", "purple-light"],
    ["k expedicí", "blue-light"],
    ["k vyzkoušení", "blue-dark"],
    ["k vyzvednutí", "jade"],
    ["kontaktovat klienta", "green-dark"],
    ["uzavřená", "green-light"],
    ["reklamace", "red"],
    ["nevyzvednuto", "black"],
    ["default", "black"]  
])



// var badgeMap = [
//     {
//         type:"čekajíci",
//         color:"yellow",
//         case:"upper"
//     },
//     {
//         type:"kontrola plantogramu",
//         color:"orange",
//         case:"capital"
//     },
//     {
//         type:"k výrobě",
//         color:"brown",
//         case:"lower"
//     },
//     {
//         type:"v realizaci",
//         color:"purple-dark",
//         case:"lower"
//     },
//     {
//         type:"kontrola výrobku",
//         color:"purple-light",
//         case:"capital"
//     },
//     {
//         type:"k expedicí",
//         color:"blue-light",
//         case:"lower"
//     },
//     {
//         type:"k vyzkoušení",
//         color:"blue-dark",
//         case:"lower"
//     },
//     {
//         type:"k vyzvednutí",
//         color:"jade",
//         case:"lower"
//     },
//     {
//         type:"kontaktovat klienta",
//         color:"green-dark",
//         case:"lower"
//     },
//     {
//         type:"uzavřená",
//         color:"green-light",
//         case:"lower"
//     },
//     {
//         type:"reklamace",
//         color:"red",
//         case:"upper"
//     },
//     {
//         type:"nevyzvednuto",
//         color:"black",
//         case:"capital"
//     },
//     {
//         type:"default",
//         color:"black",
//         case:"capital"
//     },
// ] 