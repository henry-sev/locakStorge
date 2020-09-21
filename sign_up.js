window.onload = function() {
  let $register = document.querySelector("#register");
  let $username = document.querySelector("#username");
  // let $email = document.querySelector("#email");
  let $password = document.querySelector("#password");
  $register.addEventListener("click", userregister);
  function userregister() {
    if (!$username.value) {
      $username.placeholder = "请输入用户名";
    }

    // if (!$email.value) {
    //   $email.placeholder = "请输入邮箱";
    // }

    if (!$password.value) {
      $password.placeholder = "请输入密码";
    }

    if ($username.value && $password.value) {
      localStorage.setItem($username.value, $password.value);
      window.location.href = "sign_in.html";
      // window.location.href = "sign";
    }
  }

}