function validateName(){
    const name=document.getElementById("name").value;
    const nameMsg=document.getElementById("nameMsg");

    const pattern = /^[A-Za-z ]+$/;

    if(name===""){
        nameMsg.innerHTML = "";
    }
    else if(!pattern.test(name)){
        nameMsg.innerHTML ="Only characters allowed";
        nameMsg.className="error";
    }
    else{
        nameMsg.innerHTML="Valid Name"
        nameMsg.className="success";
    }
}

function validateAge(){
    const age=document.getElementById("age").value;
    const ageMsg=document.getElementById("ageMsg");

    if(age===""){
        ageMsg.innerHTML="";
    }
    else if (isNaN(age)) {
        ageMsg.innerHTML = "Only numbers allowed";
        ageMsg.className = "error";
    }
    else if (age < 18 || age > 60) {
        ageMsg.innerHTML = "Age must be between 18 and 60";
        ageMsg.className = "error";
    }
    else {
        ageMsg.innerHTML = "Valid Age";
        ageMsg.className = "success";
    }
}