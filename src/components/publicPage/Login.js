import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../style/login.scss'

const Login = () => {
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        let login = localStorage.getItem('systemLogin')
        if (login) {
            navigate('/')
        }
    }, [])
    const navigate = useNavigate();
    const changeHandler = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setInputData(
            prev => ({
                ...prev,
                [name]: value
            })
        )
    }
    const login = () => {
        if(inputData.email === 'rohanodel1997@gmail.com' && inputData.password === '12345'){
        localStorage.setItem('systemLogin', true)
        navigate('/')
        }
    }
    const signupClick = () => {
        navigate('/signup')
    }

    return (
        <div>

            <div className="mains">
                <h3>Employee Management System</h3>
                <div className="logins">
                    <img className="profileImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU" alt="" /><br /><br />
                    <input className="inputBox" type="text" placeholder="Enter your Email id" onChange={changeHandler} name="email" value={inputData.email} /><br /><br />
                    <input className="inputBox" type="text" placeholder="Enter your password" onChange={changeHandler} name="password" value={inputData.password} /><br /><br />

                    <div className="Registration">
                        <span>
                            <p className='signnew' onClick={signupClick}>Sign Up</p>
                        </span>
                        <span>
                            <p className='forgotPassword'> Forgot password ? </p>
                        </span> <br />
                    </div><br />
                    <button onClick={login} className="btn-new btn btn-secondary">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login