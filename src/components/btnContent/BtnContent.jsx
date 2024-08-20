import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./btnContent.css"


function BtnContent({ packs }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigate = () => {
    window.location.href = "";
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Conteúdo
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered >
        <Modal.Header closeButton style={{ background:"#000", color: "white", }}>
          <Modal.Title>Categorias que fazem parte desse Pack!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body"> {typeof packs === 'object' ? JSON.stringify(packs) : packs} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNavigate}>
            Abrir Pack
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BtnContent;
