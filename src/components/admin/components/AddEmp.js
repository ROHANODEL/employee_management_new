import React from 'react'
import '../style/addEmp.scss'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddEmp = () => {
    const initialValues = {
        name: "",
        role: "",
        join_data: "",
        birth_date:"",
        experience: "",
        salary: "",
        department:"",
        gender: "",
        married:"",
        phone: "",
        home_phone:"",
        address: ""
    }
    const validationSchema = yup.object({
        name: yup.string().required('name is required'),
        role: yup.string().required('role of employee required'),
        join_data: yup.string().required('joining date required'),
        birth_date: yup.string().required('birth date required'),
        experience: yup.string().required('please enter experience'),
        salary: yup.string().required('employee salary required'),
        department: yup.string().required('employee department required'),
        gender: yup.string().required('please select gender'),
        married: yup.string().required('please select marital status'),
        phone: yup.string().required('phone number is required'),
        home_phone: yup.string().required('phone number is required'),
        address: yup.string().required('address is required')
    })

    const submitHandler = (val) => {
        console.log(val)
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
                <Form>
                    <div className='main-new'>
                        <div className='formToUpdate'>

                            <div className="row-new ">
                                <div className="">
                                    <label className='txt'>Employee full Name:</label>
                                </div>
                                <div className="">
                                    <Field name='name' className='inputBox' type="text" />
                                    <div className='err-msg'>
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
                                    <div className='err-msg'>
                                    <ErrorMessage name='role' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Joining date:</label>
                                </div>
                                <div className="">
                                    <Field name='join_data' className='inputBox' type="date" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='join_data' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Date Of Birth:</label>
                                </div>
                                <div className="">
                                    <Field name='birth_date' className='inputBox' type="date" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='birth_date' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Experience:</label>
                                </div>
                                <div className="">
                                    <Field name='experience' className='inputBox' type="text" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='experience' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Employee Salary :</label>
                                </div>
                                <div className="">
                                    <Field name='salary' className='inputBox' type="text" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='salary' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Department Name :</label>
                                </div>
                                <div className="">
                                    <Field name='department' className='inputBox' type="text" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='department' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Gender :</label>
                                </div>
                                <div className="Gender">
                                    <Field type="radio" name='gender' value='male' />
                                    <lable>Male</lable>&emsp;

                                    <Field type="radio"  name='gender' value='female'/>
                                    <lable>Female</lable>
                                </div>
                                <div className='new-err-msg'>
                                <ErrorMessage name='gender' />
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Marital Status :</label>
                                </div>
                                <div className="Gender">
                                    <Field type="radio" name='married' value='single' />
                                    <lable>Single</lable>&emsp;

                                    <Field type="radio" name='married' value='married'/>
                                    <lable>Married</lable>
                                </div>
                                <div className='new-err-msg'>
                                <ErrorMessage name='married' />
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Cell Phone Number :</label>
                                </div>
                                <div className="">
                                    <Field name='phone' className='inputBox' type="number" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='phone' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Home Phone Number :</label>
                                </div>
                                <div className="">
                                    <Field name='home_phone' className='inputBox' type="number" />
                                    <div className='err-msg'>
                                    <ErrorMessage name='home_phone' />
                                    </div>
                                </div>
                            </div>

                            <div className="row-new">
                                <div className="">
                                    <label className='txt'>Enter address:</label>
                                </div>
                                <div className="">
                                    <Field name='address' className='inputBox' rows="" cols="50" /><br />
                                    <div className='err-msg'>
                                    <ErrorMessage name='address' />
                                    </div>
                                </div>
                            </div>

                            <div className='body-btn'>
                                <button className='btn btn-primary  update-button'>submit</button>
                            </div>

                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddEmp