require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('kashifadotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at chai or code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai or code</h2>')
})

app.get('/github', (req,res)=>{
    res.json({user:'tobi'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

