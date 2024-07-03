const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter"){
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li"); //create a var for each li element
    li.innerHTML = inputBox.value; //input as var value
    listContainer.appendChild(li); //adds the list to the unordered list element
    let span = document.createElement("span"); //create variable for "x" button
    span.innerHTML = "\u00d7"; //code for "x"
    li.appendChild(span); //honestly idk LMAO
  }
  inputBox.value = "";
  saveData();
}

//delete task func
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);



function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
