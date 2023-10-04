const ps = document.querySelectorAll("p");

ps.forEach((p) => {
  p.addEventListener("click", () => {
    if (p.classList.contains("highlighted")) p.classList.remove("highlighted");
    else if (!p.classList.contains("highlighted"))
      p.classList.add("highlighted");
  });
  p.addEventListener("mouseover", () => {
    p.style.backgroundColor = "blue";
  });

  p.addEventListener("mouseout", () => {
    p.style.backgroundColor = "";
  });
});
