export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230,
renderCell: (params)=>{
return(
    <div className="cellWithImg">
    <img className="cellImg" src={params.row.img}/>
    {params.row.username}
    </div>
);
},
},
{field: 'email', headerName: 'Email', width: 230 },
{field: 'age', headerName: 'Age', width: 70 },
{field: 'status', headerName: 'Status', width: 160,
renderCell: (params)=>{
    return(
    <div className={`cellWithStatus ${params.row.status}`}>
    {params.row.status}
    </div>
    );
},
},
];
export const userRows = [
    {
        id:1,
        username:"Snow",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email:"example@gmail.com",
        age:35,
    },
    {
        id:2,
        username:"Snow2",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email:"example2@gmail.com",
        age:35,
    },
    {
        id:3,
        username:"Snow3",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email:"example3@gmail.com",
        age:35,
    },
    {
        id:4,
        username:"Snow4",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "pending",
        email:"example4@gmail.com",
        age:45,
    },
    {
        id:5,
        username:"Snow5",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email:"example5@gmail.com",
        age:65,
    },
    {
        id:6,
        username:"Snow5",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email:"example5@gmail.com",
        age:65,
    },
    {
        id:7,
        username:"Snow5",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email:"example5@gmail.com",
        age:65,
    },
    {
        id:8,
        username:"Snow5",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email:"example5@gmail.com",
        age:65,
    },
]