var menu = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
/* Set the width of the side navigation to 250px */
function openNav() {
  menu.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  menu.classList.remove("active");
}
