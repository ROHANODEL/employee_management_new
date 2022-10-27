import React from 'react'
import '../style/empDashboard.scss'

const EmpDashboard = () => {
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
            <label className='emp-name'>Vishal S. Taral</label><br /><br />
            <button className='btn btn-primary'>My profile</button><br /><br />
            <button className='btn btn-primary'>My Team</button>
          </div>

          <div className='leave col'>
            <h6>Leave Balance as of 21/10/2022</h6><br />
            <div className='leave-count'>
              <div className='emp-leave col'>
                <label>Vacation Leave in this month :</label>
                <span class="badge">5 days</span>
              </div>

              <div className='emp-leave col one'>
                <label>Sick Leave in this month :</label>
                <span class="badge">5 days</span>
              </div>

              <div className='emp-leave col one'>
                <label>Vacation Holdind Account in days :</label>
                <span class="badge">5 days</span>
              </div>

            </div>
            <a href='#'>Full Leave Balance Information</a>
          </div>

        </div>

        <div className='outer-second'>
          <div className='payment-info'>
            <table class="table table-active">
              {/* <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <th scope="row">Payment Information</th>
                  <td>Mark</td>
                </tr>

                <tr>
                  <th scope="row">Last Paid date:</th>
                  <td><a href='#'> 21/10/2022 </a></td>
                </tr>

                <tr>
                  <th scope="row">Earning</th>
                  <td>Mark</td>
                </tr>

                <tr>
                  <th scope="row">Benefits</th>
                  <td>Mark</td>
                </tr>

                <tr>
                  <th scope="row">Taxes</th>
                  <td>Mark</td>
                </tr>

                <tr>
                  <th scope="row">Job Summary</th>
                  <td>Mark</td>
                </tr>

                <tr>
                  <th scope="row">Employee Summary</th>
                  <td>Mark</td>
                </tr>

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
    </div>

  )
}


export default EmpDashboard