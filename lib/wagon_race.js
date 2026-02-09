// TODO: write your code here
let player1 = document.querySelector(".active1");
let player2 = document.querySelector(".active2");
const road = document.querySelector(".road");
const img = document.querySelector(".img");
let roadTimer = null;
const player1FinishTile = document.querySelector(".finish-tile1");
const player2FinishTile = document.querySelector(".finish-tile2");
const screenText = document.querySelector(".screen-text");
let raceActive = true;

document.addEventListener("keyup", (event) => {
  if (!raceActive) return;
  if (event.key !== "p" && event.key !== "q") return;

  road.style.animationPlayState = "running";
  img.style.animationPlayState = "running";

  clearTimeout(roadTimer);
  roadTimer = setTimeout(() => {
    road.style.animationPlayState = "paused";
    img.style.animationPlayState = "paused";
  }, 180);

  if (event.key === "p") {
    player1.classList.remove("active1");
    player1 = player1.nextElementSibling;
    player1.classList.add("active1");
  }

  if (event.key === "q") {
    player2.classList.remove("active2");
    player2 = player2.nextElementSibling;
    player2.classList.add("active2");
  }

  if (player1FinishTile.classList.contains("active1")) {
    screenText.innerText = "\nPlayer 1 won!\nReload page (F5) to restart";
    raceActive = false;
  }

  if (player2FinishTile.classList.contains("active2")) {
    screenText.innerText = "\nPlayer 2 won!\nReload page (F5) to restart";
    raceActive = false;
  }
});
