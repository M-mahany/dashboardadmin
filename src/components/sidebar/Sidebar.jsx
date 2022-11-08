import React, { useContext } from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext);

    return ( 
        <div className="sidebar">

            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">FlexDev.</span>
                </Link>
            </div>

            <hr/>

            <div className="center">
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <ProductionQuantityLimitsOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <InventoryOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delievry</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <MonitorHeartOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AssignmentIndOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
        <div className="coloroption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="coloroption" onClick={()=>dispatch({type:"DARK"})} ></div>
            </div>
        </div>
     );
}
 
export default Sidebar;