import React from 'react';
import {Spinner} from "react-bootstrap";

export default function FancySpinner() {
    return (
        <div className="spinner-box">
            <Spinner animation="border" role="status" />
        </div>
    )
}
