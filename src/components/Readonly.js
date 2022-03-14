import React from 'react'
import axios from 'axios'
function Readonly({stud}) {
  return (
    <div>
        <td>{stud.Id}</td>
                <td>{stud.name}</td>
                <td>{stud.sex}</td>
                <td>{stud.class}</td>
                <td>{stud.section}</td>
                <td>{stud.phonenumber}</td>
                <td>{stud.membershipfee}</td>
                <td><button onClick={()=>{
                    axios.delete(`http://localhost:3001/api/deletestud/${stud.Id}`)

                }
                }>Delete</button></td>
                <td><button>Update</button></td>
    </div>
  )
}

export default Readonly