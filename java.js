function unPopup() {
  alert(
    "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais, a très vite."
  );
}

let sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", unPopup);
