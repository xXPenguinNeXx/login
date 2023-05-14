// validation form register and register user local storage

let inputUsernameRegister = document.querySelector(".input-signup-username");
let inputPasswordRegister = document.querySelector(".input-signup-password");
let btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

let pass = 'abcdef';
let newPass = CryptoJS.MD5(pass).toString();
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" || inputPasswordRegister.value === ""
  ) {
    alert("Vui lòng không để trống");
  } else {

    // array user

    let user = {
      username: inputUsernameRegister.value,
      password: CryptoJS.MD5(inputPasswordRegister.value).toString()
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "./login.html";
  }
});