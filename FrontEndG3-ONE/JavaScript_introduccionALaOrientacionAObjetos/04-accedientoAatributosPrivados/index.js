/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.setCliente = cliente;

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual (CuentaLeonardo) '+saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808';
cliente2.rutCliente = '8989';


const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

console.log(CuentaDeMaria.cliente); 

let parametroValor = 100;



/*


console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
*/