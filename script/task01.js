const footer = document.querySelector("footer div");
let compteur = 0;

footer.addEventListener("click", () => {
  compteur += 1;
  footer.textContent =
    "Vous avez cliqué " + compteur + " fois sur la zone blanche.";
});
