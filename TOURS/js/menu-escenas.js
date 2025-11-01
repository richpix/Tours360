// ======= MENU DE ESCENAS (GLASS BLUR) =======
// ======= MENU DE ESCENAS (GLASS BLUR) =======

// Crea el contenedor del menú
const sceneMenu = document.createElement('div');
const tourContainer = document.getElementById('tour');
sceneMenu.classList.add('scene-menu');
sceneMenu.id = 'sceneMenu';
tourContainer.appendChild(sceneMenu);

// Botón para abrir/cerrar el menú
const toggleBtn = document.createElement('button');
toggleBtn.classList.add('scene-menu-toggle');
toggleBtn.textContent = "☰";
tourContainer.appendChild(toggleBtn);

toggleBtn.onclick = () => {
  sceneMenu.classList.toggle("visible");
};

// Agregar miniaturas cuando el visor esté listo
window.addEventListener("load", () => {
  if (typeof escenasPortafolio !== "undefined") {
    Object.keys(escenasPortafolio).forEach(key => {
      const scene = escenasPortafolio[key];

      const thumbContainer = document.createElement("div");
      thumbContainer.classList.add("scene-thumb-container");

      const thumb = document.createElement("img");
      thumb.src = scene.panorama;
      thumb.classList.add("scene-thumb");
      thumb.onclick = () => viewer.loadScene(key);

      const label = document.createElement("span");
      label.textContent = scene.title || key;
      label.classList.add("scene-label");

      thumbContainer.appendChild(thumb);
      thumbContainer.appendChild(label);
      sceneMenu.appendChild(thumbContainer);
    });
  }
});



//sceneMenu = document.querySelector('.scene-menu');
let isDown = false;
let startX;
let scrollLeft;

sceneMenu.addEventListener('mousedown', (e) => {
  isDown = true;
  sceneMenu.classList.add('active'); // opcional para efectos visuales
  startX = e.pageX - sceneMenu.offsetLeft;
  scrollLeft = sceneMenu.scrollLeft;
});

sceneMenu.addEventListener('mouseleave', () => {
  isDown = false;
  sceneMenu.classList.remove('active');
});

sceneMenu.addEventListener('mouseup', () => {
  isDown = false;
  sceneMenu.classList.remove('active');
});

sceneMenu.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - sceneMenu.offsetLeft;
  const walk = (x - startX) * 1; // velocidad de desplazamiento
  sceneMenu.scrollLeft = scrollLeft - walk;
});