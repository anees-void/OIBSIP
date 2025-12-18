let isLogin = false;

const title = document.getElementById("title");
const authBtn = document.getElementById("authBtn");
const toggleText = document.getElementById("toggleText");
const authBox = document.getElementById("authBox");
const securePage = document.getElementById("securePage");
const logoutBtn = document.getElementById("logoutBtn");

toggleText.addEventListener("click", toggleMode);
authBtn.addEventListener("click", handleAuth);
logoutBtn.addEventListener("click", logout);

function toggleMode() {
  isLogin = !isLogin;
  title.innerText = isLogin ? "Login" : "Register";
  authBtn.innerText = isLogin ? "Login" : "Register";
  toggleText.innerText = isLogin
    ? "Don't have an account? Register"
    : "Already have an account? Login";
}

function handleAuth() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  if (isLogin) {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      showSecurePage();
    } else {
      alert("Invalid credentials");
    }
  } else {
    if (localStorage.getItem(username)) {
      alert("User already exists");
    } else {
      localStorage.setItem(username, password);
      alert("Registration successful! Please login.");
      toggleMode();
    }
  }
}

function showSecurePage() {
  authBox.style.display = "none";
  securePage.style.display = "block";
}

function logout() {
  securePage.style.display = "none";
  authBox.style.display = "block";
}
