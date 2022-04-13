import React, {useState} from 'react'
import {Button, Modal,ModalHeader,ModalBody, ModalFooter} from "reactstrap";

function Mangodbmodal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const handleClose = () => setModal(false);
     const handleShow = () => setModal(true);
    
      return (
    <div>
      <Button
        color="danger"
        onClick={handleShow}  >
   Mangodb </Button>
      <Modal
     isOpen={modal}
     toggle={toggle}  >
        <ModalHeader toggle={toggle}>
          Mangodb
        </ModalHeader>
        <ModalBody>
Nie wrzucaj wszystkich jajek do jednego koszyka. Z Mangodb moesz swoje wraliwe dane trzymać na kilku serwerach co sprzyja bezpieczeństwu aplikacji!
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

export default Mangodbmodal