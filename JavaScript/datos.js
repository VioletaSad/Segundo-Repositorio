// datos.js
// Muestra un dato curioso al azar sobre Laurie Anderson

const datos = [
  "Laurie Anderson fue artista residente en la NASA.",
  "Su obra 'O Superman' llegó al puesto #2 en los charts británicos.",
  "Ha trabajado con Lou Reed en varios proyectos.",
  "Experimenta con instrumentos electrónicos creados por ella misma.",
  "Su obra mezcla lo personal, lo político y lo ficticio."
];

// Función para mostrar un dato al azar
function mostrarDato() {
  const indice = Math.floor(Math.random() * datos.length);
  document.getElementById("dato").innerText = datos[indice];
}

// Mostrar uno al inicio
mostrarDato();
