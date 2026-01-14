const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) { 
  const div = document.createElement("div");
  div.addEventListener ("mouseenter", change); 
  div.addEventListener("mouseleave", () => {
    const obj = event.target;
    setTimeout(() => {obj.style.backgroundColor = "white"}, 2000);
  }); 
  
  container.appendChild(div);
}
 
function change (event) {
  event.target.style.backgroundColor = "red";
}
/*
function restore (event) {
  let obj = event;
  setTimeout((obj) => {
  }, 10000);
}
*/
