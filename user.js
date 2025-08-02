// login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorBox = document.getElementById("errorMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      errorBox.textContent = "Please fill in both email and password.";
      return;
    }

    // Dummy credentials for user login
    const dummyUser = {
      email: "user@quickdesk.com",
      password: "user123"
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      // Redirect to user panel
      window.location.href = "user.html";
    } else {
      errorBox.textContent = "Invalid credentials. Try again.";
    }
  });
});