import React from 'react'
import '../style/dashboard.scss'

const Dashboard = () => {
    return (
        <div>
            <div className="first">
                <div className="container custom-button">
                    <button className="btn" type="button">Add Fields</button>
                </div>
                <div className="search container" >
                    <label><b>Search</b></label>
                    <input type="text" placeholder="Search here" />
                </div>
                <div className="table container">
                    <table classNameName='table-data' cellspacing="0" cellpadding="5">
                        <tr>
                            <th className="table-th">Sr.no <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Name Of Employee <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Role <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Join Date <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Experience <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Salary <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Gender <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th"> Contact no <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                            <th className="table-th">Address <a href="#"><i className="fa fa-sort" aria-hidden="true"></i></a></th>
                        </tr>
                        <tr>
                            <td className="tableData">Vishal Taral</td>
                            <td className="tableData">Web Developer</td>
                            <td className="tableData">26 <sup>th</sup> September</td>
                            <td className="tableData">1 month</td>
                            <td className="tableData">15,000</td>
                            <td className="tableData">male</td>
                            <td className="tableData">9176000080</td>
                            <td className="tableData">balaji nagar, nerhe 411041</td>
                        </tr>
                        <tr>
                            <td className="tableData">02</td>
                            <td className="tableData">Rohan Odel</td>
                            <td className="tableData">Web Developer</td>
                            <td className="tableData">26<sup>th</sup> February</td>
                            <td className="tableData">9 month</td>
                            <td className="tableData">30,000</td>
                            <td className="tableData">male</td>
                            <td className="tableData">9168454580</td>
                            <td className="tableData">katraj</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard