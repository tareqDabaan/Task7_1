import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardsComponent.css";
import { MdOutlineShare } from "react-icons/md";

export default function CardsComponent({ data }) {
  return (
    <Card className="custom-card">
      <Card.Img className="card-img" variant="top" src={data.picture} />
      <div className="share-icon">
        <a href="">
          <MdOutlineShare className="icon" />
        </a>
      </div>
      <Card.Body className="card-body">
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.position}</Card.Text>
      </Card.Body>
    </Card>
  );
}
