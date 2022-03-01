const express = require('express')
const router = express.Router()

router.get('/list', (req, res)=>{
    res.json({
        message: '/list',
        method: req.method,
        uri: req.path
    })
})

module.exports = router