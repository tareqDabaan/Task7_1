import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import CardsComponent from "../CardsComponent/CardsComponent";
import first04 from "../../images/first04.webp"
import first05 from "../../images/first05.webp"
import first06 from "../../images/first06.webp"
import first07 from "../../images/first07.webp"


export default function Cards() {
  const data = [
    {
        picture:first04,
        name: 'Masirul Islam',
        position:'Web Designer',
    },    {
        picture:first05,
        name: 'Masirul Islam',
        position:'Cyber Expert',
    },    {
        picture:first06,
        name: 'Arnold Hemingway',
        position:'Web Expert',
    },    {
        picture:first07,
        name: 'Shikon Hakuei',
        position:'Data Analyst',
    },
  ]
  return (
    <Container className="my-5">
      <Row>
        {data.map(function (item) {
          return (
            <Col lg={3}>
              <CardsComponent data={item}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
