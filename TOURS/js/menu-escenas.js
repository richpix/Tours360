// ======= MENU DE ESCENAS (GLASS BLUR) =======

// Crea el contenedor del menú
const sceneMenu = document.createElement('div');
sceneMenu.classList.add('scene-menu');
sceneMenu.id = 'sceneMenu';
sceneMenu.style.display = 'none';
document.body.appendChild(sceneMenu);

// Botón para abrir/cerrar el menú
const toggleBtn = document.createElement('button');
toggleBtn.classList.add('scene-menu-toggle');
toggleBtn.textContent = "☰";
toggleBtn.onclick = () => {
  const visible = sceneMenu.style.display === 'flex';
  sceneMenu.style.display = visible ? 'none' : 'flex';
};
document.body.appendChild(toggleBtn);

// Cuando el visor esté listo, agregamos las miniaturas
window.addEventListener("load", () => {
  if (typeof escenasPortafolio !== "undefined") {
    Object.keys(escenasPortafolio).forEach(key => {
      const scene = escenasPortafolio[key];

      // 🔹 Contenedor de cada miniatura + texto
      const thumbContainer = document.createElement("div");
      thumbContainer.classList.add("scene-thumb-container");

      // 🔹 Miniatura
      const thumb = document.createElement("img");
      thumb.src = scene.panorama;
      thumb.classList.add("scene-thumb");
      thumb.onclick = () => viewer.loadScene(key);

      // 🔹 Texto debajo de la miniatura
      const label = document.createElement("span");
      label.textContent = scene.title || key;
      label.classList.add("scene-label");

      // 🔹 Agregamos todo al contenedor principal
      thumbContainer.appendChild(thumb);
      thumbContainer.appendChild(label);
      sceneMenu.appendChild(thumbContainer);
    });
  }
});
