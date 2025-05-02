document.getElementById("drag")
.addEventListener("ondragstart",(event)=>{
	console.log("Dragging started",event)
})
document.getElementById("div1")
.addEventListener("ondrop",(event)=>{
	console.log("Drop started",event)
})
document.getElementById("div1").addEventListener("ondragover",event=>{
console.log("Dragging over",event)	
})
//your code here
function allowDrop(event) {
	ev.preventDefault();
  }

function drag(event) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}