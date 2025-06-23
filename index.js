const express= require('express');
const path =require('path');
const cookieParser = require('cookie-parser')

const URL = require("./models/url");

const app = express();
const port = 8000;

const urlRoute  =  require('./routes/url');
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user');

const  {connectToMongoDb } = require('./connnect')
const {restrictToLoggedinUserOnly, checkAuth} = require("./middleware/auth")

connectToMongoDb('mongodb://127.0.0.1:27017/cliplink')
.then(()=> console.log("Database connection successful"))
.catch((err)=> console.log(`error connecting data ${err}`))


app.use(express.json())
app.use(express.urlencoded({ extended: false  }))
app.use(cookieParser())

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))



app.use('/url',restrictToLoggedinUserOnly,urlRoute)
app.use('/',checkAuth, staticRoute);
app.use('/user',userRoute);

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

