const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "client","build")))

const port = process.env.PORT || 3001;

const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  }
  app.use(cors(corsOptions))


// app.get("/", (req,res)=>{
//     res.send("<h1>server working</h1>")
// })


app.post("/form", (req,res)=>{
    console.log('Message submitted successfully')
    const form = req.body;
    console.log(form)
    res.send(form)
})


app.listen(port, ()=>{
    console.log("Listening to port " + port)
})