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
            <div class="mains">
                <div class="logins">
                    <img class="profileImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgoUQKr4U8JaQ11JmFu83XmscARur-c3n9A&usqp=CAU" alt="" /><br/><br/>
                    <input class="inputBox" type="text" placeholder="Enter your Email id" /><br /><br/>
                    <input class="inputBox" type="password" placeholder="Enter your password" /><br /><br/>

                    <div class="Registration">
                        <span>
                            <a onClick={signupClick}>Sign Up</a>
                        </span>
                        <span>
                            <a>Forgot password ?</a>
                        </span> <br />
                    </div><br/>
                    <button onClick={clickHandler} class="btn">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Login