import React from 'react'
const date = new Date();
date.getDate();
let penality;
const currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
function Borrow({studid, bookid}) {
    const stud = studid
  return (
    <div>
        <p>student id {stud} book id {bookid}</p>
        <button onClick={()=>{
            console.log(studid)
            console.log(bookid)
            console.log(currentDate)
        }}>Borrow</button>
    </div>
    

  )
}

export default Borrow