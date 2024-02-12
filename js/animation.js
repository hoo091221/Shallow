document.addEventListener("DOMContentLoaded", () => {
  const splashText = document.querySelector(".splash-text");
  const splashP = document.querySelector(".splash-p");
  const splashBtn = document.querySelector(".splash-btn");

  setTimeout(() => {
    splashText.style.opacity = "1";
    splashText.style.transform = "translateY(0)";

    setTimeout(() => {
      splashP.style.opacity = "1";
      splashP.style.transform = "translateY(0)";

      
    setTimeout(() => {
      splashBtn.style.opacity = "1";
      splashBtn.style.transform = "translateY(0)";
    }, 500);
    }, 500);
  }, 500);
});
