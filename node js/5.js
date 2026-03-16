const fs=require('fs');
 const data="Sugalle siree";

 fs.writeFile('output.txt',data,(err)=>{
    if(err){
        console.log("Sorry siree,error adichu");
    return;
    }
    console.log("sireee success ahyi");

fs.readFile('input.txt','utf8',(err,content)=>{
    if(err){
        console.log("siree kando ERRORRRRRRRR");
        return;
    }
    console.log(content);
});
 });