import React from 'react';
import Badge from "../../Badge/Badge";
import Button from "../../Button/Button";

export default function Item({id, type, deleteItemHandler}) {
     
    const deleteHandler = deleteItemHandler(id, type);

    return (
        <tr className="dash-board__t-row">
            <td className="dash-board__t-cell">{id}</td>
            <td className="dash-board__t-cell"><Badge type={type}/></td>
            <td className="dash-board__t-cell">
                <Button type="button" name="edit"/>
                <Button type="button" name="delete" fn={deleteHandler}/>
            </td>
        </tr>
    )
}

Item.defaultProps = {
    id: 11111111,
    type: "default"
}