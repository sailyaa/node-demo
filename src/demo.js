// const os = require('os')
// const cpus = os.cpus()
// console.log(cpus.length);

// const memtotal = os.totalmem()
// console.log(memtotal/1024/1024/1024);

// const freemem = os.freemem()
// console.log(freemem/1024/1024/1024);

// web 服务
const http = require("http")

const server = http.createServer((req, res) =>{
    res.end("hello node")
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("服务启动成功");
})