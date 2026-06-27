// ===================================
// BOTÃO "SAIBA MAIS" DO BANNER
// ===================================

const btnMensagem = document.getElementById("btnMensagem");

if (btnMensagem) {

    btnMensagem.addEventListener("click", function () {

        const titulo = document.getElementById("tituloPrincipal");
        const texto = document.getElementById("textoPrincipal");

        titulo.textContent = "🌱 Juntos por um futuro sustentável!";

        texto.textContent =
            "A tecnologia, a preservação ambiental e o agronegócio podem caminhar juntos para garantir alimentos, desenvolvimento e qualidade de vida para as futuras gerações.";

    });

}

// ===================================
// BOTÃO "SAIBA MAIS" DOS IMPACTOS
// ===================================

const botaoImpactos = document.getElementById("mostrarImpactos");
const textoImpactos = document.getElementById("textoImpactos");

if (textoImpactos) {
    textoImpactos.style.display = "none";
}

if (botaoImpactos) {

    botaoImpactos.addEventListener("click", function () {

        if (textoImpactos.style.display === "none") {

            textoImpactos.style.display = "block";
            botaoImpactos.textContent = "Mostrar menos";

        } else {

            textoImpactos.style.display = "none";
            botaoImpactos.textContent = "Saiba mais";

        }

    });

}

// ===================================
// CONTADOR DE ÁRVORES
// ===================================

const contador = document.getElementById("contadorArvores");

if (contador) {

    let numero = 0;

    const intervalo = setInterval(function () {

        numero += 5;

        contador.textContent = numero;

        if (numero >= 100) {

            clearInterval(intervalo);

        }

    }, 50);

}

// ===================================
// FORMULÁRIO
// ===================================

const btnEnviar = document.getElementById("btnEnviar");

if (btnEnviar) {

    btnEnviar.addEventListener("click", function () {

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {

            alert("Preencha todos os campos antes de enviar.");

            return;

        }

        alert(
            "Obrigado, " +
            nome +
            "! Sua mensagem foi enviada com sucesso."
        );

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";

    });

}

// ===================================
// ANIMAÇÃO DOS CARDS
// ===================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.transform = "translateY(0px)";

    });

});
