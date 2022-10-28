import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NewError = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('systemLogin') !== true){
            navigate('/')
        }
    },[])

  return (
    <div>newError</div>
  )
}

export default NewError