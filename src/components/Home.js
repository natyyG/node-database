import './css/home.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Wellcome to home page</h1>
        
        <div className="container">
        <Link to="/Student">
          <button className='box'>
              <h1>Members</h1>
          </button></Link>
          <div   className='box'>
              <h1>Members</h1>
          </div>


        </div>
    </div>
  )
}

export default Home