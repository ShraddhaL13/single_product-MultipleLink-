import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css";

export default function Nav() {
  return (
    <div className='main-div'>
    <div className='nav-container'>
      <button className='btn'>
        <Link to="/">Home</Link></button>
      <button className='btn'>
        <Link to="/Crypto">Cryptocurrency API</Link>
      </button>
      <button className='btn'>
        <Link to="/covid">Covid Dashboard</Link>
      </button>
      <button className='btn'>
        <Link to="/login"> Login</Link>
      </button>
    </div>
    </div>
  )
}
