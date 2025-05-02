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