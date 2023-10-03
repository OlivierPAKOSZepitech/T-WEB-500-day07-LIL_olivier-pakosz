function draw() {
  const canvas = document.querySelector("footer div canvas");
  if (canvas.getContext) {
    const context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(6, 6);
    context.lineTo(14, 6);
    context.lineTo(6, 14);
    context.fillStyle = "yellow";
    context.fill();
    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.stroke();
    context.closePath();
  }
}
draw();

const bouton_pause = document.querySelector("footer div button:nth-child(1)");
const bouton_stop = document.querySelector("footer div button:nth-child(2)");
const bouton_mute = document.querySelector("footer div button:nth-child(3)");
const bouton_play = document.querySelector("footer div canvas");
const audioPlayer = new Audio("../Legends.mp3");

bouton_play.addEventListener("click", () => {
  audioPlayer.play();
});

bouton_pause.addEventListener("click", () => {
  audioPlayer.pause();
});

bouton_stop.addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});

bouton_mute.addEventListener("click", () => {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    bouton_mute.innerHTML = "Mute";
  } else {
    audioPlayer.muted = true;
    bouton_mute.innerHTML = "Demute";
  }
});
