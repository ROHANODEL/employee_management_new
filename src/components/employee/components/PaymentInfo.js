import React from 'react'
import Modal from 'react-bootstrap/Modal';

const PaymentInfo = (props) => {
    return (
        <div>
            <Modal
                show={props.newShow}
                onHide={props.paymentClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Employee Balance Inf ormaion
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>djlkfjdslfj</div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PaymentInfo