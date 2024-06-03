import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import UsersRouts from './Routs/UsersRouts.js';
import connectDB from './database.js';
import LinksRouts from './Routs/LinkRouts.js';
const port = 3000
const app = express()

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.text());

// app.get("/users", UsersController.getList);
// app.get("/users/:id", UsersController.getById);

app.use('/users', UsersRouts);
app.use('/links', LinksRouts);

// app.use(express.json());

// app.get("/tasks/:id",(req,res)=>{
//     res.send("get task by id");
//   })
  
//   app.post("/tasks/",(req,res)=>{
//     res.send("add a new task");
//   })
  
//   app.put("/tasks/:id",(req,res)=>{
//     res.send("update a task");
//   })
  
//   app.delete("/tasks/:id",(req,res)=>{
//     res.send("delete a task");
//   })
  
connectDB().then(()=>{
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
})


