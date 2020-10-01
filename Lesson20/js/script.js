// console.log(`${navigator.platform}`); // Win32
// console.log(`${navigator.language} - используемый язык на странице`); // en
// console.log(`${navigator.onLine} - navigator onLine`); // true
// console.log(`${navigator.product} - браузерный движок`);

// document.body.style.background = "yellow";
// document.body.style = "background: lightblue; color: darkblue";

// let nodes = document.body.children;
// for (let i = 0; i < nodes.length; i++) {
//   if (nodes[i].nodeName != "SCRIPT") {
//     nodes[i].style = "background: lightyellow";
//     console.log(nodes[i].innerHTML = i + "<span>Hello World!</span>");
//     if (nodes[i].children.length > 0) {
//       console.log(nodes[i].nodeName + " has children");
//       let tmp = nodes[i].previousElementSibling;
//       if (tmp != null) {
//         console.log(tmp.children.length);
//       }
//     } else {
//       console.log(nodes[i].nodeName + " hasn't children");
//     }
//   }
//   console.log(nodes);
// }
// console.log(nodes);

// let nodes = document.body.children;
// for (let i = 0; i < nodes.length; i++) {
//   console.log(nodes[i]);
//   if (nodes[i].nodeName == "UL") {
//     console.log(nodes[i].nodeName);
//     let children = nodes[i].children;
//     let cnt = 0;
//     for (let j = 0; j < children.length; j++) {
//       if (children[j].nodeName == "LI") {
//         if (cnt == 1) console.log(children[j].innerHTML);
//         cnt++;
//       }
//     }
//   }
// }

// console.log(document.getElementById("elem").innerHTML);
// console.log(elem.innerHTML);
// let collection = document.getElementsByTagName("div");
// console.log(collection.length);
// for (let i = 0; i < collection.length; i++) {
//   collection[i].style.background = "lightgreen";
//   console.log(collection[i].innerHTML);
// }

let ul = document.querySelector(".list").lastElementChild.innerHTML = "JS";