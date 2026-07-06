// ===== BOTÃO SAIBA MAIS =====

const botaoSaibaMais = document.getElementById("saibaMais");

if (botaoSaibaMais) {

    botaoSaibaMais.addEventListener("click", function () {

        document.getElementById("textoExtra").innerHTML =
        "A sustentabilidade no agronegócio busca aumentar a produção de alimentos sem comprometer os recursos naturais, garantindo qualidade de vida para as futuras gerações.";

    });

}

// ===== EQUILÍBRIO =====

const botaoEquilibrar = document.getElementById("equilibrar");

if (botaoEquilibrar) {

    botaoEquilibrar.addEventListener("click", function () {

        document.getElementById("producao").value = 85;

        document.getElementById("natureza").value = 85;

        document.getElementById("mensagemEquilibrio").innerHTML =
        "✅ Produção agrícola e preservação ambiental podem caminhar juntas.";

    });

}

// ===== CONTADOR DE ÁRVORES =====

let totalArvores = 0;

function plantarArvore() {

    totalArvores++;

    document.getElementById("contador").innerHTML = totalArvores;

}

// ===== QUIZ 1 =====

function respostaCorreta() {

    document.getElementById("resultado").innerHTML =
    "✅ Correto! A agroecologia reduz a dependência de agrotóxicos.";

}

function respostaErrada() {

    document.getElementById("resultado").innerHTML =
    "❌ Resposta incorreta. Tente novamente.";

}

// ===== QUIZ 2 =====

function respostaCorreta2() {

    document.getElementById("resultado2").innerHTML =
    "✅ Correto! O plantio consorciado melhora o solo e ajuda no controle de pragas.";

}

function respostaErrada2() {

    document.getElementById("resultado2").innerHTML =
    "❌ Resposta incorreta.";

}

// ===== QUIZ 3 =====

function respostaCorreta3() {

    document.getElementById("resultado3").innerHTML =
    "✅ Correto! A água é essencial para a agricultura.";

}

function respostaErrada3() {

    document.getElementById("resultado3").innerHTML =
    "❌ Resposta incorreta.";

}

// ===== MENSAGEM DE BOAS-VINDAS =====

window.onload = function () {

    console.log("Projeto Agrinho 2026 carregado com sucesso.");

};
