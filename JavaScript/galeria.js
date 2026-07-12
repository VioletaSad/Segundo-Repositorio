
// galeria.js
// Genera dinámicamente una galería de obras de Laurie Anderson
console.log("Archivo cargado correctamente");


/// Array con obras seleccionadas
const obras = [
  { nombre: "O Superman", año: 1981, imagen: "../imagenes/osuperman.jpg" },
  { nombre: "Big Science", año: 1982, imagen: "../imagenes/bigscience.jpg" },
  { nombre: "United States Live", año: 1984, imagen: "../imagenes/united-states.jpg" }
];

// Guardamos el último orden mostrado
let ultimoOrden = [];

// Función para mezclar el array (Fisher-Yates)
function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Función para mostrar la galería
function mostrarGaleria() {
  const contenedor = document.getElementById("galeria");
  contenedor.innerHTML = "";

  let obrasMezcladas;
  // Evitar repetir el mismo orden que el anterior
  do {
    obrasMezcladas = mezclarArray([...obras]);
  } while (JSON.stringify(obrasMezcladas) === JSON.stringify(ultimoOrden));

  // Guardamos el nuevo orden
  ultimoOrden = obrasMezcladas;

  obrasMezcladas.forEach(obra => {
    // Crear contenedor para cada obra
    const item = document.createElement("div");

    // Crear imagen
    const img = document.createElement("img");
    img.src = obra.imagen;
    img.alt = obra.nombre;

    // Crear texto
    const p = document.createElement("p");
    p.textContent = `${obra.nombre} (${obra.año})`;

    // Armar estructura
    item.appendChild(img);
    item.appendChild(p);
    contenedor.appendChild(item);
  });

  console.log("🔀 Nuevo orden aplicado:", obrasMezcladas.map(o => o.nombre));
}

// Función para cambiar orden (manteniendo estilo en CSS)
function cambiarEstilo() {
  console.log("Cambiando orden...");
  mostrarGaleria();
}

// Ejecutar al cargar
mostrarGaleria();
