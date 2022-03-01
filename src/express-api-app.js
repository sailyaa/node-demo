const express = require('express')

const app = express()

// 定义一个api/路由，满足客户端无论使用什么请求方式都可以得到响应

app.all('/demo',(req, res)=>{
    res.json({
        message: '/demo',
        method: req.method
    })
})

// 无论客户端使用任何的uri，我们的服务都可以响应 ，example-日志
// 方案一：app.all
app.all('*', (req, res)=>{
    res.json({
        message: '*',
        method: req.method,
        uri: req.path
    })
})

// 方案二：app.use
app.use('*', (req, res)=>{
    res.json({
        message: '*',
        method: req.method,
        uri: req.path
    })
})

// 路由的拆分

const memberRouter = require('./member.route')
const skuRouter = require('./sku.route')
app.use('/member', memberRouter)
app.use('/sku', skuRouter)

app.listen(3000, ()=>{
    console.log("express-api-app服务启动成功");
})