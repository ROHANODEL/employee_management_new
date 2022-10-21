import React from 'react'
import '../style/infoPage.scss'

const EmpDashboard = () => {
  return (
    
      <div className='Emp-dashboard col-xs-12'>
        <div className='outer'>
          <div className='profile-image '>
          <img src={require('../../../images/imgfirst.jpg')} className='img-style'/>
          </div>

          <div className='emp-info'>
            <span><h3>Vishal Taral</h3></span>
            <h5>Web developer</h5>
            <hr></hr>
            <label className='heading'>Contact Information</label><br/>
            <label className='info'>Phone:    7767034533</label><br/>
            <label className='info'>Address: At: Kauli Tal: Soygaon Dist:Aurangabad Pin: 431120</label><br/>
            <label className='info'>Email:    vishaltaral</label><br/>
            <hr></hr>
            <label className='heading'>Basic Information</label><br/>
            <label className='info'>Gender:    Male</label><br/>
            <label className='info'>Birth Date:    14 Dec 1997</label><br/>
            <hr></hr>
            <label className='heading'>Skills</label><br/>
            <label className='info'>HTML</label><br/>
            <label className='info'>CSS</label><br/>
            <label className='info'>Javascript</label><br/>
          </div>  
          <div>
            <button className='btn btn-info massage-button'>Send Massage</button>
          </div>
        </div>
        <hr></hr>
      </div>

  )
}


export default EmpDashboard