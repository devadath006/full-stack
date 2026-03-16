function add(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
    document.getElementById("Result").innerHTML = "Please enter both numbers";
    return;
}
    document.getElementById("Result").innerHTML="Result:"+(num1+num2);
}
function subtract(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
    document.getElementById("Result").innerHTML = "Please enter both numbers";
    return;
}
    document.getElementById("Result").innerHTML="Result:"+(num1-num2);
}
function divide(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
    document.getElementById("Result").innerHTML = "Please enter both numbers";
    return;
}
    if(num2 === 0){
        document.getElementById("Result").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("Result").innerHTML = "Result: " + (num1 / num2);
    }
}
function multiply(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
    document.getElementById("Result").innerHTML = "Please enter both numbers";
    return;
}
    document.getElementById("Result").innerHTML="Result:"+(num1*num2);
}