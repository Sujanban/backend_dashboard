import React from 'react'
import "./sidebar.css";
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { HomeOutlined,AddCircleOutline, PermIdentityOutlined,Work,Assessment, TimelineOutlined, LocalAtm, LocalMall, AttachMoney } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_items'>
                <div className='sidebar_item'>
                    <h2>Dashboard</h2>
                    <ul>
                        <li className='active'>
                            <HomeOutlined />
                            <a href="">Home</a>
                        </li>
                        <li>
                            <PermIdentityOutlined />
                            <a href="">Students</a>
                        </li>
                        <li>
                            <TimelineOutlined />
                            <a href="">Stats</a>
                        </li>
                    </ul>
                </div>
                <div className='sidebar_item'>
                    <h3>Student</h3>
                    <ul>
                    <li>
                            <AddCircleOutline />
                            <a href="">Create</a>
                        </li>
                        <li>
                            <PermIdentityOutlined />
                            <a href="">Students</a>
                        </li>
                        
                        <li>
                            <TimelineOutlined />
                            <a href="">Stats</a>
                        </li>
                    </ul>
                </div>
                <div className='sidebar_item'>
                    <h3>Transaction</h3>
                    <ul>
                        <li>
                            <AttachMoney />
                            <a href="">Balance</a>
                        </li>
                        <li>
                            <LocalAtm />
                            <a href="">Salary</a>
                        </li>
                        <li>
                            <LocalMall />
                            <a href="">Expenses</a>
                        </li>

                    </ul>
                </div>
                <div className='sidebar_item'>
                    <h3>Staff</h3>
                    <ul>
                        <li>
                            <Work />
                            <a href="">Manage</a>
                        </li>
                        <li>
                            <TimelineOutlined />
                            <a href="">Analytics</a>
                        </li>
                        <li>
                            <Assessment />
                            <a href="">Reports</a>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}
