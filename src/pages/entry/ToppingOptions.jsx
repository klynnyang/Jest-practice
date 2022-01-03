import React from "react";
import { Col } from "react-bootstrap";

export default function ToppingOptions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} ls={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3000/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
}
