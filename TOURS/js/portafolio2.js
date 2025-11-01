const escenasPortafolio = {
  


  "atrio": {
    "title": "Iglesia",
    "type": "equirectangular",

    "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c1atrio.jpg",
   "preload": true, // 🔹 Esto activa preload para esta escena
    "hotSpots": [
        // crearHotspotMenu(yaw, pitch), // hotspot que abre el menú
        crearHotspot(-60, -10, "atrioizq","ir" ),
        crearHotspot(3, -30, "enmedio", ),
        crearHotspot(56, -18, "atrioder", ),
        
     
    ]
        },


  "atrioizq": {
          "title": "Iglesia",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c1atriozq.jpg",

          // --Configuracion de donde mira la camara al cambiar de escena-
          "yaw": 120,  
          "pitch": -5,
          "hfov": 90, //zoom--- max 120
          //-------------------------------
          "preload": true,
          "hotSpots": [
            //yaw, pitch, destino, texto
            crearHotspot(128, -2, "atrio", ),
            crearHotspot(96, -22, "enmedio", )
          ]
        },
            
         

        "enmedio": {
            // "hotSpotDebug": true,
         "title": "centro",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c1atriomedio.jpg",
          "preload": true,
          "hotSpots": [

            crearHotspot(165, -15, "atrio", "Volver a atrio"),
            crearHotspot(94, -18, "atrioder", "ir a la derecha"),
            crearHotspot(-97, -20, "atrioizq", "ir a la izquierda"),
            crearHotspot(-54, -18, "pasillomed", "Ir al pasillo medio")
          ]
        },
            

        "atrioder": {
         "title": "derecha",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c1atrioder.jpg",
          "hotSpots": [
            crearHotspot( -170, -5, "atrio", "Volver al atrio"),
            crearHotspot(-130, -30, "enmedio", "Ir al centro"),
            crearHotspot(-40, -10, "pasilloder", "Ir al pasillo derecha")
          ]
        },

        
        "pasilloder": {
        "title": "pasillo derecha",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c2pasilloder.jpg",
          "hotSpots": [
            crearHotspot(170, -20, "atrioder", "Volver al atrio derecha"),
            crearHotspot(10, -30, "pasilloder2", "Ir al siguiente pasillo")
          ]
        },  

        "pasilloder2": {
          "title": "pasillo derecha",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c2pasilloder2.jpg",
          "hotSpots": [
            crearHotspot( -170, -25, "pasilloder", "Volver al pasillo derecha"),
            crearHotspot(-47, -22, "pasilloflor", "Ir al florero")
          ]
        },

        "pasillomed": {
          "title": "pasillo medio",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c2pasillomedio.jpg",
          "hotSpots":  [
            crearHotspot(178, -23, "enmedio", "Volver al centro"),
            crearHotspot(0, -28, "pasillomed2", "Ir al siguiente pasillo")
          ]
        },
           

        "pasillomed2": {
         "title": "pasillo medio",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c2pasillomedio2.jpg",
          "hotSpots": [
            crearHotspot(179, -25, "pasillomed", "Volver al pasillo medio"),
            crearHotspot(27, -26, "pasilloflor", "Ir al florero")
          ]
        },

        "pasilloflor": {
        //  "title": "florero",
          "type": "equirectangular",
          "panorama": "https://360tours.com.mx/wp-content/uploads/2025/10/c2pasillomedio3.jpg",
          "hotSpots": [
            crearHotspot(130, -20, "pasilloder2", "Volver al pasillo derecha"),
            crearHotspot(-146, -22, "pasillomed2", "Volver al pasillo medio")    
          
          ]
        }
  
  // ... todas las demás escenas
};




// 🔹 Inicializar el visor
// 🔹 Ya tienes `let viewer;` declarado globalmente
 viewer= crearVisor('tour', escenasPortafolio, 'atrio');
// 🔹 Inicializar botones glass
 inicializarBotonesGlass(viewer);
// 🔹 Usar después de crear el visor
aplicarZoomMovil(viewer, 70); // Ajusta 70 al zoom que quieras