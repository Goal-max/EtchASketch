const button = document.createElement("button");
button.textContent = "press me";
button.addEventListener("click", ask);

let body = document.querySelector("body");
const container = document.querySelector("#container");
body.insertBefore(button, container);

function ask () {
  let gridSize = prompt("Please enter a value for the grid size");
}

for (let i = 0; i < 256; i++) { 
  const div = document.createElement("div");
  div.addEventListener ("mouseenter", change); 
  div.addEventListener("mouseleave", restore);
  container.appendChild(div);
}
 
function change (event) {
  event.target.style.backgroundColor = "red";
}
function restore (event) {
  let obj = event.target;
  setTimeout(() => {obj.style.backgroundColor = "white"}, 1000);
}


