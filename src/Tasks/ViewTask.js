import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

export default function Home() {

const [user,setUser]=useState({
   teamName:"",
   description:"",
   status:""

})

const {id} = useParams();

useEffect(()=>{
  loadUser()
},[])

const loadUser = async ()=>{
  const result = await axios.get(`http://localhost:9092/api/TaskById/${id}`)
  setUser(result.data)
}
    

  return (
    <div className="container">
        <div className="py-4">
       <table className="table border shadow">
  <thead>
    <tr>
      
      <th scope="col">Team name</th>
      <th scope="col">Description</th>
      <th scope="col">Task status</th>
      
    
      
    </tr>
  </thead>
  <tbody>
    
      

        <tr>
      
      <td>{user.teamName}</td>
      <td>{user.description}</td>
      <td>{user.status}</td>
      
    </tr>

     
      
            

        

    
   
  </tbody>
</table>
<Link  className="btn btn-outline-danger" to={"/"}>Back to home</Link>
</div>

    </div>
  )
}