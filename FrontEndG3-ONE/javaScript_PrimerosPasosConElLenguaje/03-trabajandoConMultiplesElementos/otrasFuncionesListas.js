const ciudadesDisponibles = new Array (`Bogotá`,`Lima`, `Santiago`, `Montevideo`);

const paisesDisponibles = [`Colombia`, `Perú`, `Chile`, `Brasil`, `Argentina`, `Uruguay`, `Venezuela`];

// mostrando la cantidad de elementos del arreglo
// opción 1 declarando una vararible
const cantidadCiudades = ciudadesDisponibles.length;
console.log (`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);

console.log (`En la lista de países tenemos ${paisesDisponibles.length} elementos`);

// remover el primer elemento del array 
ciudadesDisponibles.shift();
console.log (ciudadesDisponibles);
console.log (`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

// remover el último elemento del array
ciudadesDisponibles.pop();
console.log (ciudadesDisponibles);
console.log (`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`); //Template strings ``

// filtrar elementos en el array
const paisesFiltrados = paisesDisponibles.filter((e)=> e == `Brasil`);
console.log (paisesFiltrados);

// convertir array en una cadena de caracteres
console.log (paisesDisponibles.join(`-`));

// Ordenar la lista
console.log (paisesDisponibles.sort());

// conocer la posición de un elemento
console.log (`Perú está en la posición: ${paisesDisponibles.indexOf(`Perú`)}`);

// unificar 2 listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades); 

