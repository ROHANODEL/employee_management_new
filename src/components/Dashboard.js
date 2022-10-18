import React from 'react'
import '../style/dashboard.scss'

const Dashboard = () => {
    return (
        <div class="first">
            <div class="container custom-button">
                <button class="btn btn-primary" type="button">Add Fields</button>
            </div>

            <div class="search container" >
                <label><b>Search :-</b></label>&emsp;&emsp;
                <input type="text" placeholder="Search here" />
            </div>


            <div class="table container">

                <table cellspacing="0" cellpadding="5">
                    <tr>
                        <th class="tableData">Sr.no <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Name Of Employee <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Role <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Join Date <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Experience <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Salary <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Gender <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Phone no <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Address <a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Upadate<a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>
                        <th class="tableData">Delete<a href="#"><i class="fa fa-sort" aria-hidden="true"></i></a></th>

                    </tr>
                    <tr>
                        <td class="tableData">01</td>
                        <td class="tableData">Vishal Taral</td>
                        <td class="tableData">Web Developer</td>
                        <td class="tableData">26 <sup>th</sup>September</td>
                        <td class="tableData">1 month</td>
                        <td class="tableData">15,000</td>
                        <td class="tableData">male</td>
                        <td class="tableData">9176000080</td>
                        <td class="tableData">balaji nagar, nerhe 411041</td>
                        <td class="tableData "><botton class="btn btn-success btn-sm">update</botton></td>
                        <td class="tableData"><botton class="btn btn-danger btn-sm">delete</botton></td>

                    </tr>
                    <tr>
                        <td class="tableData">02</td>
                        <td class="tableData">Rohan Odel</td>
                        <td class="tableData">Web Developer</td>
                        <td class="tableData">26 <sup>th</sup>February</td>
                        <td class="tableData">9 month</td>
                        <td class="tableData">30,000</td>
                        <td class="tableData">male</td>
                        <td class="tableData">9168454580</td>
                        <td class="tableData">katraj</td>
                        <td class="tableData "><botton class="btn btn-success btn-sm">update</botton></td>
                        <td class="tableData"><botton class="btn btn-danger btn-sm">delete</botton></td>


                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dashboard