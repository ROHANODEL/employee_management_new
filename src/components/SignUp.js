import React from 'react'
import '../style/signup.scss'

const SignUp = () => {
    return (
        <div>

            <div className="main">
                <div className="container ">
                    <hr className='hr-container' />
                    <div className='form'>
                        <h3 className="text">Create Your Account</h3>
                        <br />

                        <div className="row-new">
                            <div className="">
                                <label className="text">Enter name:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter User here" /><br />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className="text">Enter Email ID:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="email" placeholder="Enter Email ID here" />
                            </div>
                        </div>

                        <div className="row-new">

                            <div className="">
                                <label className="text">Enter Username:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter user name here" /><br />
                            </div>
                        </div>
                        <div className="row-new">

                            <div className="">
                                <label className="text">Enter Password:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter password here" /><br />
                            </div>
                        </div>
                        <div className="row-new">
                            <div className="">
                                <label className="text">Enter Confirm Password:</label>
                            </div>
                            <div className="">
                                <input className='inputBox' type="text" placeholder="Enter password here" /><br />
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