// =============================================
// Agro Forte, Futuro Sustentável — main.js
// Agrinho 2026 | Maria Bucioli
// =============================================

// ---------- MODO ESCURO ----------
const darkToggle = document.getElementById('darkToggle');

function applyDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  darkToggle.textContent = isDark ? '☀️' : '🌙';
}

const savedDark = localStorage.getItem('darkMode') === 'true';
applyDarkMode(savedDark);

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  darkToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark);
});

// ---------- MENU MOBILE ----------
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = '☰';
  });
});

// ---------- LINK ATIVO NA NAV ----------
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ---------- CONTADORES ANIMADOS ----------
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) { el.textContent = target; clearInterval(timer); }
    else { el.textContent = Math.floor(current); }
  }, 16);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); }
  });
}, { threshold: 0.5 });

statNumbers.forEach(n => counterObserver.observe(n));

// ---------- ABAS DE IMPACTO ----------
const tabBtns     = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');
  });
});

// ---------- QUIZ ----------
const quizData = [
  {
    question: '🌱 O que é agroecologia?',
    options: ['Uso máximo de pesticidas para aumentar a produção', 'Manejo ecológico que equilibra o meio ambiente com a produção', 'Técnica de irrigação por satélite', 'Método para processar alimentos industrializados'],
    correct: 1,
    feedback: 'A agroecologia usa o manejo ecológico, fundamentando-se no equilíbrio do meio ambiente e no uso de recursos naturais.'
  },
  {
    question: '⚠️ Qual é um efeito da exposição crônica a agrotóxicos?',
    options: ['Irritação ocular temporária', 'Melhora do sistema imunológico', 'Distúrbios neurológicos e risco de câncer', 'Aumento da fertilidade'],
    correct: 2,
    feedback: 'A exposição crônica (longo prazo) pode desencadear câncer, distúrbios neurológicos e danos aos órgãos vitais.'
  },
  {
    question: '🐞 O que é controle biológico?',
    options: ['Aplicação de fungicidas sintéticos', 'Uso de predadores naturais como joaninhas para combater pragas', 'Irrigação por gotejamento', 'Plantio de apenas uma cultura na mesma área'],
    correct: 1,
    feedback: 'O controle biológico estimula predadores naturais — como joaninhas e pássaros — para combater pragas sem agrotóxicos!'
  },
  {
    question: '🌾 O plantio consorciado ajuda porque:',
    options: ['Concentra as pragas em uma só área', 'Aumenta o uso de herbicidas', 'Combina culturas diferentes, dificultando a infestação de pragas', 'Elimina a necessidade de irrigação'],
    correct: 2,
    feedback: 'O plantio consorciado cultiva linhagens diferentes juntas, dificultando a infestação de pragas de forma natural.'
  },
  {
    question: '💧 O que é agricultura de precisão?',
    options: ['Cultivo apenas de produtos orgânicos certificados', 'Uso de drones e sensores para aplicar insumos somente onde necessário', 'Técnica de colheita manual para evitar desperdício', 'Produção agrícola em estufas fechadas'],
    correct: 1,
    feedback: 'A agricultura de precisão usa tecnologia (drones, sensores) para aplicar insumos com exatidão, reduzindo desperdício.'
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizQuestion = document.getElementById('quizQuestion');
const quizOptions  = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const nextBtn      = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const quizArea     = document.getElementById('quizArea');
const quizResult   = document.getElementById('quizResult');
const restartBtn   = document.getElementById('restartBtn');

function loadQuestion(index) {
  const q = quizData[index];
  answered = false;
  quizQuestion.textContent = q.question;
  quizFeedback.textContent = '';
  nextBtn.style.display = 'none';

  const pct = (index / quizData.length) * 100;
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `Pergunta ${index + 1} de ${quizData.length}`;

  quizOptions.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(i));
    quizOptions.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = quizData[currentQuestion];
  const optionBtns = quizOptions.querySelectorAll('.quiz-option');

  optionBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === selectedIndex) btn.classList.add('wrong');
  });

  if (selectedIndex === q.correct) {
    score++;
    quizFeedback.textContent = `✅ Correto! ${q.feedback}`;
  } else {
    quizFeedback.textContent = `❌ Incorreto. ${q.feedback}`;
  }

  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) loadQuestion(currentQuestion);
  else showResult();
});

function showResult() {
  quizArea.style.display = 'none';
  quizResult.style.display = 'block';
  progressFill.style.width = '100%';
  progressText.textContent = 'Concluído!';
  document.getElementById('scoreDisplay').textContent = score;

  const resultIcon  = document.getElementById('resultIcon');
  const resultTitle = document.getElementById('resultTitle');
  const resultMsg   = document.getElementById('resultMsg');

  if (score === 5) {
    resultIcon.textContent = '🏆';
    resultTitle.textContent = 'Perfeito! Você é um expert!';
    resultMsg.textContent = 'Parabéns! Você demonstrou excelente conhecimento sobre sustentabilidade no campo.';
  } else if (score >= 3) {
    resultIcon.textContent = '🌱';
    resultTitle.textContent = 'Muito bem!';
    resultMsg.textContent = 'Você tem bom conhecimento sobre o tema. Continue aprendendo!';
  } else {
    resultIcon.textContent = '📚';
    resultTitle.textContent = 'Continue estudando!';
    resultMsg.textContent = 'Explore as seções do site para aprender mais sobre sustentabilidade agrícola.';
  }
}

restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  score = 0;
  quizArea.style.display = 'block';
  quizResult.style.display = 'none';
  loadQuestion(0);
});

loadQuestion(0);

// ---------- FORMULÁRIO ----------
const submitContact = document.getElementById('submitContact');
const formFeedback  = document.getElementById('formFeedback');

submitContact.addEventListener('click', () => {
  const name    = document.getElementById('userName').value.trim();
  const email   = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('userMessage').value.trim();

  if (!name || !email || !message) {
    formFeedback.style.color = '#e53935';
    formFeedback.textContent = '⚠️ Por favor, preencha todos os campos.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formFeedback.style.color = '#e53935';
    formFeedback.textContent = '⚠️ Digite um e-mail válido.';
    return;
  }

  // Variável que armazena o nome para personalizar a mensagem
  formFeedback.style.color = '#2d7a4f';
  formFeedback.textContent = `🌿 Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;

  document.getElementById('userName').value = '';
  document.getElementById('userEmail').value = '';
  document.getElementById('userMessage').value = '';
});

// ---------- VOLTAR AO TOPO ----------
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 400); });
backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ---------- ANIMAÇÕES DE ENTRADA ----------
const revealEls = document.querySelectorAll('.solution-card, .info-card, .section-title');

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));
