const container = document.querySelector("#container");
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
