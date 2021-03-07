import React from 'react';
import {Table} from "react-bootstrap";

export default function DashBoard() {
    return (
        <div className="dash-board">
            <Table responsive="sm" className="dash-board__table">
            <thead>
            <tr>
                <th className="dash-board__h3 typo-h3">Table heading</th>
                <th className="dash-board__h3 typo-h3">Table heading</th>
                <th className="dash-board__h3 typo-h3">Table heading</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="dash-board__cell">Table cell</td>
                <td className="dash-board__cell">Table cell</td>
                <td className="dash-board__cell">Table cell</td>
            </tr>
            <tr>
                <td className="dash-board__cell">Table cell</td>
                <td className="dash-board__cell">Table cell</td>
                <td className="dash-board__cell">Table cell</td>
            </tr>
            <tr>
                <td className="dash-board__cell">Table cell</td>
                <td className="dash-board__cell">Table cell</td>
                <td className="dash-board__cell">Table cell</td>
            </tr>
            </tbody>
        </Table>
      </div>
    )
}
