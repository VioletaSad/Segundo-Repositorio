// galeria.js
console.log("Archivo galeria.js cargado correctamente");

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
  if (!contenedor) return; // protección: si no existe, no rompe
  contenedor.innerHTML = "";

  arrayObras.forEach(obra => {
    const item = document.createElement("div");

    const img = document.createElement("img");
    img.src = obra.imagen;
    img.alt = obra.nombre;

    const p = document.createElement("p");
    p.classList.add("titulo-obra");
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
    <div class="resultado-box">
      <p class="resultado-texto">Duración total de las obras: ${duracionTotal} minutos</p>
      <p class="resultado-texto">Duración promedio: ${duracionPromedio.toFixed(2)} minutos</p>
      <p class="resultado-texto">Obra más larga: ${obraMayor.nombre} (${obraMayor.duracion} min)</p>
      <p class="resultado-texto">Tiempo de transferencia: ${tiempoDescarga} ms</p>
      <p class="resultado-texto">Presupuesto anual: $${presupuestoAnual.toFixed(2)}</p>
    </div>
  `;
  const resultados = document.getElementById("resultados");
  if (resultados) resultados.innerHTML = salida;

  const btn = document.getElementById("btnReiniciar");
  if (btn) btn.disabled = false;
}

function reiniciar() {
  const resultados = document.getElementById("resultados");
  if (resultados) resultados.innerHTML = "";

  const btn = document.getElementById("btnReiniciar");
  if (btn) btn.disabled = true;

  mostrarGaleria(obras);
}

// --- DATO CURIOSO ---
const datosCuriosos = [
  "Laurie Anderson fue la primera artista residente de la NASA.",
  "Su obra 'O Superman' alcanzó el número 2 en las listas británicas en 1981.",
  "Ha trabajado con tecnologías experimentales como el violín parlante.",
  "Es pionera en el uso de multimedia en performance artística."
];

function mostrarDato() {
  const contenedor = document.getElementById("dato");
  if (!contenedor) return; // protección
  const randomIndex = Math.floor(Math.random() * datosCuriosos.length);
  contenedor.textContent = datosCuriosos[randomIndex];
}

// --- Ejecutar al cargar ---
window.addEventListener("load", () => {
  // Galería (segunda página)
  mostrarGaleria(obras);

  // Botón de calcular datos (segunda página)
  const btnCalcular = document.querySelector("button[onclick='calcularRepositorio()']");
  if (btnCalcular) {
    btnCalcular.addEventListener("click", calcularRepositorio);
  }

  // Botón de reinicio (segunda página)
  const btnReiniciar = document.getElementById("btnReiniciar");
  if (btnReiniciar) {
    btnReiniciar.addEventListener("click", reiniciar);
  }

  // Dato curioso (tercera página)
  const contenedorDato = document.getElementById("dato");
  if (contenedorDato) {
    mostrarDato();
    contenedorDato.addEventListener("mouseenter", mostrarDato);

    const btnDato = document.querySelector("button[onclick='mostrarDato()']");
    if (btnDato) {
      btnDato.addEventListener("click", mostrarDato);
    }
  }
});

