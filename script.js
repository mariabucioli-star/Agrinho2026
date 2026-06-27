// ===========================
// BOTÕES "SAIBA MAIS"
// ===========================

function toggleElemento(botaoId, elementoId) {

    const botao = document.getElementById(botaoId);
    const elemento = document.getElementById(elementoId);

    if (!botao || !elemento) return;

    botao.addEventListener("click", () => {

        if (elemento.style.display === "block") {
            elemento.style.display = "none";
        } else {
            elemento.style.display = "block";
        }

    });

}

// Botões das seções
toggleElemento("btnMensagem", "maisInformacoes");
toggleElemento("btnIntroducao", "maisIntroducao");
toggleElemento("btnImpactos", "maisImpactos");
toggleElemento("btnSolucoes", "maisSolucoes");
toggleElemento("btnBoasPraticas", "maisBoasPraticas");


// ===========================
// QUIZ
// ===========================

const btnQuiz = document.getElementById("btnQuiz");

if (btnQuiz) {

    btnQuiz.addEventListener("click", () => {

        let pontos = 0;

        const respostas = document.querySelectorAll("input[type='radio']:checked");

        respostas.forEach((resposta) => {
            pontos += Number(resposta.value);
        });

        const resultado = document.getElementById("resultadoQuiz");

        if (resultado) {

            let mensagem = "";

            if (pontos <= 2) {
                mensagem = `Você acertou ${pontos}/5 😢 Continue aprendendo sobre sustentabilidade!`;
            } else if (pontos <= 4) {
                mensagem = `Você acertou ${pontos}/5 🙂 Muito bom!`;
            } else {
                mensagem = `Você acertou ${pontos}/5 🌱 Excelente! Você entende bem sobre sustentabilidade!`;
            }

            resultado.innerText = mensagem;

        }

    });

}


// ===========================
// FORMULÁRIO
// ===========================

const btnEnviar = document.getElementById("btnEnviar");

if (btnEnviar) {

    btnEnviar.addEventListener("click", () => {

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome === "" || email === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const msg = document.getElementById("msgConfirmacao");

        if (msg) {
            msg.style.display = "block";
        }

    });

}


// ===========================
// CONTADORES ANIMADOS
// ===========================

function animarContador(id, final, sufixo = "") {

    const elemento = document.getElementById(id);
    if (!elemento) return;

    let atual = 0;

    const intervalo = setInterval(() => {

        atual++;

        elemento.innerText = atual + sufixo;

        if (atual >= final) {
            clearInterval(intervalo);
        }

    }, 20);

}


// Iniciar contadores
animarContador("contadorArvores", 500);
animarContador("contadorAgua", 70, "%");
animarContador("contadorSolo", 85, "%");
animarContador("contadorCarbono", 60, "%");


// ===========================
// SCROLL SUAVE MENU
// ===========================

const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {
            alvo.scrollIntoView({ behavior: "smooth" });
        }

    });

});
