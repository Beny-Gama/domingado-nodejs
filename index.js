const express =  require('express')
const server = express();

// http:localhhost:3000/hello?name=F

server.get('/hello', (req, res) => {
    return res.json({
        title: "Hello World",
        messege: "Olá meu amigo tudo bem?"
    });
});

server.listen(3000)