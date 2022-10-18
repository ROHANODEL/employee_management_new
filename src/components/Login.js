import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/login.scss'

const Login = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/dashboard')
    }
    const signupClick = () => {
        navigate('/signup')
    }
    return (
        <div>
            
            <div className="mains">
            <h3>Employee Management System</h3>
                <div className="logins">
                    <img className="profileImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU" alt="" /><br/><br/>
                    <input className="inputBox" type=" " placeholder="Enter your Email id" /><br /><br/>
                    <input className="inputBox" type="password" placeholder="Enter your password" /><br /><br/>

                    <div className="Registration">
                        <span>
                            <p className='signnew' onClick={signupClick}>Sign Up</p>
                        </span>
                        <span>
                            <p className='forgotPassword'> Forgot password ? </p>
                        </span> <br />
                    </div><br/>
                    <button onClick={clickHandler} className="btn-new btn btn-secondary">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login