

// form hide show toggle button 
const taskform = document.getElementById("task-form");


function display() {
    if (taskform.style.display == "flex") {
        taskform.style.display = "none"
    }
    else {
        taskform.style.display = "flex"
    }
}


function clearForm() {
    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
    document.getElementById("asignee").value = "";
}





var toDo = document.getElementById("to-do");
var inProgress = document.getElementById("in-progress");
var completed = document.getElementById("completed");


function submit() {
    let task = document.getElementById("task").value;
    let description = document.getElementById("description").value;
    let asignee = document.getElementById("asignee").value;
    let taskArea = document.getElementById("select-todo").value;
    const person = asignee.toUpperCase();
    let latter = person.charAt(0);

    const card = document.createElement("div")
    taskArea !== "COMPLETED" && (card.draggable="true");
    if (taskArea ==="COMPLETED") {
        card.draggable=false;
    }
    card.className = "task-container";

    card.addEventListener("dragstart", () => {
        draggedElement = card ;
    
    })


    card.innerHTML = `
<p style="font-weight:600 " id="task-name">${task}</p>
<p id="description"  >${description}</p>
<div class="asign-box">
    <div class="asign-to"><span class="latter">${latter}</span>${person}</div>
    <p id="title">${taskArea}</p>
</div>`


if (task != "" && description != "" && asignee != "") {
    if (taskArea === "TO DO") {

        toDo.appendChild(card);
    } else if (taskArea == "IN PROGRESS") {

        inProgress.appendChild(card);
    }
    else {

        completed.appendChild(card);
    }
    display();
}
else {
    alert("Sorry, All fields are required to be field")
}
clearForm();  


}

