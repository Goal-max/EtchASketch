const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) { 
  const div = document.createElement("div");
  div.addEventListener ("mouseenter", change); 
  container.appendChild(div);
}
 
function change (event) {
  event.target.style.backgroundColor = "red";
  event.target.addEventListener("mouseleave", restore(event));
}

function restore (event) {
  setTimeout((event) => {
    event.target.style.backgroundColor = "white";
    }, 10000);
}
