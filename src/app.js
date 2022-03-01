// 如何监听文件的变化自动编译 - nodemon

const http = require("http")

const server = http.createServer((req, res)=>{
    res.end("hello nodemon")
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log("server启动成功");
})