import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {


    useEffect(() => {
        let login = localStorage.getItem('systemLogin')
        if (!login) {
            navigate('/login')
        }
    }, [])

    const navigate = useNavigate();
    const { Component } = props

    return (
        <div>
            <Component />
        </div>
    )

}

export default Protected