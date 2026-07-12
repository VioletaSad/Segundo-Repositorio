// galeria.js
console.log("✅ Archivo galeria.js cargado correctamente");

const obras = [
  { nombre: "O Superman", año: 1981, imagen: "../imagenes/osuperman.jpg", duracion: 8, peso: 12 },
  { nombre: "Big Science", año: 1982, imagen: "../imagenes/bigscience.jpg", duracion: 6, peso: 10 },
  { nombre: "United States Live", año: 1984, imagen: "../imagenes/united-states.jpg", duracion: 10, peso: 15 }
];

let ultimoOrden = [];

// --- GALERÍA ---
function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mostrarGaleria(arrayObras = obras) {
  const contenedor = document.getElementById("galeria");
  contenedor.innerHTML = "";

  arrayObras.forEach(obra => {
    const item = document.createElement("div");

    const img = document.createElement("img");
    img.src = obra.imagen;
    img.alt = obra.nombre;

    const p = document.createElement("p");
    p.textContent = `${obra.nombre} (${obra.año})`;

    item.appendChild(img);
    item.appendChild(p);
    contenedor.appendChild(item);
  });
}

function cambiarEstilo() {
  let obrasMezcladas;
  do {
    obrasMezcladas = mezclarArray([...obras]);
  } while (JSON.stringify(obrasMezcladas) === JSON.stringify(ultimoOrden));

  ultimoOrden = obrasMezcladas;
  mostrarGaleria(obrasMezcladas);
}

// --- EJERCICIO DEL REPOSITORIO ---
const tiempoTransferencia = 50; // ms por MB
const costoMensual = 2;         // $ por MB

function calcularRepositorio() {
  const duracionTotal = obras.reduce((acc, o) => acc + o.duracion, 0);
  const duracionPromedio = duracionTotal / obras.length;

  const obraMayor = obras.reduce((max, o) => o.duracion > max.duracion ? o : max, obras[0]);
  const tiempoDescarga = obraMayor.peso * tiempoTransferencia;

  const pesoTotal = obras.reduce((acc, o) => acc + o.peso, 0);
  const presupuestoAnual = pesoTotal * costoMensual * 12;

  const salida = `
    <p>Duración total de las obras: ${duracionTotal} minutos</p>
    <p>Duración promedio: ${duracionPromedio.toFixed(2)} minutos</p>
    <p>Obra más larga: ${obraMayor.nombre} (${obraMayor.duracion} min)</p>
    <p>Tiempo de transferencia: ${tiempoDescarga} ms</p>
    <p>Presupuesto anual: $${presupuestoAnual.toFixed(2)}</p>
  `;
  document.getElementById("resultados").innerHTML = salida;

  // habilitar botón reinicio
  document.getElementById("btnReiniciar").disabled = false;
}

function reiniciar() {
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("btnReiniciar").disabled = true;
  mostrarGaleria(obras); // vuelve a mostrar la galería original
}

// --- Ejecutar al cargar ---
window.onload = () => {
  mostrarGaleria(obras);
};
