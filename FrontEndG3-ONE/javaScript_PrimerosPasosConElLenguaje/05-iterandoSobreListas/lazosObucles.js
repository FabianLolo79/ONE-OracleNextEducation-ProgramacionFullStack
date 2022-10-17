console.log (`Trabajando con Lazos ó bucles \n`); 

const ciudadesDisponibles =  [`Bogotá`, `Caracas`, `Lima`];
ciudadesDisponibles.push(`Santiago`);

const edadComprador = 15;
const estaAcompanado = true;
// var posicion = 0;
let ciudadDestino = `Caracas`;
let destinoDisponible = false;
let puedeComprar = false;
console.log (`Ciudades disponibles: \n ${ciudadesDisponibles}`);

puedeComprar = (edadComprador >= 18 || estaAcompanado);
// Lazo ó bucle For=para

for (posicion = 0; posicion < ciudadesDisponibles.length; posicion++) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) {
        destinoDisponible = true;
        break;
    }
}

if (puedeComprar && destinoDisponible) {
    console.log(`Es posible adquirir el pasaje pasaje. La persona puede comprar y el destino está disponible`);
} else if (puedeComprar) {
    console.log (`No es posible vender el pasaje, está habilitado a comprar pero el destino no está disponible`);
} else {
    console.log (`No es posible vender el pasaje`);
}




/*
while (posicion < ciudadesDisponibles.length) {
    if (ciudadesDisponibles[posicion] == ciudadDestino) { NO entra a la primera condicion --> revisar los espacios en cada elemento del array
        destinoDisponible = true;
        break;
    } 
    else {
        console.log(`Destino NO disponible`);
    }
    posicion = posicion +1;
} 
console.log (`Destino disponible ${destinoDisponible}`);*/