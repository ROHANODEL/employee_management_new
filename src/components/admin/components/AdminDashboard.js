import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../../reducers/adminReducer'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/adminDashboard.scss';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const updateVal = useSelector((state) => state.admin.adminData)
    console.log(updateVal)
    const updateHandler = () => {
        dispatch(getdata())
    }

    const addHandler = () => {
        navigate('./addemp')
    }

    return (
        <div class="first">
            <div class="container custom-button">
                <button class="btn btn-primary" type="button" onClick={addHandler}>Add Fields</button>
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
                        <td class="tableData "><botton class="btn btn-success btn-sm" onClick={handleShow}>update</botton></td>
                        <td class="tableData"><botton class="btn btn-danger btn-sm">delete</botton></td>
                    </tr>
                </table>
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AdminDashboard