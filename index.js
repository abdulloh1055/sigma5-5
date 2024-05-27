let ism = prompt("ismingizni kriting");
let h1 = document.createElement("h1");
let body = document.querySelector("body");

h1.textContent = ism;
body.style = "background-color: blue; color: yellow; text-align: center";
h1.style = "font-size: 42px";

body.appendChild(h1);




