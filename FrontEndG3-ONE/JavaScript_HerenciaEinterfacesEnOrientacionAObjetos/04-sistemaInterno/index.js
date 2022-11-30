/*Importación de clases*/
import { Cliente } from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('54321');
console.log(SistemaAutenticacion.login(cliente, '54321'));

// const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '27666988', 138000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '12345'));

const gerente = new Gerente('Pedro Rivas', '45655741', 842000);
gerente.asignarClave('12345');
console.log(SistemaAutenticacion.login(gerente, '12345'));

const director = new Director('Elena Moreno', '12365748', 1258456);
director.asignarClave('12345');
console.log(SistemaAutenticacion.login(director, '12345'));

// dejó de funcionar al crear las carpetas CUENTAS y EMPLEADOS y se agregó los archivos. creo que no se importaron bien los archivos

