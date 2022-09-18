const replyButtons = Array.from(document.querySelectorAll(".reply-button"));
replyButtons.forEach(button => {
  button.addEventListener("click", e => {
    const replyInputForm = button.parentElement.parentElement.querySelector(".reply");
    replyInputForm.style.display = "block";
    const replyInput = replyInputForm.querySelector("input");
    replyInput.focus(); 
    replyInputForm.addEventListener("submit", e => submitReply(e));
    replyInput.addEventListener("blur", e => replyInputBlur(e));
  });
});

function submitReply(e) {
  e.preventDefault();
  e.target.style.display = "none";
}

function replyInputBlur(e) {
  e.target.parentElement.style.display = "none";
}

function openReplyAreas() {
  const replyAreas = Array.from(document.querySelectorAll(".replies"));
  if (window.innerWidth > 960) {
    replyAreas.forEach(replyArea => {
      replyArea.open = true;
    });
  }
  else {
    replyAreas.forEach(replyArea => {
      replyArea.open = false;
    });
  }
}

openReplyAreas();

window.addEventListener("resize", openReplyAreas);