// CONSTANTS and VARIABLES //////////////////////////////////////////////
const scrollSnapContainer = document.querySelector("#scroll-snap-container");
const siteFooter = document.querySelector("#site-footer");
const snapPoints = Array.from(document.querySelectorAll(".snap-point"));
let currentSnapPoint = 0;
let scrolling = false;
let ts; //touch-start

// FUNCTIONS //////////////////////////////////////////////////////////
function snap(test1, test2) {
  let conditionsMet = false;
  let num;
  if (test1 & currentSnapPoint < snapPoints.length -1) {
    conditionsMet = true;
    num = 1;
  }
  else if (test2 & currentSnapPoint > 0) {
    conditionsMet = true;
    num = -1;
  }
  if (conditionsMet) {
    currentSnapPoint += num;
    window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
  }
}

// EVENTS ////////////////////////////////////////////////////////////
scrollSnapContainer.addEventListener("wheel", e => {
  e.preventDefault();
  if (scrolling === false) {
    scrolling = true;

    snap(e.deltaY > 0, e.deltaY < 0);

    const timerId = setTimeout(()=> {
      scrolling = false;
    }, 500);
  };
}, {passive: false});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
    e.preventDefault();
    if (e.repeat === false) {
      snap(e.key === "ArrowDown", e.key === "ArrowUp");
    }
  }
});

scrollSnapContainer.addEventListener('touchstart', function (e){
  e.preventDefault();
   ts = e.touches[0].clientY;
}, {passive: false});

scrollSnapContainer.addEventListener('touchend', function (e){
   let te = e.changedTouches[0].clientY;
   snap(ts > te + 5, ts < te - 5);
}, {passive: false});