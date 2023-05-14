// validation form login
let inputUsername = document.querySelector(".input-login-username");
let inputPassword = document.querySelector(".input-login-password");
let btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
  } else {
    let user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value && user.password === CryptoJS.MD5(inputPassword.value).toString()
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "./index.html";
    } else {
      alert("Tên tài khoản hoặc mật khẩu của bạn không đúng");
    }
  }
});
