// SCROLL SUAVE
function go(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// TOGGLE CARDS
function toggle(el) {
  el.classList.toggle("active");
  el.style.background = el.classList.contains("active")
    ? "#b7f7c1"
    : "white";
}

// QUIZ
function quiz(option) {
  const res = document.getElementById("resultado");

  if (option === 2) {
    res.innerHTML = "✅ Correto! Agricultura orgânica é a mais sustentável.";
    res.style.color = "lightgreen";
  } else {
    res.innerHTML = "❌ Resposta incorreta. Tente novamente!";
    res.style.color = "orange";
  }
}

// FORMULÁRIO
function enviar() {
  const nome = document.getElementById("nome").value;
  const msg = document.getElementById("msg");

  if (nome.trim() === "") {
    msg.innerHTML = "Digite seu nome.";
  } else {
    msg.innerHTML = `Mensagem enviada com sucesso, ${nome}! 🌱`;
  }
}
