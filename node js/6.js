const http=require('http');
const url=require('url');
const PORT=3000;

const server=http.createServer((req,res)=>{

    const ParsedUrl=url.parse(req.url,true);
    const query=ParsedUrl.query;
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write("<p><b>Name:</b>"+query.name+"</p>");
    res.write("<p><b>Age:</b>"+query.age+"</p>");
    res.end();
});

server.listen(PORT,()=>{
    console.log(`server is runnning at http://localhost:${PORT}`);
});