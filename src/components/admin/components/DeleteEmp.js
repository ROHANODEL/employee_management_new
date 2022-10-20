import React from 'react'
import Modal from 'react-bootstrap/Modal';

const DeleteEmp = (props) => {
  return (
    <div>
      <Modal
        show={props.closeShow}
        onHide={props.deleteClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Upadate Employee Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            dskljfdjslkfjlksdjflslfdkjlkfdjldjflajlfdkjlsjf;
          </div>
        </Modal.Body>
      </Modal>
      </div>
  )
}

export default DeleteEmp