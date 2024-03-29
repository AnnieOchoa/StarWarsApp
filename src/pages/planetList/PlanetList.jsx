import React from 'react'
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/SW-logo.png';

export const PlanetList = () => {
    const [listaPlanetas, agregarPlaneta] = useState([]);

    useEffect(() => {
        fetch('https://swapi.tech/api/planets?page=1&limit=70')
            .then((response) => response.json())
            .then((data) => {
                agregarPlaneta(data.results.map(planeta => planeta));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (

        <main className="main-home" >
            <Container fluid="md">
                <Row xs={1} md={5} className="g-1">
                    {
                        listaPlanetas.map(planeta =>
                            <Col key={planeta.uid}>
                                <Card>
                                    <Card.Img variant="top" src={logo} />
                                    <Card.Body>
                                        <Card.Title>{planeta.name}</Card.Title>
                                        <Card.Link href="#">ver descripcion</Card.Link>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">StarWars Planet</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </main>
    )
}


