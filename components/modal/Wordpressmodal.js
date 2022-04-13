import React, {useState} from 'react'
import {Button, Modal,ModalHeader,ModalBody, ModalFooter} from "reactstrap";

function Wordpressmodal() {
    const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);

const handleClose = () => setModal(false);
 const handleShow = () => setModal(true);

  return (
<div>
  <Button
    color="danger"
    onClick={handleShow}  >
Wordpress  </Button>
  <Modal
 isOpen={modal}
 toggle={toggle}  >
    <ModalHeader toggle={toggle}>
     Wordpress
    </ModalHeader>
    <ModalBody>
Chociaz kojarzony z "tanimi stronkami" zbudowanymi za pomocą page builder'ów, wordpress jest świetny system do zarządzania treścią! Tworząc naszą kosmiczną stronę wykorzystujemy wordpress'a jako headless CSM, dając moliwość naszym klientą dalszą edycję strony oraz dodawania treści, według własnego uznania!
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

export default Wordpressmodal