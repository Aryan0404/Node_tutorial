const http = require('http');
//the above line imports the built in http module
//the below line creates an http sever using.createServer()
//which takes in two parameters req and res and the callback function is executed everytime a client calls the server

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        //res.end method is used to send the response back to the client
        //here the backslash acts as the root path to the website
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        //this is the response the client gets for the url /about
        res.end('Here is about our short history');
    }
    //this message goes for the error
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home`);
});

server.listen(5000);
