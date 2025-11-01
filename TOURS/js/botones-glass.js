function inicializarBotonesGlass(viewer) {
  if (!viewer) return;

  // Botones ya existentes en el HTML
  const zoomIn = document.getElementById('zoomInBtn');
  const zoomOut = document.getElementById('zoomOutBtn');
  const fullscreen = document.getElementById('fullscreenBtn');
  const gyro = document.getElementById('gyroBtn');
  const closeBtn = document.getElementById('closeBtn');

  // Solo asignamos eventos si viewer existe
  if (viewer) {
    zoomIn?.addEventListener('click', () => viewer.setHfov(viewer.getHfov() - 10));
    zoomOut?.addEventListener('click', () => viewer.setHfov(viewer.getHfov() + 10));
    fullscreen?.addEventListener('click', () => viewer.toggleFullscreen());
    gyro?.addEventListener('click', () => {
      if (viewer.isOrientationSupported()) viewer.startOrientation();
      else alert('Giroscopio no soportado');
    });
    closeBtn?.addEventListener('click', () => {
      window.history.back(); // O la URL de Airbnb/Hotel
    });
  }

  const mobileToggle = document.getElementById("mobileControlsToggle");
  const controls = document.getElementById("customControlsWrapper");

  if (mobileToggle && controls) {
    mobileToggle.addEventListener("click", () => {
      const isActive = controls.classList.contains("active");
      controls.classList.add("animating");

      if (isActive) {
        // 🔸 Animación de cierre
        controls.style.animationName = "shrinkToButton";
        setTimeout(() => {
          controls.classList.remove("active", "animating");
          mobileToggle.textContent = "+";
        }, 450);
      } else {
        // 🔹 Animación de apertura
        controls.classList.add("active");
        controls.style.animationName = "expandFromButton";
        setTimeout(() => {
          controls.classList.remove("animating");
          mobileToggle.textContent = "×";
        }, 450);
      }
    });
  }
}



// 🔹 Aplica zoom inicial en todas las escenas solo para móvil
function aplicarZoomMovil(viewer, hfovInicial = 70) {
  if (!viewer) return;
  if (window.innerWidth > 768) return; // Solo en móvil

  // Cambiar hfov de la escena actual
  viewer.on('load', () => {
  viewer.setHfov(hfovInicial);
 });
  // Escuchar cambio de escena y mantener el hfov en móvil
  viewer.on('scenechange', () => {
    viewer.setHfov(hfovInicial);
  });
}

