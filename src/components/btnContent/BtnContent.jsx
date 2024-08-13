import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { conteudoPhotoshop } from "../../Api/conteudoPhotoshop";


export default function BtnContent(props) {
  return (
    <>
        {conteudoPhotoshop.map((index, item) => (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                key={index}
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Conteudo desse pack!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Conteudo</h4>
                <p>
                    {item.packs}
                </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        ))}
    </>
  );
}
