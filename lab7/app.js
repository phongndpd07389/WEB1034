function drop(ev){
    ev.preventDefault();
    document.querySelector("#...").remove();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}