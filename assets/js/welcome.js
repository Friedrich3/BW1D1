const checkbox = document.getElementById("termsCheckbox");
const errorMessage = document.getElementById("errorMessage");
const bntWelcome = document.getElementById("bntWelcome");

localStorage.clear();

bntWelcome.addEventListener("click", function () {
  if (!checkbox.checked) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    window.location.href = "../../benchmark.html";
  }
});

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    errorMessage.style.display = "none";
  }
});