console.log("JS ER LOADED");

const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  feedback.textContent =
    "Tak for din besked! Jeg vender tilbage hurtigst muligt.";
  feedback.style.color = "green";

  form.reset();
});
