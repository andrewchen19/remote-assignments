const form = document.querySelector(".form");
const submitBtn = document.querySelector(".btn");

form.addEventListener("submit", () => {
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";
});
