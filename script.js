document.getElementById("no-button").addEventListener("click", function() {
    this.style.display = "none";

    const message = document.getElementById("mensagem");
    message.style.display = "block";
    message.innerHTML = "Julia?";

    const image = document.getElementById("imagem");
    image.style.display = "block";
});


document.getElementById("yes-button").addEventListener("click", function() {
    window.location.href = "pag2.html"; 
});