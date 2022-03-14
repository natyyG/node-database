import React from 'react'

function Edit({stud}) {
    return(
        <tr>
        {setId(stud.Id)}
        <td>{stud.Id}</td>
       <td><input type="text" placeholder={stud.name}/></td>
       <td>
           
               {stud.sex === 'Male' ? <select><option value={stud.sex}>{stud.sex}</option>
               <option value="female">Female</option></select> : 
               <select><option value="female">Female</option>
                   <option value="male">Male</option>
               </select>}
            
       </td>
       <td>
           <select name="class" onChange={(e)=>{
               setClass(e.target.value)
               }}>
               <option value={stud.class}>{stud.class}</option>
               <option value='1'>1</option>
               <option value='1'>2</option>
               <option value='1'>3</option>
               <option value='1'>4</option>
               <option value='1'>5</option>
               <option value='1'>6</option>
               <option value='1'>7</option>
               <option value='1'>8</option>
               <option value='1'>9</option>
               <option value='1'>10</option>
               <option value='1'>11</option>
               <option value='1'>12</option>
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
           {stud.membershipfee === true ? <div><input type="radio" name={stud.name} value="false"/>
           <label for="true">Non Paid</label></div> : <div><input type="radio"  name={stud.name} value="true"/> <label for="true">Paid</label> </div>}
       </div>
       </td>
   </tr>
    )
}

export default Edit