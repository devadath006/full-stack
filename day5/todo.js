function addtask(){
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a valid task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function(){
        li.style.textDecoration =
            li.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(event){
        event.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}