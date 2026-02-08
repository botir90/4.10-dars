const express = require("express")
const cors = require("cors")
require("dotenv").config

const kfcrouter = require("./router/kfc.routes")
const app = express()
app.use(cors())
app.use(express.json())

const PORT= process.env.PORT||3001
//router 
app.use(kfcrouter)
app.listen(PORT,()=>{
    console.log("http://localhost:3001/get_all_kfcs");
    
})