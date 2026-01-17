const button = document.createElement("button");
button.textContent = "Set grid side length";
button.addEventListener("click", ask);
button.style.width = "fit-content";

let body = document.querySelector("body");
body.appendChild(button);
let container = "";

function ask () {
  let gridSide = 0;
  while (gridSide > 100 || gridSide < 1) {
    gridSide = prompt("Please enter a value for the grid side length between 1 and 100:");
  }
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
    //div.addEventListener("mouseleave", restore);
    div.style.width = (100/gridSide) + "%";
    div.style.height = (100/gridSide) + "%";
    container.appendChild(div);
  }
} 
function change (event) {
  if (event.target.style.backgroundColor === "") {
    console.log('hi');
//receive colour value as string and split at comma
//then change 4th opacity value 
  } else {
    event.target.style.backgroundColor = colour(); 
  }
}
function restore (event) {
  let obj = event.target;
  setTimeout(() => {obj.style.backgroundColor = "white"}, 1000);
}

function colour () {
  function rand () {
    return Math.floor(Math.random() * 256);
  }
  return `rgb(${rand()}, ${rand()}, ${rand()}, 0.1)`;
}
