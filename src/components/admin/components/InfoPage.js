import React from 'react'
import { useSelector } from 'react-redux'
import '../style/infoPage.scss'

const EmpDashboard = () => {

  const updateVal = useSelector((state) => state.admin.adminData.payload)

  return (
    
      <div className='Emp-dashboard col-xs-12'>
        <div className='outer'>
          <div className='profile-image '>
          <img src={require('../../../images/imgfirst.jpg')} className='img-style'/>
          </div>

          <div className='emp-info'>
            <span><h3>{updateVal.name}</h3></span>
            <h5>{updateVal.role}</h5>
            <hr></hr>
            <label className='heading'>Contact Information</label><br/>
            <label className='info'>Phone:    {updateVal.phone_number}</label><br/>
            <label className='info'>Address: {updateVal.address}</label><br/>
            <label className='info'>Email:    -------</label><br/>
            <hr></hr>
            <label className='heading'>Basic Information</label><br/>
            <label className='info'>Gender:    {updateVal.gender}</label><br/>
            <label className='info'>Birth Date:    ----------</label><br/>
            <hr></hr>
            <label className='heading'>Skills</label><br/>
            <label className='info'>HTML</label><br/>
            <label className='info'>CSS</label><br/>
            <label className='info'>Javascript</label><br/>
          </div>  
        </div>
        <hr></hr>
      </div>

  )
}


export default EmpDashboard