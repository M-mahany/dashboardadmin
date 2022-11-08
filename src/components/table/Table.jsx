import React from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    
const rows =[
{
id: 1,
product:"Acer Nitro 5",
img: "https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg",
customer:"Jhon Smith",
date:"1 March",
amount: 800,
method: "cash on delivery",
status: "Pending",
},
{
id: 2,
product:"Acer Nitro 5",
img: "https://smartkoshk.com/wp-content/uploads/2021/03/3-40.jpg",
customer:"Jhon Smith",
date:"1 March",
amount: 800,
method: "cash on delivery",
status: "Approved",
},
{
id: 3,
product:"Acer Nitro 5",
img: "https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg",
customer:"Jhon Smith",
date:"1 March",
amount: 800,
method: "cash on delivery",
status: "Approved",
},
{
id: 4,
product:"Acer Nitro 5",
img: "https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg",
customer:"Jhon Smith",
date:"1 March",
amount: 800,
method: "cash on delivery",
status: "Pending",
},
{
id: 5,
product:"Acer Nitro 5",
img: "https://m.media-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg",
customer:"Jhon Smith",
date:"1 March",
amount: 800,
method: "cash on delivery",
status: "Approved",
},
];

    return (  
<TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="ProductImg"/>
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);
}
 
export default List;