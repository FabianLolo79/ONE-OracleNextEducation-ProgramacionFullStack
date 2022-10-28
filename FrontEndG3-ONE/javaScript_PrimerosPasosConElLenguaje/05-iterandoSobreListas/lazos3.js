const datos = [
    {
        'ciudad': 'Bogotá',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 380
    },
    {
        'ciudad': 'Montevideo',
        'precio': 500
    },
];

const presupuestoDisponible = 400;
let ciudadSeleccionada = '';

for (let i = 0; i < datos.length && ciudadSeleccionada == ''; i++) {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
}
if (ciudadSeleccionada == '')
    console.log (`No tenemos pasajes disponibles`);
else 
    console.log (`Puedes comprar pasaje para: ${ciudadSeleccionada}`);