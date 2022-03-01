// express :  接收req，处理res，node中的一种web框架

const express = require('express')

const app = express()

app.get('/name', (req, res)=>{
    res.json({
        name: 'linda'
    })
})

app.listen(3000, ()=>{
    console.log("server服务启动成功");
})