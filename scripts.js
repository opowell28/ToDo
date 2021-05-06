function addTask() {
    let ul = document.getElementById('taskList');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("test"));
    ul.appendChild(li);
}
