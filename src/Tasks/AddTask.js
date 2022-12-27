import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser]=useState({
        taskName:"",
        teamName:"",
        description:"",
        status:"Not complete"

    })

    const{taskName,teamName,description}=user

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})

    }

    const onSubmit = async (e)=>{

        e.preventDefault();
        await axios.post("http://localhost:9092/api/Tasksave",user)
        navigate("/");

    };

  return (
    <div className="container">
        <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add Tasks</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                
                <label htmlFor="taskName" className="form-label">Task</label>
                <input type={"text"}
                className="form-control" placeholder="Enter the Task name" name="taskName" value={taskName}
                onChange={(e)=>onInputChange(e)}></input>

            </div>
            <div className="mb-3">
                <label htmlFor="teamName" className="form-label">Team Name</label>
                <input type={"text"}
                className="form-control" placeholder="Enter the Team name" name="teamName" value={teamName}
                onChange={(e)=>onInputChange(e)}></input>

            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Task Description</label>
                <textarea 
                className="form-control" placeholder="Enter the Task Description" name="description" value={description}
                onChange={(e)=>onInputChange(e)}></textarea>

            </div>
            <button type="submit" className="btn btn-outline-primary">submit</button> &nbsp;
            <Link  className="btn btn-outline-danger" to={"/"}>Cancel</Link>
            </form>
        </div>

        </div>  


    </div>
  )
}
