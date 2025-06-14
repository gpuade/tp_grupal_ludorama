/*
const calendario = document.getElementById("calendario");
const mesActual = document.getElementById("mes-actual");

const fecha = new Date();
const mes = fecha.getMonth(); // 0-11
const anio = fecha.getFullYear();

// Nombres de días y meses
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesActual.textContent = `${nombresMeses[mes]} ${anio}`;

// Simulación de días habilitados (miércoles a domingo)
const diasHabilitados = [3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28];

// Supongamos que estos días son feriados en junio 2025
const feriados = [20]; // Día de la bandera en Argentina

let primerDia = new Date(anio, mes, 1).getDay(); // 0 (Dom) a 6 (Sáb)
primerDia = primerDia === 0 ? 6 : primerDia - 1;

//const primerDia = new Date(anio, mes, 1).getDay(); // Día de la semana del 1°

const diasEnMes = new Date(anio, mes + 1, 0).getDate(); // Total de días en el mes

// Espacios vacíos antes del primer día
for (let i = 0; i < primerDia; i++) {
  const div = document.createElement("div");
  div.classList.add("vacio");
  calendario.appendChild(div);
}

// Días del mes

const diasSemana = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

// Agregamos encabezado con las letras de los días
diasSemana.forEach(dia => {
  const div = document.createElement("div");
  div.textContent = dia;
  div.style.fontWeight = "bold";
  div.style.color = "black";
  calendario.appendChild(div);
});

for (let dia = 1; dia <= diasEnMes; dia++) {
  const div = document.createElement("div");
  div.textContent = dia;

  if (feriados.includes(dia)) {
    div.classList.add("feriado");
  } else if (diasHabilitados.includes(dia)) {
    div.classList.add("habilitado");
  }

  calendario.appendChild(div);
}*/


const calendario = document.getElementById("calendario");
const mesActual = document.getElementById("mes-actual");



const diasSemana = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
diasSemana.forEach(dia => {
    const div = document.createElement("div");
    div.textContent = dia;
    div.className = "encabezado";
    calendario.appendChild(div);
});

const hoy = new Date();
const mes = hoy.getMonth(); // mes actual
const anio = hoy.getFullYear();

// Nombres de días y meses
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

mesActual.textContent = `${nombresMeses[mes]} ${anio}`;

const primerDia = new Date(anio, mes, 1).getDay(); // 0 (domingo) - 6 (sábado)
const totalDias = new Date(anio, mes + 1, 0).getDate();

// Ajustar para que empiece el lunes
const offsetInicio = primerDia === 0 ? 6 : primerDia - 1;

// Simulamos días habilitados y feriados (personalizá esto)
const diasHabilitados = [1,2, 3, 4, 5, 6,7,8, 9, 10, 11, 12, 13,14,15,16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const feriados = [16,20];

// Agregar espacios vacíos al principio
for (let i = 0; i < offsetInicio; i++) {
    const div = document.createElement("div");
    div.className = "dia_vacio";
    calendario.appendChild(div);
}

// Crear los días del mes
for (let dia = 1; dia <= totalDias; dia++) {
    const div = document.createElement("div");
    div.className = "dia";

    if (feriados.includes(dia)) {
    div.classList.add("feriado");
    } else if (diasHabilitados.includes(dia)) {
    div.classList.add("habilitado");
    }

    div.textContent = dia;
    calendario.appendChild(div);
}
