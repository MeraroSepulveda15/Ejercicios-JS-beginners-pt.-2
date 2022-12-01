// 5. Desarrolla una función que reciba: nombre completo y fecha de nacimiento, y regrese el RFC, para ello, deberás transformar esos datos en un RFC.

// Inputs (entradas)
// Nombre = string
// Fecha de nacimiento = num

var nombreCompleto = prompt('Ingrese su nombre completo:', '');
var nombreCompl = nombreCompleto.toUpperCase();
let nomCom = nombreCompl.split(' ');

var fechaNacimiento = prompt('Ingrese su dehca de nacimiento (DD/MM/AAAA):', '');
let fecNac = fechaNacimiento.split('/');
var res = ObtenerRFC(nomCom,fecNac);


// Funcion (logica)
function ObtenerRFC(nombre,fecha)
{
  var homoclave = [];
  var Nombre_Fecha = [];
  var RFC = [];

  Nombre_Fecha.push(nombre[2][0] + nombre[2][1] + nombre[3][0] + nombre[0][0]);
  Nombre_Fecha.push(fecha[2][2] + fecha[2][3] + fecha[1][0] + fecha[1][1] + fecha[0][0] + fecha[0][1]);

  for (i = 0; i < 3; i++ ) {
    homoclave += Math.floor(Math.random() * 10);
  }
  RFC.push(Nombre_Fecha[0] + Nombre_Fecha[1] + homoclave);
  return RFC;
}

// Outputs
// Mensaje: Su RFC es: "RFC"

console.log('Su RFC es: ' + res);
