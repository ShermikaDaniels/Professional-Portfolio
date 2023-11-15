function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const validUsername = "user";
  const validPassword = "password";

  if (usernameInput === validUsername && passwordInput === validPassword) {
    document.getElementById("loginMessage").innerText =
      "You've been Phished!, but not really this is just an example.";
  } else {
    document.getElementById("loginMessage").innerText =
      "You've been Phished!, but not really this is just an example.";
  }
}
