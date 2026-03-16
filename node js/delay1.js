let count=0;
let interval=setInterval(()=>{
    count++;
    console.log("count:"+count);
    if (count===5){
        clearInterval(interval);
        console.log("ended at 5");
    }
},1000);