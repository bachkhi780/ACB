const users = [
  { username: "admin", password: "123456" },
  { username: "user", password: "password" },
];

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
if (!localStorage.getItem("users")) {
    alert("No user found");
  } 

  else {
    let users = JSON.parse(localStorage.getItem("users"));
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    message.style.color = "green";
    message.textContent = "Đăng nhập thành công!";
    setTimeout(() => {
      window.location.href = "../index.html"; 
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
  }}
});

