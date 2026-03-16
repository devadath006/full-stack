const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});

    if(req.url==='/'){
        //res.statusCode=200;
        res.write('<h1>Home Page</h1>');
        res.write('<p>home page ahne</p>');
    }
    else if(req.url==='/about'){
        //res.statusCode=200;
        res.write('<h1> About </h1>');
        res.write('<p>about page ahne</p>');
    }
    else{
        res.statusCode=404;
        res.write('<h1>404-Not Found</h1>');
    }
    res.end();
});
server.listen(2000,()=>{
    console.log('server is running http://localhost:2000');
});