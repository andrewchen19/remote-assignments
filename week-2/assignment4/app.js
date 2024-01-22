let heading1 = document.querySelector(".banner h1");
let menuBtn = document.querySelector(".menu-btn");
let toggleBtn = document.querySelector(".toggle-btn");
let actionBtn = document.querySelector(".action-btn");

heading1.addEventListener("click", (e) => {
  if (e.target.textContent === "Have a Good Time!") {
    e.target.textContent = "Welcome Message";
  } else {
    e.target.textContent = "Have a Good Time!";
  }
});

menuBtn.addEventListener("click", () => {
  let aside = document.querySelector("aside");
  aside.classList.add("show-sidebar");
});

toggleBtn.addEventListener("click", () => {
  let aside = document.querySelector("aside");
  aside.classList.remove("show-sidebar");
});

actionBtn.addEventListener("click", (e) => {
  let boxContainer2 = document.querySelector(".box-container2");
  if (e.target.textContent === "show rest boxes") {
    boxContainer2.style.display = "grid";
  } else {
    boxContainer2.style.display = "none";
  }

  if (e.target.textContent === "show rest boxes") {
    e.target.textContent = "hide rest boxes";
  } else {
    e.target.textContent = "show rest boxes";
  }
});
