function calculate(){
    let exp=document.getElementById("expression").value;
if (exp.trim()==""){
    document.getElementById("result").innerHTML="Please enter an expression";
    return;
}

try{let output=eval(exp);

    document.getElementById("result").innerHTML="Result:"+output;
}
catch(error){
    document.getElementById("result").innerHTML="Please enter a valid Expression";
}
} 