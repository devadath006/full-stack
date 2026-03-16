const http=require('http');
const PORT=5000;
const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello Sabin Sir');
    res.end();
});
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});