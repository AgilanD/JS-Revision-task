function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
//   console.log(ev.target.id);
console.log(Event);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}