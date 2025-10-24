document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Dummy success message (no backend handling)
  document.getElementById("formMessage").innerText = "Thank you for your message! (No backend yet)";
  this.reset();
});
