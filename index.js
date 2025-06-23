const express= require('express');
const path =require('path');

const urlRoute  =  require('./routes/url');
const staticRoute = require('./routes/staticRouter')

const     {connectToMongoDb } = require('./connnect')
const URL = require("./models/url");

connectToMongoDb('mongodb://127.0.0.1:27017/cliplink')
.then(()=> console.log("Database connection successful"))
.catch((err)=> console.log(`error connecting data ${err}`))

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({ extended: false  }))


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use('/url',urlRoute)
app.use('/', staticRoute);


app.get("/url/:shortId", async (req,res)=>{
      const shortId = req.params.shortId;
      const entry = await URL.findOneAndUpdate({
        shortId
      },{ $push: {
        visitHistory: {
            timestamp: Date.now(),
        }, 
      }})

      return res.redirect(entry.redirectURL)

})

app.listen(port , ()=> console.log(`server started at port ${port}`));  

