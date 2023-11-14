function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const validUsername = "user";
  const validPassword = "password";

  if (usernameInput === validUsername && passwordInput === validPassword) {
    document.getElementById("loginMessage").innerText = "Login successful!";
  } else {
    document.getElementById("loginMessage").innerText =
      "Invalid username or password. Please try again.";
  }
}
