const button = document.createElement("button");
button.textContent = "press me";
button.addEventListener("click", ask);

let body = document.querySelector("body");
body.appendChild(button);
let container = "";

function ask () {
  let gridSide = prompt("Please enter a value for the grid side");
  if (!(container === "")) { 
    container = document.querySelector("#container");
    body.removeChild(container);
  }
  container = document.createElement("div");
  container.setAttribute("id", "container");
  body.appendChild(container);
  create(gridSide);
}
function create (gridSide) {
  let grid = gridSide * gridSide;
  for (let i = 0; i < grid; i++) { 
    const div = document.createElement("div");
    div.addEventListener ("mouseenter", change); 
    div.addEventListener("mouseleave", restore);
    div.style.width = (100/gridSide) + "%";
    div.style.height = (100/gridSide) + "%";
    container.appendChild(div);
  }
} 
function change (event) {
  event.target.style.backgroundColor = "red";
}
function restore (event) {
  let obj = event.target;
  setTimeout(() => {obj.style.backgroundColor = "white"}, 1000);
}


