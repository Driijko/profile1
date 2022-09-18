// SOCIAL MEDIA MODAL ////////////////////////////////
const socialMediaModal = document.getElementById("social-media-modal");
const socialMediaModalOpeners = Array.from(document.getElementsByClassName("social-media-modal-opener"));
const socialMediaModalClosers = Array.from(document.getElementsByClassName("social-media-modal-closer"));


socialMediaModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    socialMediaModal.open = true;
    socialMediaModal.querySelector("a").focus();
  });
});

socialMediaModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    socialMediaModal.open = false;
  });
});

// CHAT MODAL ////////////////////////////////
const chatModal = document.getElementById("chat-modal");
const chatModalOpeners = Array.from(document.getElementsByClassName("chat-modal-opener"));
const chatModalClosers = Array.from(document.getElementsByClassName("chat-modal-closer"));


chatModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    chatModal.open = true;
    chatModal.querySelector("input").focus();
  });
});

chatModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    chatModal.open = false;
  });
});

// LOG IN MODAL ////////////////////////////////
const logInModal = document.getElementById("log-in-modal");
const logInModalOpeners = Array.from(document.getElementsByClassName("log-in-modal-opener"));
const logInModalClosers = Array.from(document.getElementsByClassName("log-in-modal-closer"));


logInModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    logInModal.open = true;
    logInModal.querySelector("input").focus();
  });
});

logInModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    logInModal.open = false;
  });
});

// SITE MENU MODAL ////////////////////////////////
const siteMenuModal = document.getElementById("site-menu-modal");
const siteMenuModalOpeners = Array.from(document.getElementsByClassName("site-menu-modal-opener"));
const siteMenuModalClosers = Array.from(document.getElementsByClassName("site-menu-modal-closer"));


siteMenuModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    siteMenuModal.open = true;
    siteMenuModal.querySelector("input").focus();
  });
});

siteMenuModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    siteMenuModal.open = false;
  });
});

// ARTICLE SHARE MODAL ////////////////////////////////
const articleShareModal = document.getElementById("article-share-modal");
const articleShareModalOpeners = Array.from(document.getElementsByClassName("article-share-modal-opener"));
const articleShareModalClosers = Array.from(document.getElementsByClassName("article-share-modal-closer"));


articleShareModalOpeners.forEach(element => {
  element.addEventListener("click", e => {
    articleShareModal.open = true;
    articleShareModal.querySelector("a").focus();
  });
});

articleShareModalClosers.forEach(element => {
  element.addEventListener("click", e => {
    articleShareModal.open = false;
  });
});