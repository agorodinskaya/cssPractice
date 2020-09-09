let countDown;
const timerDisplay = document.querySelector(".display_time-left");
const endTime = document.querySelector(".display_end-time");
const buttons = document.querySelectorAll("[data-time]");
function timer(seconds) {
  //clear any intervals:
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  //   console.log({ now, then });
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countDown);
      return;
    }
    // console.log(secondsLeft);
    displayTimeLeft(secondsLeft);
  }, 1000);
}
// console.log(timer(seconds));
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSec = seconds % 60;
  // console.log({ minutes, remainderSec });
  const display = `${minutes}:${remainderSec < 10 ? "0" : ""}${remainderSec}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.innerHTML = `Be back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
