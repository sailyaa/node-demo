const express = require('express')

const router = express.Router()


router.use(function(req, res, next) {
    console.log("log from router");
    next()
})

function valid_login_params(req, res, next) {
    let {name, password} = req.query;
    if (!name || !password) {
        res.json({
            message: '登录参数校验失败'
        })
    } else {
        req.formData = {
            name,password
        }
        next()
    }
}

router.get('/demo',[valid_login_params], (req, res)=>{
    let {formData} = req
    res.json({
        formData,
        message: 'from router demo'
    })
})

module.exports = router