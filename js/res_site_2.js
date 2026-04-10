window.addEventListener("load", () => {
  //햄버거 메뉴
  const hamburger = document.querySelector("#hamburger");
  const mobileMenu = document.querySelector("#mobileMenu");
  const overlay = document.querySelector("#overlay");
  // 햄버거 클릭시
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
  });
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
  });
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
