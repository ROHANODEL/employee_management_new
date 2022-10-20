import React from 'react'
import '../style/addEmp.scss'

const AddEmp = () => {
    return (

        <div className='main-new'>
            <div className='formToUpdate'>
                        
                <div className="row-new ">
                    <div className="">
                        <label className='txt'>Employee full Name:</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="text" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Role Of Employee:</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="text" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Joining date:</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="date" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Date Of Birth:</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="date" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Experience:</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="text" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Employee Salary :</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="text" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Department Name :</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="text" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Gender :</label>
                    </div>
                    <div className="Gender">
                        <input type="radio" />
                        <lable>Male</lable>&emsp;

                        <input type="radio" />
                        <lable>Female</lable>
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Marital Status :</label>
                    </div>
                    <div className="Gender">
                        <input type="radio" />
                        <lable>Single</lable>&emsp;

                        <input type="radio" />
                        <lable>Married</lable>
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Cell Phone Number :</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="number" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Home Phone Number :</label>
                    </div>
                    <div className="">
                        <input className='inputBox' type="number" />
                    </div>
                </div>

                <div className="row-new">
                    <div className="">
                        <label className='txt'>Enter address:</label>
                    </div>
                    <div className="">
                        <textarea className='inputBox' rows="" cols="50" /><br />
                    </div>
                </div>

                <div className='body-btn'>
                    <button className='btn btn-primary  update-button'>UPDATE</button>
                </div>

            </div>
        </div>
    )
}

export default AddEmp