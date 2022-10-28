// operadores de comparación 

const ciudadDestino = `Montevideo`;
const ciudadesDisponibles = new Array (`Bogotá`, `Lima`, `Santiago`, `Montevideo`);

// palabra reserfada if, evalúa condición
console.log (`verificando pasaje para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log (`Pasaje disponible para venta`);
} else {
    console.log (`Ciudad no disponible para viajar`);
}

//  === triple igual es un operador de comparación tanto en el valor como en el tipo de dato
const valorPasaje = 1000;
if (valorPasaje === 1000) {
    console.log (`El pasaje cuesta 1000`);
}
