import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './Book'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Borrow from './Borrow'

function Student(props) {
    const [edit, setEdit] = useState(null)
    const [studInfo, setStudInfo] = useState([])
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [mclass, setClass]= useState('')
    const [section, setSection]= useState('')
    const [phonenumber, setPhonenumber]= useState('')
    const [status, setStatus]= useState('')
    const [id, setId] = useState('')
    useEffect(async () =>{
        const url ='http://localhost:3001/api/students'
        await axios.get(url).then((response)=>{
        setStudInfo(response.data)
    })
    },[])
    const submitStudent = () =>{
        const url = "http://localhost:3001/api/poststud"
        axios.post(url, {name: name, sex: sex, mclass: mclass, section: section, phonenumber: phonenumber, status: status})
        setStudInfo([...studInfo, {name: name, sex: sex, class: mclass, section: section, phonenumber: phonenumber, status: status}])
    }
    
    
    const upddateStud = () => {
        const url="http://localhost:3001/api/updatestud"
        axios.put(url, {id: id, name: name, sex: sex, mclass: mclass, section: section, phonenumber: phonenumber, status: status})
        console.log("this is name", name)
        console.log("this is the Id", id)
    }
  return (
    
    <div>
        <form>
            <input type="text" placeholder="Enter Name" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <select name="Sex" onChange={(e)=>{
                setSex(e.target.value)
            }}>
                <option>Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>    
            </select>
            
            <select name="class" onChange={(e)=>{
                setClass(e.target.value)
            }}>
                <option>Grade</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
            </select>
            <select name="section" onChange={(e)=>{
                setSection(e.target.value)
            }}>
                <option>Section</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
                <option value='G'>G</option>
                <option value='H'>H</option>    
            </select>
            <input type="text" placeholder='Phone Number' onChange={(e)=>{
                setPhonenumber(e.target.value)
            }}/>
            <div onChange={(e)=>{
                setStatus(e.target.value)
            }}>
                <input type="radio"  name="drone" value="true"/>
                <label>Paid</label>
                <input type="radio" name="drone" value="false"/>
                <label>Not Paid</label>
            </div>
            <button onClick={submitStudent}>Register</button>
        </form>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Sex</th>
                <th>Class</th>
                <th>Section</th>
                <th>Phone Number</th>
                <th>Membership Status</th>
                <th>Borrowed</th>
                </tr>
            </thead>
            
            {studInfo.map((stud)=>{
                
                return(
                    <tbody key={stud.Id}>
                    
                    {edit !== stud.Id ?
                    <tr>
                    <td>{stud.Id}</td>
                    <td>{stud.name}</td>
                    <td>{stud.sex}</td>
                    <td>{stud.class}</td>
                    <td>{stud.section}</td>
                    <td>{stud.phonenumber}</td>
                    <td>{stud.membershipfee}</td>
                    <td><Link to="/books"><button onClick={()=>
                        props.changeWord(stud.Id)
                        }>Books</button></Link></td>
                    <td><button onClick={()=>{
                        axios.delete(`http://localhost:3001/api/deletestud/${stud.Id}`)
                    }
                    }>Delete</button></td>
                    <td><button onClick={()=>{
                        setEdit(stud.Id)
                        setId(stud.Id)
                    }}>Update</button></td>





                </tr>:
                    <tr>
                    <td>{stud.Id}</td>
                    <td><input type="text" placeholder={stud.name} onChange={(e)=>{
                setName(e.target.value === ' ' ? e.target.value = (stud.name): e.target.value)
            }}/></td>
       <td>
           
       <select name="Sex" onChange={(e)=>{
                setSex(e.target.value)
            }}>
                <option>Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>    
            </select>
            
       </td>
       <td>
           <select name="class" onChange={(e)=>{
               setClass(e.target.value)
               }}>
               <option value={stud.class}>{stud.class}</option>
               <option value='1'>1</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
               <option value='4'>4</option>
               <option value='5'>5</option>
               <option value='6'>6</option>
               <option value='7'>7</option>
               <option value='8'>8</option>
               <option value='9'>9</option>
               <option value='10'>10</option>
               <option value='11'>11</option>
               <option value='12'>12</option>
           </select>
       </td>
       <td>
           <select name="section" onChange={(e)=>{
               setSection(e.target.value)
               }}>
               <option value={stud.section}>{stud.section}</option>
               <option value='A'>A</option>
               <option value='B'>B</option>
               <option value='C'>C</option>
               <option value='D'>D</option>
               <option value='E'>E</option>
               <option value='F'>F</option>
               <option value='G'>G</option>
               <option value='H'>H</option>    
           </select>
       </td>
       <td>
       <input type="text" placeholder={stud.phonenumber} onChange={(e)=>{
       setPhonenumber(e.target.value)
       }}/>
       </td>
       <td>
           <div onChange={(e)=>{
               setStatus(e.target.value)
            }}>
           {stud.membershipfee === 'true' ? 
                <div>
                    <input type="radio" name={stud.name} value="false"/>
                    <label>Non Paid</label>
                </div> : 
                <div>
                    <input type="radio"  name={stud.name} value="true"/>
                    <label >Paid</label>
                </div>
            }
       </div>
       </td>
       <Link to="/books"><button>Books</button></Link>
       <td><button onClick={upddateStud} >Change</button></td>
                    </tr>
                    }
                </tbody>
                )
            })}
            
        </table>
    </div>
  )
}

export default Student