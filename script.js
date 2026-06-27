/* ==========================================
   AGRINHO 2026 - SCRIPT JS
   Interatividade do site
========================================== */

/* ==========================
   BOTÃO SAIBA MAIS
========================== */

const botaoSaibaMais = document.getElementById("saibaMais");

botaoSaibaMais.addEventListener("click", function () {

    document.getElementById("agro").scrollIntoView({
        behavior: "smooth"
    });

});

/* ==========================
   CONTADOR DE ÁRVORES
========================== */

let contador = 0;

function plantarArvore() {

    contador++;

    document.getElementById("contador").innerText = contador;

    if (contador === 10) {
        alert("🌳 Você já plantou 10 árvores virtuais! Continue contribuindo!");
    }

    if (contador === 50) {
        alert("🎉 Parabéns! Você ajudou a construir um futuro sustentável!");
    }
}

/* ==========================
   QUIZ
========================== */

function respostaCorreta() {

    document.getElementById("resultado").innerText =
        "✅ Correto! A agroecologia ajuda a reduzir o uso de agrotóxicos.";

}

function respostaErrada() {

    document.getElementById("resultado").innerText =
        "❌ Resposta incorreta. Tente novamente!";
}

/* ==========================
   EQUILÍBRIO PRODUÇÃO x NATUREZA
========================== */

const botaoEquilibrio = document.getElementById("equilibrar");

botaoEquilibrio.addEventListener("click", function () {

    document.getElementById("producao").value = 90;
    document.getElementById("natureza").value = 90;

    document.getElementById("mensagemEquilibrio").innerText =
        "🌍 Quando produção e natureza caminham juntas, todos ganham!";
});
