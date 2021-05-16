function addTask() {
    let input = prompt("What is your task?");
    let ul = document.getElementById('taskList');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
}
