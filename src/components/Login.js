import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/login.css'
import axios from 'axios'

function Login() {
  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('')
  let path;
  const checkUser = () => {
    if(username==="manager"){
        if(password === "password"){
            console.log("login successful")
            path = '/home'
        }
        else{
            path='/none'
            
        }
    }else{
        path='/none'
    }
  }
  checkUser()
  return (
    <div className="body">
       <img src="https://media.istockphoto.com/vectors/library-book-vector-id1151849228?k=20&m=1151849228&s=612x612&w=0&h=fI3lkonP2F6MzBRYWr3S8zs0SGYg3ldUZlI25ecbpZQ="/>
        <div className="container">
            <div className="box">
                <div className="boxin">
                    <div className="cont user">
                        <label> <img src="https://www.pngfind.com/pngs/m/643-6438921_admin-comments-admin-icon-png-transparent-png.png" alt=""/></label>
                        <input type="text" placeholder="User Name" onChange={(e)=>{
                            setuserName(e.target.value)
                        }}/>
                    </div>
                    <div className="cont pass">
                        <label> <img src="https://toppng.com/uploads/preview/this-is-a-graphic-reation-of-a-pad-lock-username-and-password-icon-115534595184fsadfncq6.png" alt=""/></label>
                        <input type="text" placeholder="Password" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <Link to={path}><button onClick={username === "manager" && password === "password" ? checkUser() : console.log("")}>Login</button></Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login