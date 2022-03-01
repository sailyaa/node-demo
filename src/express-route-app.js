// 路由区分的方式： 1、请求的方法类型    2、uri
const express = require('express')

const app = express()

app.get('/name', (req, res)=>{
  res.json({
      name: 'linda'
  })
})

app.post('/name', (req, res)=>{
    res.json({
        name: 'linda'
    })
})

app.get('/user/byname', (req, res)=>{
    let {name} = req.query
    res.json({
        name
    })
})

app.get('/user/byid', (req, res)=>{
    let {id} = req.query
    res.json({
        id
    })
})

app.listen('3000', ()=>{
    console.log("express-route-app-server服务启动成功");
})