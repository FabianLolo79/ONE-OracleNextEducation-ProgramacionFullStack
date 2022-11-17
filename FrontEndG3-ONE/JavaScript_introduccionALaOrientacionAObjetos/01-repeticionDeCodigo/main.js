class Cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}
const cliente1 = new Cliente();
// referenciando datos mediante la clase cliente1
cliente1.nombreCliente = "Paloma";
cliente1.dniCliente = "34444341";
cliente1.numeroCuenta = "565656";
cliente1.saldoCuenta = 500000;

console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nombreCliente = "Paz";
cliente2.dniCliente = "12546";
cliente2.numeroCuenta = "321654";
cliente2.saldoCuenta = 1000000;
console.log(cliente2);

const cliente3 = new Cliente(); 
cliente3.nombreCliente = "Fabián";
cliente3.dniCliente = "27671037";
cliente3.numeroCuenta = "3654789";
cliente3.saldoCuenta = 150;
console.log(cliente3);



//referenciando datos mediante variables
// const nombreCliente = "Leonardo";
// const dniCliente = "27671037";
// const numeroCuenta = "123456789";
// const saldoCuenta = 1000;
