//importacion de CLases
import {Cliente} from './cliente.js';
import {CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '00001';
cuentaDeLeonardo.cliente = cliente;

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual (cuentaDeLeonardo) '+saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'María';
cliente2.dniCliente = '56304121' ;
cliente2.rutCliente = '8989';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '00002';
cuentaDeMaria.cliente = cliente2;

cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
console.log('Cuenta de María', cuentaDeMaria);
/*
const saldoMaria = cuentaDeMaria.verSaldo();
console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaDeLeonardo) '+saldoLeonardo);*/