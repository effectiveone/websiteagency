import React, {useState} from 'react'
import {Button, Modal,ModalHeader,ModalBody, ModalFooter} from "reactstrap";

function Reactmodal() {
    const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);

const handleClose = () => setModal(false);
 const handleShow = () => setModal(true);

  return (
<div>
  <Button
    color="danger"
    onClick={handleShow}  >
NEXT JS  </Button>
  <Modal
 isOpen={modal}
 toggle={toggle}  >
    <ModalHeader toggle={toggle}>
      NextJS
    </ModalHeader>
    <ModalBody>
Dla kosmicznej strony, framework przyszłości! Ulepszona wersja ReactJS z Serwer Side Renderingiem. Jeszcze większa wydajność witryny i doskonalsza widoczność dla botów Google!
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={handleClose}
      >
        Do Something
      </Button>
      {' '}
      <Button onClick={handleClose}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
</div>  )
}

export default Reactmodal