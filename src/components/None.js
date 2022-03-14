import React, {useState} from 'react'

function None() {
  const [name, setName] = useState(null);
  return (
    <div>
        {name === "nati" ?
        <div>
            <h2>True</h2>
        </div>:
        <div>
          <h3>False</h3>
          <button onClick={()=>{
            setName("nati")
          }}>update</button>
        </div>}
    </div>
  )
}

export default None