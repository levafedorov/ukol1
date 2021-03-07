import React from 'react';
import Container from "../../Container/Container";
import DashBoard from "../../DashBoard/DashBoard";

export default function SectionDashBoards() {
    return (
        <section className="section-dashboards">
            <Container>
               <DashBoard />
               <DashBoard />
               <DashBoard />
               <DashBoard />
            </Container>
        </section>
    )
}
