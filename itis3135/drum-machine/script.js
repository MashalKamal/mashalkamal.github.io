const display = document.getElementById("display");

// CLICK EVENT
document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad);
  });
});

// KEYBOARD EVENT
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    const pad = audio.parentElement;
    playSound(pad);
  }
});

// PLAY FUNCTION
function playSound(pad) {
  const audio = pad.querySelector(".clip");

  audio.currentTime = 0;
  audio.play();

  display.innerText = pad.id;
}