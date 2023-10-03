const footer = document.querySelector("footer div");
const bouton_plus = document.querySelector("footer div button:first-of-type");
const bouton_moins = document.querySelector("footer div button:last-of-type");
const backgroundSelector = document.querySelector("div select");

bouton_moins.addEventListener("click", () => {
  const size = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = `${size - 1}px`;
});

bouton_plus.addEventListener("click", () => {
  const size = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = `${size + 1}px`;
});

backgroundSelector.addEventListener("change", (event) => {
  document.body.style.backgroundColor = event.target.value;
});
