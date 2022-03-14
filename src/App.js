
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Book from "./components/Book";
import About from "./components/About";
import axios from "axios";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import None from "./components/None";
import Student from "./components/Student";
import Borrow from "./components/Borrow";
function App() {
  const [movieName, setmovieName] = useState('')
  const [movieReview, setmovieReview] = useState('')
  const [movieReviewList, setmovieReviewList] = useState([])
  const [newReview, setNewReview] = useState('')
  const [singleName, setSingleName] = useState('')
  const [studId, setstudId] = useState('5')
  console.log(studId)
  // useEffect(()=>{
  //   const url = 'http://localhost:3001/api/get'
  //   axios.get(url).then((response) => {
  //     setmovieReviewList(response.data);
  //   },[])
  
  // })

  // const rundelete = (id)=>{
  //   axios.delete(`http://localhost:3001/api/delete/${id}`)
  //   console.log("This is the passed movie id", id)
  //   setmovieReviewList([...movieReviewList])
  // }

  const submitreview =()=>{
    const url = 'http://localhost:3001/api/insert'
    axios.post( url, {movieName: movieName, movieReview: movieReview})
    setmovieReviewList([...movieReviewList, {movieName: movieName, movieReview: movieReview}])
  }
  const updateReview = () =>{
    const url ='http://localhost:3001/api/update'
    axios.put(url, {movieName: singleName, movieReview: newReview})
  }
  // const deleteReview = (deletethis) => {
  //   axios.delete(`http://localhost:3001/api/delete/${deletethis}`)
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Student />}/>
          <Route path="/crud" element={
            <div>
            <h1>CRUD APPLICATION</h1>
            <div>
              <input type="text" placeholder='Movie name' onChange={(e)=>{
                setmovieName(e.target.value)
              }}/>
              <input type="text" placeholder='Review' onChange={(e)=>
              setmovieReview(e.target.value)}/>
              <button onClick={submitreview}>Submit</button>
            </div>
            {movieReviewList.map((movie)=>{
              return(
                <div key={movie.id}>
                  <h3>{movie.moviename}</h3>
                  <h4>{movie.moviereview}</h4>
                  <button
                  onClick={() => {
                    axios.delete(`http://localhost:3001/api/delete/${movie.id}`)
                  }}
                  >Delete</button>
                  <input type="text" onChange={(e)=>{
                      setNewReview(e.target.value);
                      setSingleName(movie.moviename)
                      
                  }}/>
                  <button onClick={updateReview}>Update</button>
                  {/* <button onClick={deleteReview(movie.moviename)}>Delete</button>
                  <input type="text" />
                  <button>Update</button> */}
                </div>
              )
            })}
            </div>
          }/>
          <Route path='/none' element={<None/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/adminlogin" element={<Login />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Student" element={<Student stud = {(id) => {setstudId(id)}}/>}/>
          <Route path="/books" element={<Book />}/>
          <Route path="/borrow" element={<Borrow />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
