document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop", // Hace que vuelva al inicio al terminar
    perPage: 4, // Muestra 4 productos a la vez
    perMove: 1, // Mueve de uno en uno
    gap: "1rem",
    autoplay: true, // 🔥 Activa movimiento automático
    interval: 2500, // ⏱️ Tiempo entre movimientos (ms)
    pauseOnHover: true, // Se pausa si pasas el mouse encima
    arrows: true, // ❌ Quita flechas
    pagination: false, // ❌ Quita puntos de navegación
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2, gap: ".7rem" },
      480: { perPage: 1, gap: ".5rem" },
    },
  });

  splide.mount();
});
