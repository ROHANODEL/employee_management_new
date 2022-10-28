import React, { useState } from 'react'
import '../../style/signup.scss'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignUp = () => {
    var initialValues  = {
        first_name: "",
        last_name: "",
        address: "",
        phone: "",
        email: "",
        company: "",
        Username: "",
        password: "",
        confirm_password: ""
    };

    const validationSchema = yup.object({
        first_name: yup.string().required('first name is required'),
        last_name: yup.string().required('last name is required'),
        address: yup.string().required('address is required'),
        phone: yup.string().required('phone number is required'),
        email: yup.string().required('email is required'),
        company: yup.string().required('company name is required'),
        Username: yup.string().required('username is required'),
        password: yup.string().required('password is required'),
        confirm_password: yup.string().required('confirm password is required')
    })
    const submitHandler = (val) => {
        console.log(val)
    }
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
                <Form>
                    <div className="main-get">
                        <div className="container ">
                            <hr className='hr-container' />
                            <div className='form'>
                                <h3 className='txt'>Create Admin Account</h3>
                                <br />

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter first Name:</label>
                                    </div>
                                    <div className="">
                                        <Field name='first_name' className='inputBox' type="text" placeholder="Enter first name here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='first_name' />
                                        </div>
                                    </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter Last Name:</label>
                                    </div>
                                    <div className="">
                                        <Field name='last_name' className='inputBox' type="text" placeholder="Enter last name here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='last_name' />
                                        </div>
                                        </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter address:</label>
                                    </div>
                                    <div className="">
                                        <Field name='address' className='inputBox' rows="" cols="50" placeholder="Enter address here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='address' />
                                        </div>
                                        </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter mobile number:</label>
                                    </div>
                                    <div className="">
                                        <Field name='phone' className='inputBox' type="number" placeholder="Enter mobile number here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='phone' />
                                        </div>
                                        </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter Email ID:</label>
                                    </div>
                                    <div className="">
                                        <Field name='email' className='inputBox' type="email" placeholder="Enter Email ID here" />
                                        <div className='err-msg' >
                                            <ErrorMessage name='email' />
                                        </div>
                                        </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter Company Name:</label>
                                    </div>
                                    <div className="">
                                        <Field name='company' className='inputBox' type="text" placeholder="Enter Company Name here" />
                                        <div className='err-msg' >
                                            <ErrorMessage name='company' />
                                        </div>
                                        </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter Username:</label>
                                    </div>
                                    <div className="">
                                        <Field name='Username' className='inputBox' type="text" placeholder="Enter user name here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='Username' />
                                        </div>
                                         </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter Password:</label>
                                    </div>
                                    <div className="">
                                        <Field name='password' className='inputBox' type="text" placeholder="Enter password here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='password' />
                                        </div>
                                        </div>
                                </div>

                                <div className="row-new">
                                    <div className="">
                                        <label className='txt'>Enter Confirm Password:</label>
                                    </div>
                                    <div className="">
                                        <Field name='confirm_password' className='inputBox' type="password" placeholder="Enter password here" /><br />
                                        <div className='err-msg' >
                                            <ErrorMessage name='confirm_password' />
                                        </div>
                                        </div>
                                </div><br />

                                <button className='btn btn-warning'  type='reset'>Clear Form</button> &emsp;&emsp;&emsp; 
                                <button className='btn btn-primary'>Create Account</button>
                            </div>
                            <hr className='hr-container' />
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp