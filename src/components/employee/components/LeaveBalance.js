import React from 'react'
import Modal from 'react-bootstrap/Modal';
import '../style/empInfo.scss'

const LeaveBalance = (props) => {
  return (
    <div>
    <Modal
        show={props.show}
        onHide={props.closeBtn}
        dialogClassName="modal-ws"
        aria-labelledby="example-custom-modal-styling-title"
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                Leave Balance Information
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <div>
                <label>Your leave dates in January :</label>
                <span className='dates'>
                        <lable>&emsp;    11/10/2022 to 15/10/2022</lable>
                </span>
            </div>

            <div>
                <label>Your leave dates in February :</label>
                <span className='dates'>
                        <lable>&emsp;    11/10/2022 to 15/10/2022</lable>
                </span>
            </div> */}

            <div className='month-div'>
                <span className='months'><a href='#'> January </a></span>
                <span className='months'><a href='#'> February </a></span>
                <span className='months'><a href='#'> March </a></span>
                <span className='months'><a href='#'> April </a></span>
                <span className='months'><a href='#'> June </a></span>
                <span className='months'><a href='#'> July </a></span>
                <span className='months'><a href='#'> August </a></span>
                <span className='months'><a href='#'> September </a></span>
                <span className='months'><a href='#'> October </a></span>
                <span className='months'><a href='#'> November </a></span>
                <span className='months'><a href='#'> December </a></span>
            </div>
        </Modal.Body>
    </Modal></div>
)
}

export default LeaveBalance