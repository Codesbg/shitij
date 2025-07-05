// computer ko server se connect karne ke liye express and mongoose use hota hi
// request and res express dekhta hi
// constanty listen hota hai "/" use hota hai "/:home route"
// get use hota hai
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
const express = require('express') // require module or import express from " express" // style hai 
const app = express()
const port = 5000 // virtual port jo free hota hai 

app.get('/', (req, res) => {
  res.send('Hello World!') // app ek home rout hai "/" uspe listen karo and request ayi to response do send message hello world
})
// for syntax you can res file, image , audio , video and etc 
app.get("/home",(res,req)=>{  // ye get wala part hai
res.send("open home module")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`) // ye listen wala ki kaha listen karna hai 
})
// yahi server hai 

// now how to deploy your application 

