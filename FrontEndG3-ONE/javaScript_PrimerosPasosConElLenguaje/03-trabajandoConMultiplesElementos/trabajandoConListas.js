console.log (`Trabajando con Listas`);

const Bogota = "Bogotá";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";
// console.log (Bogota, Lima, Santiago, BuenosAires);

// Array, arreglos o listas
// const ciudadesDisponibles = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
// console.log (ciudadesDisponibles);

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push("Bogota");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
console.log ("Ciudades Disponibles");
// console.log (ciudadesDisponibles);

const ciudadesMasVendidas = [];

// console.log (ciudadesMasVendidas);

ciudadesMasVendidas.push("Sao Paulo");
ciudadesMasVendidas.push("Buenos Aires");
// console.log ("Ciudades mas vendidas");
// console.log (ciudadesMasVendidas);

console.log (ciudadesDisponibles[1]);
console.log (ciudadesMasVendidas[0]);

const cantidadCiudades = ciudadesDisponibles.length;
console.log (`Tenemos ${cantidadCiudades} ciudades disponibles`);


ciudadesDisponibles.splice(1,1);
console.log (ciudadesDisponibles);
