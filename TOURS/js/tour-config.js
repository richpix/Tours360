
// Variable global del visor
let viewer;

// Crear visor
function crearVisor(idContenedor, configuracionEscenas, primeraEscena) {
  viewer = pannellum.viewer(idContenedor, {
    "default": {
      "firstScene": primeraEscena,
      "autoLoad": true,
      "sceneFadeDuration": 1000,
      "compass": false,
      "author": "360 Tours México"
    },
    "scenes": configuracionEscenas
  });
  return viewer;
}
//Personalizar hotspots
function crearHotspot(yaw, pitch, destino, texto = "Ir") {
  return {
    pitch,
    yaw,
    type: "custom",
    cssClass: "hotspot-flecha",
    text: texto,
    clickHandlerFunc: () => {
      viewer.loadScene(destino);
    }
  };
}

//Desplegar menu al apretar clic derecho
document.getElementById('tour').addEventListener('contextmenu', function (e) {
  e.preventDefault(); // 🔹 Bloquea el menú original

  alert("360 Tours © 2025\nDesarrollado por Ricardo Pool");
});



