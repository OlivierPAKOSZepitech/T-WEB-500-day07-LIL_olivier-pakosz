const ps = document.querySelectorAll("p");

const addClass = () =>
  ps.forEach((p) => {
    p.addEventListener("click", () => {
      p.classList.toggle("highlighted");
    });
    p.addEventListener("mouseover", () => {
      p.classList.add("blue");
    });

    p.addEventListener("mouseout", () => {
      p.classList.remove("blue");
    });
  });

addClass();
