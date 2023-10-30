let triggerBtn = document.getElementById("menuTrigger");
let menu = document.getElementById("menu");

let flag = 0;

triggerBtn.addEventListener("click", () => {
  console.log("got clicked");
  menu.classList.toggle("show-menu");
  if (flag == 0) {
    triggerBtn.innerHTML = `<span class="material-symbols-outlined">
    close
    </span> `;
    flag = 1;
  }
  else {
    triggerBtn.innerHTML = `<span class="material-symbols-outlined">
    menu
    </span> `;
    flag = 0;
  }
  menu.classList.toggle("menu");
});
