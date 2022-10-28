import React from 'react'
import Modal from 'react-bootstrap/Modal';

const BalanceInfo = (props) => {
  return (
    <div>
    <Modal
        show={props.show}
        onHide={props.closeBtn}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Employee Balance Informaion
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <div>djlkfjdslfj</div>
            </div>
        </Modal.Body>
    </Modal></div>
)
}

export default BalanceInfo