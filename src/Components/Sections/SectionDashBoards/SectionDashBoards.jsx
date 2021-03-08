import React from 'react';
import Container from "../../Container/Container";
import DashBoard from "../../DashBoard/DashBoard";
import {useState, useEffect} from "react";
import {initial} from "../../../other/other";
import deleteItem from "../../../functions/deleteItem";
import Spinner from "../../Spinner/Spinner";

export default function SectionDashBoards() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setOrders(initial);
        }, 2000);
    }, []);

    
    const deleteItemHandler = (id, type) => {
        return (e) => {
            let arr = [...orders];
            deleteItem(arr, id, type)
            setOrders(arr);
        }
    }


    return (
        <section className="section-dashboards">
            <Container>
                {
                    orders.length ? 
                    orders.map((info) => <DashBoard {...info} deleteItemHandler={deleteItemHandler} key={info.name}/>) :
                    <Spinner />
                } 
            </Container>
        </section>
    )
}

