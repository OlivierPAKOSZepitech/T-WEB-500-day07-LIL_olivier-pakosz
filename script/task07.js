const footer = document.querySelector("footer div a");

footer.addEventListener("click", () => {
  document.cookie = "acceptsCookies = true; max-age = 86400";
  console.log(document.cookie);
});


