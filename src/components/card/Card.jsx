import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./card.css"



import { conteudoPhotoshop } from "../../Api/conteudoPhotoshop";
import BtnContent from "../btnContent/BtnContent";

export default function CardContent() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {conteudoPhotoshop.map((item, index) => (
        <Card key={index} className="card">
          <Card.Img variant="top" src={item.image} className="img"/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>

            <Button variant="primary" onClick={() => setModalShow(true)}  style={{  marginRight:"20px" }}  >
              Conteúdo
            </Button>

            <BtnContent
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Button variant="primary" href={item.link}>
              {" "}
              Seguir
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
