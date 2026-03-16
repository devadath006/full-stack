function validateForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
    if(name==""||email==""||password==""||confirmPassword==""){
        alert("All fields are required");
        return false;
    }
    if (email.indexOf("@")===-1||email.indexOf(".")===-1){
        alert("email invalid,give a valid email");
        return false;
    }
    if(password.length<6){
        alert("Password must be atleast 6 characters Long");
        return false;
    }
    var hasNumber=false;
    for(var i=0;i<password.length;i++){
        if(password[i]>="0"&&password[i]<="9"){
            hasNumber=true;
            break;
        }

    }
    if(!hasNumber){
        alert("Password must contain at least one number");
        return false;
    }
    if(password!=confirmPassword){
        alert("Passwords do not match");
        return false;
    }
    alert("Form submitted Succesfully");
    return true;
}