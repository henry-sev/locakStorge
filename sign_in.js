window.onload = function() {
  let $login = document.querySelector("#login");
  let $username = document.querySelector("#username");
  let $password = document.querySelector("#password");
  $login.addEventListener("click", userLogin);
  function userLogin(e) {
    if (!$username.value) {
      $username.placeholder = "请输入用户名";
    }

    if (!$password.value) {
      $password.placeholder = "请输入密码";
    }

    if ($username.value && $password.value) {
      if (localStorage.getItem($username.value) === $password.value) {
        //链接跳转
        window.location.href = "https://www.hackerstart.cn/";
      }
      else {
        let $error = document.querySelector("#error");
        $error.textContent = "用户名或密码错误";
      }
    }
  }

}