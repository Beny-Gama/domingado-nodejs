const express = require('express');
const server = express();

server.use(express.json());


let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" },
];

// Corrigido aqui: '/customers'
server.get('/customers', (req, res) => {
    return res.json(customers);
});

server.put('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if ( index >= 0 ) {
        customers[index] = { id: parseInt(id), name, site}
    }
    return res.status(status).json(customers[index])
    
});

server.delete('/customers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1)
    }
    
    return res.status(status).json()

});

const port = 3000
server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});