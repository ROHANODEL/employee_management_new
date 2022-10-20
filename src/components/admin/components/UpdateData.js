import React from 'react'
import '../style/addEmp.scss'
import Modal from 'react-bootstrap/Modal';

const UpdateData = (props) => {
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
                        Upadate Employee Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='formToUpdate'>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Employee Name:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Role Of Employee:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Joining date:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="date" />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Experience:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Employee Salary :</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Gender :</label>
                            </div>
                            <div className="Gender">
                                <input type="radio" />
                                <lable>Male</lable>&emsp;

                                <input type="radio" />
                                <lable>Female</lable>

                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Phone Number :</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="number" />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter address:</label>
                            </div>
                            <div className="">
                                <textarea className='inputBox' rows="" cols="50" /><br />
                            </div>
                        </div>
                        <div className='body-btn'>
                            <button className='btn btn-primary  update-button'>UPDATE</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal></div>
  )
}

export default UpdateData