import React from 'react';
import Container from "../../Container/Container";
import MarksList from "../../MarksList/MarksList"

export default function SectionMarks() {
    return (
        <section className="section-marks">
            <Container>
                <MarksList />
            </Container>
        </section>
    )
}
