const input = document.querySelector("input");
const button = document.getElementById("button");
const div = document.querySelector("body div");

function lafonction(input) {
  button.addEventListener("click", () => {
    const element = document.createElement("div");
    element.textContent += input.value;
    div.appendChild(element);
  });
}
lafonction(input);