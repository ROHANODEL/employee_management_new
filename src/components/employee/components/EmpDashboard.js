import React, { useState } from 'react'
import '../style/empDashboard.scss'
import data from '../mock/empDashboard.json'
import LeaveBalance from './LeaveBalance';

const EmpDashboard = () => {
  const [show, setShow] = useState(false);

  const newdate = new Date();

  const date =  newdate.getDate();
  const month =  newdate.getMonth();
  const year =  newdate.getFullYear()

  const balanceDetails = () => {
    setShow(true)
  }

  const closeBtn = () => {
    setShow(false)
}

  return (
    <div className='main-div'>
      <div className='emp-dashboard container'>
        <h2>Employee dashboard</h2>
        <hr></hr>

        <div className='outer-first'>

          <div className='profile-image '>
            <img src={require('../../../images/imgfirst.jpg')} className='img-style' />
          </div>

          <div className='emp-info'>
            <label className='emp-name'>Rohan odel</label><br /><br />
            <button className='btn btn-primary'>My profile</button><br /><br />
            <button className='btn btn-primary'>My Team</button>
          </div>

          <div className='leave col'>
            <h6>Leave Balance as of {date+'/'+month+'/'+year}</h6><br />
            <div className='leave-count'>
              <div className='emp-leave col'>
                <div>Vacation Leave in this month :</div>
                <div class="badge">5 days</div>
              </div>

              <div className='emp-leave col one'>
                <div>Sick Leave in this month :</div>
                <div class="badge">5 days</div>
              </div>

              <div className='emp-leave col one'>
                <div>Total Vacation Holdind days :</div>
                <div class="badge">5 days</div>
              </div>

            </div>
            <a href='#' onClick={balanceDetails}>Full Leave Balance Information</a>
          </div>

        </div>

        <div className='outer-second'>
          <div className='payment-info'>
            <table class="table table-active">
              <tbody>
              {
                data.infoemp.map((val)=>(
                  <tr>
                  <th scope="row">{val.data}</th>
                  <td>{val.detail}</td>
                </tr>
                ))
              }

              </tbody>
            </table>
          </div>

          <div className='activities'>
            <h6>My Activities</h6>

            <hr />

            <div className='activity-button '>
              <button className='btn leave-button'>Enter Leave Report</button>
              <button className='btn leave-button'>Request Time Off </button>
            </div>

            <br />
            <hr></hr>
          </div>

        </div>
      </div>

      <LeaveBalance closeBtn={closeBtn} show={show} />

    </div>

  )
}


export default EmpDashboard