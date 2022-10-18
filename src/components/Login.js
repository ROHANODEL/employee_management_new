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
                <div className="logins">
                    <img className="profileImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgoUQKr4U8JaQ11JmFu83XmscARur-c3n9A&usqp=CAU" alt="" /><br/><br/>
                    <input className="inputBox" type=" " placeholder="Enter your Email id" /><br /><br/>
                    <input className="inputBox" type="password" placeholder="Enter your password" /><br /><br/>

                    <div className="Registration">
                        <span>
                            <p className='signnew' onClick={signupClick}>Sign Up</p>
                        </span>
                        <span>
                            <p>Forgot password ?</p>
                        </span> <br />
                    </div><br/>
                    <button onClick={clickHandler} className="btn-new btn btn-secondary">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Login