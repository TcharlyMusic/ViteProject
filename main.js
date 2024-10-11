import './style.css'
let bouton = document.getElementById("clic-btn");
let app = document.getElementById("app");
bouton.addEventListener("click", () => { app.innerHTML += "<p>Bien joué !</p>" })
