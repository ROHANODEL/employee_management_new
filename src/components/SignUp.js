import React from 'react'
import '../style/signup.scss'

const SignUp = () => {
    return (
        <div>
            <div class="main">
                <div class="container form">
                    <br />
                    <h3 class="text">Create Your Account</h3>

                    <div class="row">
                        <div class="col-md-2">
                            <label class="text">Enter name:</label>
                        </div>
                        <div class="col-md-7">
                            <input type="text" placeholder="Enter User here" /><br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <label class="text">Enter Email ID:</label>
                        </div>
                        <div class="col-md-7">
                            <input type="email" placeholder="Enter Email ID here" />
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-2">
                            <label class="text">Enter Username:</label>
                        </div>
                        <div class="col-md-7">
                            <input type="text" placeholder="Enter user name here" /><br />
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-2">
                            <label class="text">Enter Password:</label>
                        </div>
                        <div class="col-md-7">
                            <input type="text" placeholder="Enter password here" /><br />
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-2">
                            <label class="text">Enter Confirm Password:</label>
                        </div>
                        <div class="col-md-7">
                            <input type="text" placeholder="Enter password here" /><br />
                        </div>
                    </div><br />
                    <button>Clear Form</button> &emsp;&emsp;&emsp; <a href="../Login/loginPage.html"><button>Create Account</button></a>
                </div>
            </div>
        </div>
    )
}

export default SignUp