// ==========================================
// Projeto Agrinho 2026
// Funções JavaScript
// ==========================================

// Contador animado
let contador = 0;
const numero = document.getElementById("contadorArvores");

function iniciarContador() {
    const intervalo = setInterval(() => {
        contador++;

        if (numero) {
            numero.textContent = contador;
        }

        if (contador >= 100) {
            clearInterval(intervalo);
        }

    }, 30);
}

window.onload = iniciarContador;

// ==========================================
// Saudação personalizada
// ==========================================

const botaoEnviar = document.getElementById("btnEnviar");

if (botaoEnviar) {

    botaoEnviar.addEventListener("click", () => {

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome === "" || email === "") {

            alert("Preencha nome e e-mail.");

            return;

        }

        alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");

    });

}

// ==========================================
// Mostrar e esconder informações
// ==========================================

const botaoMostrar = document.getElementById("mostrarMais");
const textoExtra = document.getElementById("textoExtra");

if(botaoMostrar && textoExtra){

textoExtra.style.display="none";

botaoMostrar.addEventListener("click",()=>{

if(textoExtra.style.display==="none"){

textoExtra.style.display="block";
botaoMostrar.textContent="Mostrar menos";

}else{

textoExtra.style.display="none";
botaoMostrar.textContent="Saiba mais";

}

});

}
