const btn = document.querySelector(".btn");

function print() {
  btn.innerHTML = "String";
}

btn.addEventListener("click", print);