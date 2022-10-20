import React from 'react'
import '../style/addEmp.scss'
import Modal from 'react-bootstrap/Modal';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UpdateData = (props) => {
    const initialValues = {
        name: "",
        role: "",
        join_data: "",
        experience: "",
        salary: "",
        gender: "",
        phone: "",
        address: ""
    }
    const validationSchema = yup.object({
        name: yup.string().required('name is required'),
        role: yup.string().required('role of employee'),
        join_data: yup.string().required('joining date'),
        experience: yup.string().required('please enter experience'),
        salary: yup.string().required('employee salary required'),
        gender: yup.string().required('please select gender'),
        phone: yup.string().required('please enter phone number'),
        address: yup.string().required('please enter address')
    })
    const submitHandler = (val) => {
        console.log(val)
    }
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
                    <div>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
                            <Form>
                                <div className='formToUpdate'>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Enter Employee Name:</label>
                                        </div>
                                        <div className="">
                                            <Field name='name' className='inputBox' type="text" />
                                            <div style={{paddingLeft:'2rem',width:'290px'}}>
                                            <ErrorMessage name='name' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Role Of Employee:</label>
                                        </div>
                                        <div className="">
                                            <Field name='role' className='inputBox' type="text" />
                                            <ErrorMessage name='role' />
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Joining date:</label>
                                        </div>
                                        <div className="">
                                            <Field name='join_data' className='inputBox' type="date" />
                                            <ErrorMessage name='join_data' />
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Experience:</label>
                                        </div>
                                        <div className="">
                                            <Field name="experience" className='inputBox' type="text" />
                                            <ErrorMessage name='experience' />
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Employee Salary :</label>
                                        </div>
                                        <div className="">
                                            <Field name='salary' className='inputBox' type="text" />
                                            <ErrorMessage name='salary' />
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Gender :</label>
                                        </div>
                                        <div className="Gender">
                                            <Field type="radio" name='gender' />
                                            <lable>Male</lable>&emsp;

                                            <Field type="radio" name='gender' />
                                            <lable>Female</lable>
                                            <ErrorMessage name='gender' />
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Phone Number :</label>
                                        </div>
                                        <div className="">
                                            <Field name='phone' className='inputBox' type="number" />
                                            <ErrorMessage name='phone' />
                                        </div>
                                    </div>
                                    <div className="row-new">
                                        <div className="">
                                            <label className='txt'>Enter address:</label>
                                        </div>
                                        <div className="">
                                            <textarea name='address' className='inputBox' rows="" cols="50" /><br />
                                            <ErrorMessage name='address' />
                                        </div>
                                    </div>
                                    <div className='body-btn'>
                                        <button className='btn btn-primary  update-button'>UPDATE</button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </Modal.Body>
            </Modal></div>
    )
}

export default UpdateData