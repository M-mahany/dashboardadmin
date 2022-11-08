import React, { useState } from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';


const Datatable = ({path,pathNew}) => {

const [data,setData] = useState(userRows)

const handleDelete = (id)=>{
setData(data.filter((item)=>item.id !==id));
};

const actionColoumn =[
{
    field: 'action', 
    headerName: 'Action', 
    width: 200,
renderCell: (params)=>{
return (
<div className="cellAction">
    <Link to={path} style={{textDecoration:"none"}}>
    <div className="viewButton">View</div>
    </Link> 
    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
</div>
);
}, 
},
];
    return ( 
        <div className="datatable">
            <div className="datatableTitle">
            Add New User
            <Link to={pathNew} className="link">
            Add New
            </Link>
            </div>
 <DataGrid
 className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColoumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        </div>
     );
}
 
export default Datatable;