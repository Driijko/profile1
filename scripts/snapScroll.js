// CONSTANTS and VARIABLES //////////////////////////////////////////////
const scrollSnapContainer = document.querySelector("#scroll-snap-container");
const snapPoints = Array.from(document.querySelectorAll(".snap-point")).map(snapPoint => {
  return snapPoint.getBoundingClientRect().top - windowHeightDifference;
});
let interfaceActive = false;
let currentSnapPoint = 0;
let scrolling = false;
let ts; //touch-start

// FUNCTIONS //////////////////////////////////////////////////////////
function snap(test1, test2) {
  if (test1 & currentSnapPoint < snapPoints.length -1) {
    scrollSnapContainer.style.transform = `translateY(-${snapPoints[currentSnapPoint + 1]}px)`;
    currentSnapPoint += 1;
  }
  else if (test2 & currentSnapPoint > 0) {
    scrollSnapContainer.style.transform = `translateY(-${snapPoints[currentSnapPoint - 1]}px)`;
    currentSnapPoint -= 1;
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
  ts = e.touches[0].clientY;
}, {passive: false});

scrollSnapContainer.addEventListener('touchend', function (e){
  let te = e.changedTouches[0].clientY;
  snap(ts > te + 5, ts < te - 5);
}, {passive: false});