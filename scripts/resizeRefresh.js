let refreshReady = false;
window.addEventListener("resize", e => {
  if (refreshReady === false) {
    refreshReady = true;
    const timerId = setTimeout(()=> {
      window.location.reload();
    }, 2000);
  }
});