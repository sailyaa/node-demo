const express = require('express')

const app = express()

// 异常捕获
// express内置异常处理
// 自定义异常处理
// 在express框架中，并不认为404是异常，要自定义中间件处理

app.get('/demo', (req, res)=>{
    throw new Error('测试异常功能')
})

function error_handler_middleware(err, req, res, next) {
    if (err) {
        let {message} = err
        res.status(500).json({
            message: `${ message || '服务器异常'}`
        })
    } else {
        
    }
}

function not_found_handler(req, res, next) {
    res.json({
        message: 'api不存在'
    })
}

app.use(not_found_handler)
app.use(error_handler_middleware)



app.listen(3000, ()=>{
    console.log("error-middlreware服务启动成功");
})