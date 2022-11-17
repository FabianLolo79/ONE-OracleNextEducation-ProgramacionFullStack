//definicion de clases
class Cliente
{
    nombreCliente;
    dniCliente;
    cuil;
}

class CuentaCorriente
{
    numero;
    #saldo;

    constructor() {
        this.#saldo = 0;
        this.numero = '';
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;    
    }

    verSaldo() {
        return this.#saldo;
    }
}

cuentaDeLeonardo = new CuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es '+ saldo );

saldo =cuentaDeLeonardo.depositoEnCuenta(500);
saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es '+ saldo);
// console.log(cuentaDeLeonardo);
// cuentaDeLeonardo.retirarDeCuenta(500);
// console.log(cuentaDeLeonardo);






