let elForm = document.querySelector('.form');
let elResult = document.querySelector('.res');
let elInp = document.querySelector('.inp');
elForm.addEventListener("submit",creates);

function creates(e) {
  e.preventDefault();
  let div = document.createElement('div');
  let tex = document.createElement('p');
  div.className = "boxs";
  tex.className = "text";
  tex.textContent = elInp.value;
  setInterval((e) => {
    +tex.textContent--;
    if(+tex.textContent == 0) {
      elResult.remove(div);
    }
  },1000);
  div.appendChild(tex);
  elResult.appendChild(div);
}