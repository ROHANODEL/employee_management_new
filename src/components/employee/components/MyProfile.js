import React from 'react'
import '../style/myprofile.scss';

const MyProfile = () => {
  return (
    <div className='myProfile'>
      <div className='parent container'>
        <div className='child1'>
          <div className='profile-image'>
            <img src={require('../../../images/imgfirst.jpg')} className='img-style' />
          </div>

          <div>
            <h4>Apurv khadamkar</h4>
          </div>

          <div className='prof bg-light rounded-2 p-2' >
            <h6><li><u>Addmission Date</u></li></h6>
            <lable>26 September 2022</lable>
          </div>

          <div className='prof bg-light rounded-2 p-2'>
            <h6><li><u>Manager</u></li></h6>
            <lable>Aashish Gaikwad</lable>
          </div>

          <div className='prof bg-light rounded-2 p-2'>
            <h6><li><u>Department</u></li></h6>
            <lable>I.T.</lable>
          </div>
        </div>

        <div className='child2'>
          <ul className="nav nav-tabs contains" id="myTab" role="tablist">

            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                role="tab" aria-controls="home" aria-selected="true">Personal & Contact Detail</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
                role="tab" aria-controls="profile" aria-selected="false">Document</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                role="tab" aria-controls="contact" aria-selected="false">WorkData</button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#additional-data" type="button"
                role="tab" aria-controls="additional" aria-selected="false">Additional Data</button>
            </li>

          </ul>

          <div className="tab-content container" id="myTabContent">
            <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className='section-1'>
                <div className='main-heading container'>
                  <div>
                    <h4><b><i>Personal Detail :</i></b></h4>
                  </div>

                  <div>Vishal</div>
                </div>
                <div>
                  <br></br>
                  <div className='container details'>
                    <div className='name'>
                      <h6 className='sub-heading'>Full Name</h6>
                      <label>Vishal Sanjay Taral</label>
                    </div>
                  </div>

                  <div className='container newcontent'>
                    <div className='abcd'>
                      <h6>birth date</h6>
                      <label>14 dec 1997</label>
                    </div>
                    <div className='abcd'>
                      <h6>Nationality</h6>
                      <label>Indian</label>
                    </div>
                  </div>

                  <div className='container newcontent'>
                    <div className='abcd'>
                      <h6>Gender</h6>
                      <label>14 dec 1997</label>
                    </div>
                    <div className='abcd'>
                      <h6>Marital Status</h6>
                      <label>Single</label>
                    </div>
                  </div>

                  <div className='container details motherName'>
                    <div className='name'>
                      <h6 className='sub-heading'>Mothers Name</h6>
                      <label>Vishal Sanjay Taral</label>
                    </div>
                  </div>

                  <div className='container newcontent'>
                    <div className='abcd'>
                      <h6>State</h6>
                      <label>Maharashtra</label>
                    </div>
                    <div className='abcd'>
                      <h6>City</h6>
                      <label>Aurangabad</label>
                    </div>
                  </div>

                  <div className='section-2'>
                    <br></br>
                    <div className='main-heading container '>
                      <div>
                        <h4><b><i>Contact Detail :</i></b></h4>
                      </div>
                    </div>

                    <div>
                      <div className='container details motherName'>
                        <div className='name abcd'>
                          <h6 className='sub-heading'>Email ID</h6>
                          <label>vishaltaral09@gmail.com</label>
                        </div>
                      </div>

                      <div className='container newcontent'>
                        <div className='abcd'>
                          <h6>Permanent Address</h6>
                          <label>Kauli Tal: Soygaon Dist: Aurangabad pin </label>
                        </div>
                        <div className='abcd'>
                          <h6>Temporary Address </h6>
                          <label>Balaji Nagar, nerhe, katraj  </label>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>

            <div className='tab-pane fade document container' id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className='card-body cards'>
                <div className='upload-doc'>
                  <div className="col-lg-6 ">
                    <span><i className='fa fa-cloud-upload fa-5x' aria-hidden="true"></i></span>
                    <p className='text'>Choose your Addhar ID</p>
                    <form>
                      <input type='file' className='fileInput' id='aadharInput'></input>
                    </form>
                  </div>
                  <div className='doc-display'>
                    <div className='doc-image'>
                      <img src={require('../../../images/aadharID.jpg')} classname='img-style' />
                    </div>
                  </div>

                </div>

                <div className='upload-doc'>
                  <div className='col-lg-6'>
                    <span><i className='fa fa-cloud-upload fa-5x' aria-hidden="true"></i></span>
                    <p className='text'>Choose your PAN Card</p>
                    <form>
                      <input type='file' className='fileInput' id='panInput'></input>
                    </form>
                  </div>
                  <div className='doc-display'>
                    <div className='doc-image'>
                      <img src={require('../../../images/aadharID.jpg')} className='img-style' />
                    </div>
                  </div>

                </div>

                <div className='upload-doc'>
                  <div className='col-lg-6'>
                    <span><i className='fa fa-cloud-upload fa-5x' aria-hidden="true"></i></span>
                    <p className='text'>Choose your Address proof</p>
                    <form>
                      <input type='file' className='fileInput' id='addressInput'></input>
                    </form>
                  </div>
                  <div className='doc-display'>
                    <div className='doc-image'>
                      <img src={require('../../../images/aadharID.jpg')} className='img-style' />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              
            </div>
            <div className="tab-pane fade" id="additional-data" role="tabpanel" aria-labelledby="info-tab">SHUBHAGI</div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default MyProfile