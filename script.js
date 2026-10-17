const page = document.querySelector(".page");
const pageWidth = page.getBoundingClientRect().width * 0.99;
const compactWidth = window.screen.width / 3;

function updatePageWidth() {
  page.style.width = window.innerWidth > compactWidth
    ? "40vw"
    : `${pageWidth}px`;
  page.style.maxWidth = "none";
}

window.addEventListener("resize", updatePageWidth);
updatePageWidth();