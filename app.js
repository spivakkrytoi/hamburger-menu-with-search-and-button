const hamMenu = document.querySelector(".ham-menu");
const themebtn = document.querySelector(".theme");
const body = document.body;
const offScreenMenu = document.querySelector(".off-screen-menu");
const nav_bar = document.querySelector("nav");
const srch_btn = document.querySelector(".search button");
const input_el = document.querySelector("input");
const textElements = document.querySelectorAll(".text"); // Всі елементи з класом .text

function active() {
  body.classList.toggle("active");
  nav_bar.classList.toggle("active");
  themebtn.classList.toggle("active");
  srch_btn.classList.toggle("active");
  hamMenu.classList.toggle("active");
  input_el.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  // Зміна тексту теми
  themebtn.innerHTML = body.classList.contains("active") ? "☾" : "☀"; // Змінюємо іконку в залежності від теми

  // Зміна кольору тексту в залежності від теми
  if (body.classList.contains("active")) {
    textElements.forEach(el => el.style.color = "black"); // Чорний текст для світлої теми
    offScreenMenu.style.backgroundColor = "#C3C3C3"; // Світлий фон для меню в світлій темі
  } else {
    textElements.forEach(el => el.style.color = "white"); // Білий текст для темної теми
    offScreenMenu.style.backgroundColor = "#2D313C"; // Темний фон для меню в темній темі
  }
}

// Перемикання теми при натисканні на кнопку
themebtn.addEventListener("click", () => {
  active();
});

// Перемикання бургер-меню
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
