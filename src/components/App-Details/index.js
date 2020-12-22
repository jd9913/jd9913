import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const AppDetails = ({ details }) => {


  return (
    <Card>
      <Card className="grid-item">
        <Card.Img
          id="app"
          variant="top"
          src={require(`../../assets/images/apps/${details.filename}`)}
          alt={details.alt}
          style={{ width: "25%" }}
        />
        <Card.Body>
          <Card.Title className="card-title">{details.name}</Card.Title>
          <Card.Text>{details.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default AppDetails;