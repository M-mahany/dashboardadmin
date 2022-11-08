import React from 'react';
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

const List = ({path,pathNew}) => {
    return ( 
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable path={path} pathNew={pathNew}/>
            </div>
        </div>
     );
}
 
export default List;