const inputcontainer = document.getElementById("input-place");
const listcontainer = document.getElementById("list");
function addTask() {
    if (inputcontainer.value === '') {
        alert("Please, enter something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputcontainer.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputcontainer.value = '';
    //saved data called
    saveData();
}

listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        //saved data called
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        //saved data called
        saveData();
    }
}, false);

//Not working on enter button
inputcontainer.addEventListener("keydown", function (event) {
    if (event.Code === 13) {
        // 13 is the keycode for "Enter"
        event.preventDefault();
        addTask();
    }
});

//Most important part to store the data if it closed or not.

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();