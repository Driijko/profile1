const liveChatSubmitButton = document.getElementById("live-chat-submit");
const chatArea = document.getElementById("chat-area");
const liveChatUserInput = document.getElementById("live-chat-user-input");

liveChatSubmitButton.addEventListener("click", e => {
    e.preventDefault();
    console.log(liveChatUserInput.value);
    const userMessageContainer = document.createElement("div");
    userMessageContainer.className = "user-message-container";
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = liveChatUserInput.value; 
    userMessageContainer.appendChild(userMessage);
    chatArea.appendChild(userMessageContainer);
    liveChatUserInput.value = "";
});
