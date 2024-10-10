let singupBtn = document.getElementById("signupBtn");
let singinBtn = document.getElementById("signinBtn");
let namefeild = document.getElementById("nameFeild");
let title = document.getElementById("title");

singinBtn.onclick = function () {
  namefeild.style.maxHeight = "0";
  title.innerHTML = "Sign IN";
  singupBtn.classList.add("disable");
  singinBtn.classList.remove("disable");
};

singupBtn.onclick = function () {
  namefeild.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  singupBtn.classList.remove("disable");
  singinBtn.classList.add("disable");
};
