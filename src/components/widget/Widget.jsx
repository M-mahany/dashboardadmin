import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {

    let data;
    //temporary data "fake"
const amount =100;
const perc = 20;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon: <PersonOutlineIcon className="icon"
                style={{
                    backgroundColor:"rgba(255,0,0,0.2)",
                    color:"crimson",
                }}
                />,
    };
    break;
    case "order":
        data={
            title:"ORDERS",
            isMoney:false,
            link:"View all orders",
            icon: <ShoppingCartOutlinedIcon className="icon"
            style={{
                backgroundColor:"rgba(218,165,32,0.2)",
                color:"goldenrod",
            }}
            />,
};
break;
case "earning":
    data={
        title:"EARNINGS",
        isMoney:true,
        link:"View net earningns",
        icon: <MonetizationOnOutlinedIcon className="icon"
        style={{
            backgroundColor:"rgba(0,128,0,0.2)",
            color:"green",
        }}
        />,
};
break;
case "balance":
    data={
        title:"BALANCE",
        isMoney:true,
        link:"See details",
        icon: <AccountBalanceWalletIcon className="icon"
        style={{
            backgroundColor:"rgba(128,0,128,0.2)",
            color:"purple",
        }}
        />,
};
break;
    default:
        break;
    }

    return ( 
        <div className="widget">
    <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
    </div>

    <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {perc} %
            </div>
            {data.icon}
    </div>
        </div>
     );
}
 
export default Widget;