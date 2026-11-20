// ============================================================
// Menú móvil (todas las páginas)
// ============================================================
const nav = document.getElementById('site-nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  const abierto = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', abierto);
});

nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// ============================================================
// Pantalla "Continue?": cuenta regresiva y monedas (solo inicio)
// ============================================================
const botonMoneda = document.getElementById('coin');

if (botonMoneda) {
  const pantalla = document.querySelector('.screen');
  const num = document.getElementById('count');
  const estado = document.getElementById('estado');
  const creditos = document.getElementById('credits');
  const frases = {
    1: 'Crédito aceptado. Sigue la partida.',
    3: 'Van 3 créditos. ¿No toca un café?',
    5: 'Con 5 créditos ya mereces un brownie.',
    10: '10 créditos. Mejor reserva una mesa.'
  };
  let n = 9, monedas = 0, intervalo, espera;

  function iniciar(mensaje) {
    clearInterval(intervalo);
    clearTimeout(espera);
    n = 9;
    num.textContent = n;
    estado.textContent = mensaje;
    intervalo = setInterval(() => {
      n--;
      num.textContent = n;
      if (n === 0) {
        clearInterval(intervalo);
        estado.textContent = 'Game over. Inserta otra moneda.';
        espera = setTimeout(() => iniciar('Tienes 9 segundos para decidir.'), 2500);
      }
    }, 1000);
  }

  iniciar('Tienes 9 segundos para decidir.');

  botonMoneda.addEventListener('click', () => {
    monedas++;
    creditos.textContent = String(monedas).padStart(2, '0');
    pantalla.classList.remove('golpe');
    void pantalla.offsetWidth; // reinicia la animación
    pantalla.classList.add('golpe');
    iniciar(frases[monedas] || 'Crédito aceptado.');
  });
}

// ============================================================
// Formulario de reservas, simulado y sin envío de datos (solo inicio)
// ============================================================
const form = document.getElementById('reserva');

if (form) {
  document.getElementById('fecha').min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    document.getElementById('msg').textContent =
      `Listo, ${nombre}. Tu mesa quedó guardada. Player 1 preparado.`;
    form.reset();
  });
}

// ============================================================
// Filtros del catálogo (solo juegos.html)
// ============================================================
const filtros = document.querySelectorAll('.filtros button');

if (filtros.length) {
  const fichas = document.querySelectorAll('.ficha[data-zona]');

  filtros.forEach(boton => {
    boton.addEventListener('click', () => {
      filtros.forEach(b => b.setAttribute('aria-pressed', b === boton));
      fichas.forEach(f => {
        f.hidden = boton.dataset.zona !== 'todos' && f.dataset.zona !== boton.dataset.zona;
      });
    });
  });
}