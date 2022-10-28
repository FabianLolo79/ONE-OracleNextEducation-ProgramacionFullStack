console.log (`Trabajando con Listas`);

const Bogota = "Bogotá";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";
// console.log (Bogota, Lima, Santiago, BuenosAires);

// Array, arreglos o listas
// const ciudadesDisponibles = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
// console.log (ciudadesDisponibles);

// declaración de array
const ciudadesDisponibles = new Array();

// fincion push agrega un dato al final del array
ciudadesDisponibles.push("Bogota");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
console.log ("Ciudades Disponibles");
// console.log (ciudadesDisponibles);

// declaración de array abreviado
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

// splice borra datos y agrega
ciudadesDisponibles.splice(1,1);
console.log (ciudadesDisponibles);

// función unshift() agrega un dato al inicio del array

ciudadesDisponibles.unshift(`Quito`);
console.log (ciudadesDisponibles);

