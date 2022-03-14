import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Borrow from './Borrow'
function Book({studid}) {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState('')
    const [copy, setCopy] = useState('')
    const [year, setYear] = useState('')
    const [grade, setGrade] = useState('')
    const [id, setId] = useState(null)

    useEffect(()=>{
        const url ='http://localhost:3001/api/books'
        axios.get(url).then((response)=>{
            setBooks(response.data)
        })
    },[books])
    const submitbook = () =>{
        const url = 'http://localhost:3001/api/addbook'
        axios.post(url, {title: title, copy: copy, year: year, grade: grade, studid: studid})
        setBooks([...books,  {title: title, copy: copy, year: year, grade: grade, studid: studid}])
    }
    const updatebook = () =>{
        const url='http://localhost:3001/api/updatebook'
        axios.put(url,  {id: id, title: title, copy: copy, year: year, grade: grade, studid: studid})
    }
    
  return (
    <div>
        <form>
            <input type="text" placeholder='Title' onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <input type="text" placeholder='Number of copies' onChange={(e)=>{
                setCopy(e.target.value)
            }}/>
            <input type="text" placeholder="Year Published" onChange={(e)=>{
                setYear(e.target.value)
            }}/>
            <input type="text" placeholder='Grade' onChange={(e)=>{
                setGrade(e.target.value)
            }}/>
            <p>{studid}</p>
            <button onClick={submitbook}>Register</button>
        </form>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Book Title</th>
                    <th>Number of Copies</th>
                    <th>Year Published</th>
                    <th>Grade</th>
                    </tr>
                </thead>
                
                {books.map((book)=>{
                    return(
                        <tbody key={book.id}>
                            {id !== book.id ?
                            <tr>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.nocopies}</td>
                                <td>{book.year_published}</td>
                                <td>{book.for_grade}</td>
                                <td>{studid}</td>
                                <td><button onClick = {()=>{
                                    axios.delete(`http://localhost:3001/api/deletebook/${book.id}`)
                                }}>Delete</button></td>
                                <td><button onClick={()=>{
                                    setId(book.id)
                                }}>Update</button></td>
                            </tr>:
                            <tr>
                                <td>{book.id}</td>
                                
                                <td><input type="text" placeholder={book.title} onChange={(e)=>{
                                    setTitle(e.target.value)
                                }}/></td>
                                <td><input type = "text" placeholder={book.nocopies} onChange={(e)=>{
                                    setCopy(e.target.value)
                                }}/></td>  
                                <td><input type="text" placeholder={book.year_published} onChange={(e)=>{
                                    setYear(e.target.value)
                                }}/></td>
                                <td><input type="text" placeholder={book.for_grade} onChange = {(e)=>{
                                    setGrade(e.target.value)
                                }}/></td>
                                <td><button onClick={updatebook}>Change</button></td>  
                            </tr>}
                        </tbody>
                    )
                    })}
        </table>
        
        
    </div>
  )
}

export default Book