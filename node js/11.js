const http = require('http');
const PORT = 5000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.statusCode = 200;// cannot call writeHeader more than once
        res.write("<h1>Home Page</h1>");
        res.write("<p>Welcome to Node.js Routing Example</p>");
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.write("<h1>About Page</h1>");
        res.write("<p>This page is about Node.js HTTP routing.</p>");
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.write("<h1>Contact Page</h1>");
        res.write("<p>Email: contact@example.com</p>");
    } else {
        res.statusCode = 404;
        res.write("<h1>404 - Page Not Found</h1>");
    }
    res.end();
});
server.listen(PORT, () => {
    console.log(`Routing server running at http://localhost:${PORT}`);
});
