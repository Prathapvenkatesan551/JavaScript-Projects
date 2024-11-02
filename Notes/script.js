const noteCont = document.querySelector('.note-cont');
const create = document.querySelector('.new');
localStorage.clear();
create.addEventListener("click", () => {
    let box = document.createElement("p");
    box.className = "inp";
    box.setAttribute("contenteditable", "true");
    noteCont.appendChild(box);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerText = "Delete"; 
    box.appendChild(deleteButton);
    update();
});

noteCont.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
      
        e.target.parentElement.remove(); 
        update(); 
    }
    if (e.target.tagName === "P") {
        const notes = document.querySelectorAll('.inp');
        notes.forEach(element => {
            element.onkeyup = function () {
                update();
            }
        });
    }
});
function update() {
    localStorage.setItem("notes", noteCont.innerHTML);
}
function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        noteCont.innerHTML = savedNotes;
    }
}
showNotes();
