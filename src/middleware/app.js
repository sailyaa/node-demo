const express = require('express')
const userRouter = require('./user_router')

const app = express()

// 中间件完整的结构
// 使用场景：app级别；路由级别；异常处理级别的中间件
// 功能：异常处理；业务处理，然后转交控制权--next；响应请求--结束响应→当做路由的处理函数
// function valid_name_middleware(err, req, res, next) {}

// 
function valid_name_middleware(req, res, next) {
    let {name} = req.query;
    if (!name || !name.length) {
        res.json({
            message: '缺少name参数'
        })
    }else{
        next()
    }
}

app.use('/user', userRouter)

app.all('*', valid_name_middleware)

app.get('/test', (req, res)=>{
    res.json({
        message: '/test'
    })
})


app.listen(3000, ()=>{
    console.log("middleware");
})