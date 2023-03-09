function promptOnLoad() {
    const name = prompt("Enter your name:");
    const greetingDiv = document.getElementById("greeting");
    greetingDiv.textContent = `Hello, ${name}! Selamat Datang di Foxy Guess Game, mulai permainan ?.`;
  }

window.onload = promptOnLoad;
  