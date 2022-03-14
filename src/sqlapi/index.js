const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"cruddb"
})


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


// app.get('/api/userinfo', (req, res)=>{
//     const username = req.params.username
//     const password = req.body.password
//     const sql="SELECT password FROM library_managers  WHERE  username = 'user'"
//     db.query(sql, (err, result) => {
//         if(err){
//             console.log(err)
//             console.log("user and password doesn't exist")
//         }else{
//             console.log("this is the request",req)
           
//             console.log("sucessfully logedin")
//         }
//     })
// })
app.get('/api/userinfo', (req, res) => {
    const username = req.params.username
    const password = req.params.password
    console.log("save",username, password)
    const sql="SELECT password FROM library_managers  WHERE  username = 'user'"
    db.query(sql, username, (err, result) =>{
        if(err) console.log(err)
        console.log("updated successfully")
        console.log(result)
        console.log(username)
    })
})

app.get('/api/students', (req, res)=>{
    const sql = "SELECT * FROM student"
    db.query(sql, (err, result) =>{
        if(err) console.log(err)
        res.send(result);
    })
})
app.post('/api/insert', (req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const sql= "INSERT INTO movie_reviews (moviename, moviereview) VALUES (?,?)"
    db.query(sql, [movieName, movieReview], (err, result)=>{
        if(err){
            console.log("error have occured")
            
        }else{
            console.log(result)
            console.log("name and review ",movieName, movieReview)
            console.log("sucess")
        }
    })
})
app.post('/api/poststud', (req, res)=>{
    const name = req.body.name;
    const sex = req.body.sex;
    const mclass = req.body.mclass
    const section = req.body.section
    const phonenumber = req.body.phonenumber
    const status = req.body.status
    const sql = "INSERT INTO student (name, sex, class, section, phonenumber, membershipfee) VALUES (?, ?, ?, ?, ?, ?)"
    db.query(sql, [name, sex, mclass, section, phonenumber, status], (err, result)=>{
        if(err) {console.log(err)}
        else{
        console.log(result)
        console.log("sucess")
        }
    })
    
})
app.post('/api/addbook', (req, res)=>{
    const title = req.body.title
    const nocopies = req.body.copy
    const year = req.body.year
    const grade = req.body.grade
    const id = req.body.studid
    sql="INSERT INTO book (title, nocopies, year_published, for_grade) VALUES (?, ?, ?, ?)"
    db.query(sql, [title, nocopies, year, grade], (err, result) => {
        if(err) {
            console.log(err)
            console.log("result", title, nocopies, year, grade, id)
        }else{
        console.log("Book registered")
        console.log(id)
        }
    })
})
app.delete('/api/deletestud/:Id', (req, res)=>{
    const id= req.params.Id
    const sql = "DELETE FROM student WHERE Id = ?"
    db.query(sql, id, (err,result)=>{
        if(err){
            console.log(err)
            console.log(id)
        }else{
            console.log("stud deleted")
        }
    })

})
app.delete('/api/deletebook/:id', (req, res)=>{
    const id = req.params.id
    const sql = "DELETE FROM book WHERE id = ?"
    db.query(sql, id, (err, result)=>{
        if(err){
            console.log(err)
            console.log("this is the error")
            console.log(id)
            
        }else{
            console.log("sucessfully deleted book")
        }
    })
})
app.get('/api/get', (req,res)=>{
    const sql = "SELECT * FROM movie_reviews";
    db.query(sql, (err, result)=> {
        if(err){
            console.log("Error occured")
        }
        else{
            res.send(result)
        }
    }) 
})

app.delete('/api/delete/:id', (req, res)=>{
    const id = req.params.id
    console.log("this is name of the move ",id)
    const sql = "DELETE FROM movie_reviews WHERE id = ?"
    db.query(sql, id, (err, result) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
})
app.put('/api/updatestud', (req, res)=>{
    const name = req.body.name;
    const sex = req.body.sex;
    const mclass = req.body.mclass
    const section = req.body.section
    const phonenumber = req.body.phonenumber
    const status = req.body.status
    const id = req.body.id
    const sql= "UPDATE 	student set name = ?, sex = ?, class = ?, section = ?, phonenumber = ?, membershipfee = ?  WHERE Id = ?"
    db.query(sql, [name,sex, mclass, section, phonenumber, status, id], (err, result)=>{
        if(err) console.log(err)
        console.log("student updated")
        console.log("this is name",name, sex, mclass, section, phonenumber, status, id)
    })
})
app.put('/api/update', (req, res) => {
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    console.log("save",movieName, movieReview)
    const sql = "UPDATE movie_reviews SET moviereview = ? WHERE moviename = ?"
    db.query(sql, [movieReview, movieName], (err, result) =>{
        if(err) console.log(err)
        console.log("updated successfully")

    })
})
app.put('/api/updatebook', (req, res)=>{
    const id = req.body.id
    const title = req.body.title
    const nocopies = req.body.copy
    const year = req.body.year
    const grade = req.body.grade
    
    const sql = "UPDATE book SET title = ?, nocopies = ?, year_published = ?, for_grade = ? WHERE id = ?"
    db.query(sql, [title, nocopies, year, grade, id], (err, result)=>{
        if(err){
            console.log(err)
            console.log(title, nocopies, year, grade)
            console.log("Error have occured")
        }else{
            console.log("sucess")
            console.log(title, nocopies, year, grade)
        }
    })
})
app.get('/api/books', (req,res)=>{
    const sql = "SELECT * FROM book"
    db.query(sql, (err, result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})

app.get('/', (req, res)=>{
    res.send("homepage")
})


app.listen('3001', ()=>{
    console.log("server running")
})