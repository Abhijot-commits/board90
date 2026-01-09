const examDate = new Date("February 17, 2026").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = examDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    "⏳ Days left till boards: " + days;
}, 1000);

function resetTasks() {
  document.querySelectorAll("input[type='checkbox']").forEach(box => {
    box.checked = false;
  });
}
