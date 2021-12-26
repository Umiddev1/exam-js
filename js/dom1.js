let elColorGr = document.querySelector('.colorgroup'); 
let elBody = document.querySelector('body');
let elBox = document.querySelectorAll('.box');
let colord = document.querySelector('.colorgr');
window.addEventListener("keydown", output);
function output(e) {
  if(e.key === "Shift") {
    elColorGr.style.display = "block";
  }
}
colord.addEventListener("mouseover",mt);

function mt(e) {
  if(e.fromElement.classList.contains("one")) {
    elBody.style.backgroundColor = "blue";
  }
  else if(e.fromElement.classList.contains("two")) {
    elBody.style.backgroundColor = "green";
  }
  else if(e.fromElement.classList.contains("three")) {
    elBody.style.backgroundColor = "tomato";
  }
  else if(e.fromElement.classList.contains("four")) {
    elBody.style.backgroundColor = "red";
  }
  else if(e.fromElement.classList.contains("fife")) {
    elBody.style.backgroundColor = "yellow";
  }
  else {
    elBody.style.backgroundColor = "white";
  }
}
