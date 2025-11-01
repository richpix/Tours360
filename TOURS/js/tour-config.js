
// 🔹 Variable global para el visor
let viewer;
let menuMostrado = false;


// 🔹 Crear visor Pannellum
function crearVisor(idContenedor, configuracionEscenas, primeraEscena) {
  viewer = pannellum.viewer(idContenedor, {
    "default": {
      "firstScene": primeraEscena,
      "autoLoad": true,
      "showFullscreenCtrl": true,
        "showZoomCtrl": true,
        "showControls": true,
      "sceneFadeDuration": 1000,
      "compass": false,
      //"author": "Ricardo Pool"
    },
    "scenes": configuracionEscenas
  });

  return viewer;
  
}



// 🔹 Crear hotspots 
function crearHotspot(yaw, pitch, destino, texto = "Ir") {
   

  return {
    
    pitch,
    yaw,
    type: "custom",
    cssClass: "hotspot-arrow",
    text: texto,
    createTooltipFunc: (hotSpotDiv) => {
      const img = document.createElement("img");
      img.src = "https://360tours.com.mx/wp-content/uploads/2025/10/flecha2.png"; // tu imagen de flecha
      hotSpotDiv.appendChild(img);
    },
    clickHandlerFunc: () => {
      viewer.loadScene(destino);
    }
  };
}


// 🔹 Menú al clic derecho
document.getElementById('tour').addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("360 Tours © 2025\nDesarrollado por Ricardo Pool");
});


