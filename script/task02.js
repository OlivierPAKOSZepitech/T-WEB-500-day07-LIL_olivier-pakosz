const footer = document.querySelector("footer div");

function quel_est_ton_prenom() {
  let name = prompt("What's your name");
  while (name == null) {
    name = prompt("What's your name ?");
  }
  let confirmation = confirm("Are you sure that " + name + " is your name ?");

  if (confirmation) {
    alert("Hello " + name + " !");
    footer.textContent = "Hello " + name + " !";
  }
}

footer.addEventListener("click", quel_est_ton_prenom);
