const scrollSnapContainer = document.querySelector(".scroll-snap-container");
const siteFooter = document.querySelector("#site-footer");
console.log(scrollSnapContainer);
const snapPoints = Array.from(document.querySelectorAll(".snap-point"));
let currentSnapPoint = 0;
let scrolling = false;

window.onload=function(){ setTimeout(function(){ 		window.scrollTo(0, 1); 	}, 0); }

scrollSnapContainer.addEventListener("wheel", e => {
  e.preventDefault();
  if (scrolling === false) {
    scrolling = true;

    if (e.deltaY < 0 & currentSnapPoint > 0) {
      currentSnapPoint -= 1;     
      window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
    } 
    else if (e.deltaY > 0 & currentSnapPoint < snapPoints.length - 1) {
      currentSnapPoint += 1;
      window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
    }

    const timerId = setTimeout(()=> {
      scrolling = false;
    }, 500);
  };
}, {passive: false});

document.addEventListener("keydown", e => {
  if ((e.key === "ArrowUp" || e.key ==="ArrowDown") && window.scrollY < siteFooter.getBoundingClientRect().top + window.scrollY) {
    e.preventDefault();
    if (e.key === "ArrowUp" & currentSnapPoint > 0) {
      currentSnapPoint -= 1;     
      window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
    }
    else if (e.key === "ArrowDown" & currentSnapPoint < snapPoints.length - 1) {
      currentSnapPoint += 1;
      window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
    }
  }
});

let ts;
scrollSnapContainer.addEventListener('touchstart', function (e){
  e.preventDefault();
  console.log(e.touches[0]);
   ts = e.touches[0].clientY;
}, {passive: false});

scrollSnapContainer.addEventListener('touchend', function (e){
   let te = e.changedTouches[0].clientY;
   if(ts > te+5 & currentSnapPoint < snapPoints.length - 1){
    currentSnapPoint += 1;
    window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
   }
   else if(ts < te-5 & currentSnapPoint > 0){
    currentSnapPoint -= 1;     
    window.scrollTo({top: snapPoints[currentSnapPoint].getBoundingClientRect().top + window.scrollY, behavior: "smooth"});
   }
}, {passive: false});