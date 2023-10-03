const footer = document.querySelector("footer div a");

function setCookie(cookie_name, cookie_value, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expiration = "expires=" + date.toUTCString();
  document.cookie = cookie_name + "=" + cookie_value + ";" + expiration + ";path=/";
}

footer.addEventListener("click", () => {
  setCookie("acceptsCookies", true, 1);
});

function displayMessage() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[1].split("=");
    if (cokkie[0] === "acceptsCookies" && cookie[1] === "true") {
      return false;
    }
  }
    return true; 
    }

footer.addEventListener("click", () => {
  if (displayMessage()) {
    setCookie("acceptsCookies", true, 1);
  }
});