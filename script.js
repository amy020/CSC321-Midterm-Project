function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    return false;
  }

  status.textContent = "Thanks! Your message has been sent (pretend).";
  e.target.reset();
  return false;
}
