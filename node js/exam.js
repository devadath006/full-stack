const http=require('http');
const PORT=5000;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if (req.url==='/'){
        res.statusCode=200;
        res.write('<h1>Home Page</h1>');
    }else if(req.url==='/about'){
        res.statusCode=200;
        res.write('<h1>About</h1>');
    }else{
        res.statusCode=404;

        res.write('<h1>PAGE NOT FOUND</h1>');
    }
    res.end();
});
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});