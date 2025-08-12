/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".line").forEach((el, idx) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "none";
    }, idx * 500);
  });

  const fill = document.querySelector(".fill");
  setTimeout(() => {
    fill.style.transition = "width 6s linear";
    fill.style.width = "100%";
  }, 500);
});
