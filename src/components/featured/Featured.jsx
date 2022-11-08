import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from 'react';
import'./featured.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  KeyboardArrowDownIcon  from "@mui/icons-material/KeyboardArrowDown";
import  KeyboardArrowUpOutlinedIcon  from "@mui/icons-material/KeyboardArrowUpOutlined";


const Featured = () => {
    return ( 
        <div className="featured">

    <div className="top">
    <h1 className="title">Total Revenue</h1>
    <MoreVertIcon fontSize="small"/>
    </div>

    <div className="bottom">
        <div className="featuredchart">
<CircularProgressbar value={80} text={"80%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">EGP 8000</p>
        <p className="desc">
            Previous transactions processing. 
            Last payments may not be included.
        </p>

<div className="summary">
    <div className="item">
        <div className="itemTitle">Target</div>
        <div className="itemResult negative">
        <KeyboardArrowDownIcon fontSize="small"/>
        <div className="resultAmount">EGP 100</div>
        </div>
    </div>
    <div className="item">
        <div className="itemTitle">Last Week</div>
        <div className="itemResult positive">
        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
        <div className="resultAmount">EGP 100</div>
        </div>
    </div>
    <div className="item">
        <div className="itemTitle">Last Month</div>
        <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
            <div className="resultAmount">$12.4K</div>
        </div>
    </div>
</div>

    </div>
    </div>
     );
}
 
export default Featured;