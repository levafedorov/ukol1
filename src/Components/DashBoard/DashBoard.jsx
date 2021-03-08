import React from 'react';
import Table from "./Table/Table";


export default function DashBoard(props) {
    
    const {items, name, link} = props

    return (
        <div className="dash-board">
            <a id={`${link}`} className="dash-board__link-target"></a>
            <h2 className="dash-board__header typo-h2">
                {name}
            </h2>
            {
              items.length ?
                <>
                <Table {...props}/> 
                <div className="dash-board__bottom">
                    <a href="/all" className="dash-board__show-link">Zobrazit vše</a>
                </div>
                </>
                : (
                <p className="dash-board__empty">
                    PRÁZDNO
                </p>  )         
          }  
      </div>
    )
}

DashBoard.defaultProps = {
    items: [],
    name: "default"
}