const http = require("http");
const server = http.createServer((req, res)=>{
    res.end("Hello world ");
});

server.listen(7777, (req, res)=>{
    console.log(`Listening on PORT `+7777)
});
 
