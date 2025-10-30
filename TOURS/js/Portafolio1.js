const escenasPortafolio = {
  
  "atrio": {
    "title": "Casa prueba",
    "type": "equirectangular",
    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/ciudad.webp",
    
    "hotSpots": [

      // crearHotspot(-60, -10, "atrioizq", "Ir a izquierda"),
       //crearHotspot(3, -30, "enmedio", "Ir en medio")
     /* { pitch: -10, yaw: -60, type: "scene", text: "Ir a izquierda", sceneId: "atrioizq" },
      { pitch: -30, yaw: 3, type: "scene", text: "Ir en medio", sceneId: "enmedio" },
      { pitch: -18, yaw: 56, type: "scene", text: "Ir a derecha", sceneId: "atrioder" }*/
    ]
  }
  
  // ... todas las demás escenas
};



// 🔹 Inicializar el visor
crearVisor('tour', escenasPortafolio, 'atrio');

