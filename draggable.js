

let boxes =document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    let box=boxes[i];
    // box.addEventListener("dragenter",()=>{
        
    // })
    
    box.addEventListener("dragover", (e) => e.preventDefault())

    

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        if(box.id === "completed"){
            draggedElement.draggable = false ; // "false" => Boolean("false") => true
        }
        // console.log(draggedElement)
        box.appendChild(draggedElement);
    });
    // if(box.id === "completed"){
    //     draggedElement.draggable = false ; // "false" => Boolean("false") => true
    // }

}

