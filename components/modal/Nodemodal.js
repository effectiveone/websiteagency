import React, {useState} from 'react'
import {Button, Modal,ModalHeader,ModalBody, ModalFooter} from "reactstrap";

function Nodemodal() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    const handleClose = () => setModal(false);
     const handleShow = () => setModal(true);
    
      return (
    <div>
      <Button
        color="danger"
        onClick={handleShow}  >
    Node JS  </Button>
      <Modal
     isOpen={modal}
     toggle={toggle}  >
        <ModalHeader toggle={toggle}>
          Node JS
        </ModalHeader>
        <ModalBody>
Jak next js, to backend tylko node! Prawdopodobnie najlepszy moliwy backend, zapewniający ogromną wydajność dzięki jednowątkowej pętli zdarzeń!      </ModalBody>
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
export default Nodemodal