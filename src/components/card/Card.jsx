import Card from "react-bootstrap/Card";

import "./card.css";

import { conteudoPhotoshop } from "../../Api/conteudoPhotoshop";
import BtnContent from "../btnContent/BtnContent";

export default function CardContent() {

  return (
    <>
      {conteudoPhotoshop.map((item, index) => (
        <Card key={index} className="card">
          <Card.Img variant="top" src={item.image} className="img" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <BtnContent packs={item.packs}/>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
