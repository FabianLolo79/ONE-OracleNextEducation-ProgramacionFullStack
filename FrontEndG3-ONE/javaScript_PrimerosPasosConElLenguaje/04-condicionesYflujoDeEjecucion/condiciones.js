console.log (`Trabajando con condiciones \n`); 

const ciudadesDisponibles =  [`Bogotá`, ` Caracas`, ` Lima`, `\n`];


const edadComprador = 35;
const estaAcompanado = false;

/*if (edadComprador >= 18) {
    // aqui ejecuta el código si es mayor de edad
    console.log (`El comprador es mayor de edad`);
    console.log (`Ciudades disponibles para viajar: \n ${ciudadesDisponibles}`); 
    // console.log (); 
} else if (estaAcompanado) {
    console.log (`El comprador menor de edad está acompañado`)
    console.log (`Ciudades disponibles para viajar: \n ${ciudadesDisponibles}`);
    } else {
     // este codigo se ejecuta cuando el comprador NO es mayor de edad
    console.log (`El comprador NO es mayor de edad`);
    console.log (`No es posible ofrecer viajes`);
}*/



// Operadores logicos
/*console.log (`Mayor que`);
console.log (edadComprador >= 18);
console.log (`Mayor`);
console.log (edadComprador > 18);
console.log (`Menor que`);
console.log (edadComprador <= 18);
console.log (`Menor`);
console.log (edadComprador < 18);
console.log (`Igual a`);
console.log (edadComprador == 18);
console.log (`Diferente de`);
console.log (edadComprador != 18);*/

// Y (AND); O (OR); NO (NOT)
// AND = && se deben cumplir las 2 condiciones
// OR = || se debe cumplir 1 de las 2 condiciones
// NOT = ! no se cumple la condición


// Operadores lógicos encadenados
if (edadComprador >= 18 || estaAcompanado) {
    // aqui ejecuta el código si es mayor de edad
    console.log (`Es posible vender pasajes`);
    console.log (`Ciudades disponibles para viajar: \n ${ciudadesDisponibles}`); 
    // console.log (); 
} else {
     // este codigo se ejecuta cuando el comprador NO es mayor de edad
    console.log (`El comprador NO es mayor de edad y NO está acompañado`);
    console.log (`No es posible ofrecer viajes`);
}

// Proceso de embarque
const tienePasaje = true;
console.log (`Proceso de embarque: \n`)
if (tienePasaje && (edadComprador >= 18 || estaAcompanado) ) {
    console.log (`Comprador con pasaje. Feliz viaje`)
} else {
    console.log (`Comprador sin pasaje, no es posible hacer el embarque`)
}
