import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams } from 'react-router-dom';

export default function Home() {

const [users,setUsers]=useState([]);

const {id} = useParams()

    useEffect(() =>{
       loadUsers();

    }, []);
    const loadUsers=async ()=>{
        const result = await axios.get("http://localhost:9092/api/Taskers");
        setUsers(result.data);
    };
    const deleteUser = async(id)=>{
        //console.log(id)
        await axios.delete(`http://localhost:9092/api/deletetask/${id}`)
        console.log("delee")
        loadUsers()

    }
    const complete = async(id)=>{

      await axios.get(`http://localhost:9092/api/TaskComplete/${id}`)
        console.log(id)
        loadUsers()

    }
    

  return (
    <div className="container">
        <div className="py-4">
       <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col"></th>
      
      <th scope="col">Scheduled Tasks</th>
      
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    {
       users.map((user,index)=>(

        <tr>
      <th scope="row" key={index}>{index+1} &nbsp;
      <button className="btn btn-light" 
      onClick={()=>complete(user.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
      <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
    </svg></button></th>
      {/* <input type="checkbox" id="status" name="status" value="completed" onChange={()=>complete(user.id)}></input> */}
      <td>{user.taskName}</td>
      <td><Link className="btn btn-light mx-2" to={`/view/${user.id}`} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" >
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></Link>
      <button className="btn btn-danger mx-2"
      onClick={()=>deleteUser(user.id)}>x</button>
      
      </td>
      
    </tr>

        
        ))
            

        

    }
    
   
  </tbody>
</table>

</div>
    </div>
  )
}
