const footer = document.querySelector("footer div");

let caracter = "";

document.addEventListener("keypress", function (event) {
  caracter += event.key;
  if (caracter.length > 42) {
    caracter = caracter.slice(1);
  }

  footer.innerHTML = caracter;
});
