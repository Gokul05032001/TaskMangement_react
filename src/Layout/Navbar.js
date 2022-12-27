import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        

        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Task Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div>
    <Link className="btn btn-outline-dark" to="/">Home</Link>&nbsp;
    <Link className="btn btn-outline-dark" to="/adduser">Add Task</Link>&nbsp;
    <Link className="btn btn-outline-dark" to="/cmpl">Completed Tasks</Link>
    </div>
  </div>
</nav>


    </div>
  )
}
