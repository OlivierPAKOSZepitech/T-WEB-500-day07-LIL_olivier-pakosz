button = document.querySelector("button:first-of-type");
paragraphes = document.querySelectorAll("p");

function disapear() {
  button.addEventListener("click", () => {
    for (let i = 0; i < paragraphes.length; i++)
      paragraphes[i].style.display = "none";
  });
}

disapear();
