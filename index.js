const http = require('http');
const path = require('path');
const fs = require('fs');
const Person = require('./person');

const server = http.createServer((req, res) => {
    console.log(req.url);//return url requested, like /home or /index
    if(req.url == '/'){
        let person = new Person('Marcelo Home!', 27);
        const p = JSON.stringify(person);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(p);
    }else if(req.url == '/about'){
        let person = new Person('Marcelo About!', 27);
        const p = JSON.stringify(person);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(p);
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));