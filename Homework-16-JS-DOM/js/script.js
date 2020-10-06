// Time
setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

document.body.style.background = "lightblue"; // сделать фон красным
setTimeout(() => document.body.style.background = "", 1000); // вернуть назад

console.log(navigator.platform);
console.log(navigator.userAgent);
console.log(navigator.product);
console.log(location.href);

const tecnology = document.querySelector(".tecnology");

tecnology.addEventListener("mouseover", mouseOver);

function mouseOver() {
  tecnology.style.color = "red";
}

tecnology.addEventListener("mouseout", mouseOut);

function mouseOut() {
  tecnology.style.color = "";
}

const list = document.querySelector(".list");
// matches = совпадения
// if method matches() consist in list selector .list
if (list.matches(".list")) {
  list.style = "color:brown; list-style:none; font-size:1.3em; font-weight:700;";
  list.firstElementChild.style.color = "darkblue";
  list.lastElementChild.style.color = "tomato";

  function addElem() {
    let node = document.createElement("li");
    let textnode = document.createTextNode("New LI");
    node.appendChild(textnode);
    list.appendChild(node);

    // если нажали 5 раз на кнопку то сделать её disabled
  }

}
else {
  list.innerHTML = "This element does not match the \".list\" CSS selector";
}