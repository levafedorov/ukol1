import React from 'react';
import {Table} from "react-bootstrap";
import Item from "../Item/Item";

export default function TableInner({items, type, deleteItemHandler}) {
    return (
        <Table className="dash-board__table">
            <thead>
            <tr className="dash-board__t-row">
                <th className="dash-board__t-header typo-h3">Číslo zakázky</th>
                <th className="dash-board__t-header typo-h3">Stav</th>
                <th className="dash-board__t-header typo-h3"></th>
            </tr>
            </thead>
            <tbody className="dash-board__table-body">
               {items.map(({id}) => <Item key={id} type={type} id={id} deleteItemHandler={deleteItemHandler}/>)}
            </tbody>
        </Table>
    )
}


TableInner.defaultProps = {
    items: []
}

