# Continue? Café

Sitio web de un café gamer ficticio, hecho como proyecto de portafolio. La idea: una página con identidad propia, sin plantillas ni frameworks, pensada para verse bien en cualquier pantalla.

## Qué incluye

- Hero con una cuenta regresiva estilo arcade ("Continue?") que se reinicia al insertar una moneda
- Sitio de cuatro páginas con menú compartido y página actual marcada
- Catálogo de juegos con filtros por zona hechos en JavaScript puro
- Secciones de torneos semanales, carta y reservas
- Formulario de reservas con confirmación (simulada, sin backend)
- Menú responsive para móvil
- Accesibilidad básica: enlace para saltar al contenido, foco visible y respeto a `prefers-reduced-motion`

## Tecnologías

HTML5, CSS3 (variables, grid, flexbox) y JavaScript puro. Sin Bootstrap ni librerías. Tipografías de Google Fonts: Silkscreen y Bricolage Grotesque.

## Estructura

```
continue-cafe/
├── index.html      Inicio: pantalla Continue?, torneos, carta y reservas
├── juegos.html     Catálogo con filtros por zona
├── nosotros.html   Historia, reglas de la casa y equipo
├── contacto.html   Ubicación, horario y correo
├── css/styles.css
├── js/main.js
└── img/
```

## Cómo verlo

Abre `index.html` en el navegador. No necesita instalación.

## Decisiones de diseño

- Paleta de cuatro colores: crema, tinta, rojo y amarillo
- Bordes gruesos y sombras sólidas en lugar de degradados y tarjetas redondeadas
- Una sola animación protagonista (la cuenta regresiva) en vez de efectos en todas partes

## Autor

Anthony Ramírez, estudiante de UNICAH.