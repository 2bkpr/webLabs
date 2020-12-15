let sidebar = document.querySelector("aside");
let menuBtn = document.querySelector(".menu-btn");
let logoBtn = document.querySelector(".logo");

function openSidebar() {
  sidebar.style.left = "0px";
  menuBtn.onclick = closeSidebar;
}
function closeSidebar() {
  sidebar.style.left = "-500px";
  menuBtn.onclick = openSidebar;
}

menuBtn.onclick = openSidebar;
logoBtn.onclick = function () {
  alert(":)");
};
