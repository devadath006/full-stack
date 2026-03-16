function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
     
    var isValid = true;

    if (name === ""){
        nameError.style.color = "red";
        nameError.innerHTML = "Name is Required";
        isValid = false;
    }
    else{
        nameError.innerHTML = "Nice Name";
        nameError.style.color = "green";
    }

    if (email === ""){
        emailError.innerHTML = "Email is required";
        isValid = false;
    }
    else if(email.indexOf("@")=== -1|| email.indexOf(".")=== -1){
        emailError.innerHTML = "Email is not Valid";
        isValid = false;
    }
    else{
        emailError.innerHTML = "Valid Email";
        emailError.style.color ="green";
    }

    if (password === ""){
        passwordError.innerHTML = "Password is Required";
        isValid = false;
    }
    else if(password.length < 6){
        passwordError.innerHTML = "Password must be at least 6 characters";
        isValid=false;
    }
    else{
        passwordError.innerHTML = "Strong Password";
        passwordError.style.color = "green";
    }

    if(confirmPassword === ""){
        confirmPasswordError.innerHTML = "Confirm Password is Required";
        isValid = false;
    }
    else if(confirmPassword !== password){
        confirmPasswordError.innerHTML = "Passwords do not Match";
        isValid = false;
    }
    else{
        confirmPasswordError.innerHTML = "Passwords Match";
        confirmPasswordError.style.color = "green";
    }
    return isValid;
}