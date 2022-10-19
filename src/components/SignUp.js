import React from 'react'
import '../style/signup.scss'

const SignUp = () => {
    return (
        <div>

            <div className="main">
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
                                <input className='inputBox' type="text" placeholder="Enter first name here" /><br />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Last Name:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter last name here" /><br />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter address:</label>
                            </div>
                            <div className="">
                                <textarea className='inputBox' rows="" cols="50" placeholder="Enter address here" /><br />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter mobile number:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="number" placeholder="Enter mobile number here" /><br />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Email ID:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="email" placeholder="Enter Email ID here" />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Company Name:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter Company Name here" />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Username:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter user name here" /><br />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Password:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter password here" /><br />
                            </div>
                        </div>

                        <div className="row-new">
                            <div className="">
                                <label className='txt'>Enter Confirm Password:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="password" placeholder="Enter password here" /><br />
                            </div>
                        </div><br />

                        <button className='btn btn-warning'>Clear Form</button> &emsp;&emsp;&emsp; <a href="../Login/loginPage.html"><button className='btn btn-primary'>Create Account</button></a>
                    </div>
                    <hr className='hr-container' />
                </div>
            </div>
        </div>
    )
}

export default SignUp