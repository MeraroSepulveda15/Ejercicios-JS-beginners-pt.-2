// 1. Mediante entradas de texto (prompt), pide al usuario el ingreso de dos números, valida si el primer número es mayor al segundo y muestra un alert con el siguiente mensaje: 'num1 es mayor a num2', de lo contrario, muestra el mensaje: 'num2 es mayor a num1'.

// Inputs (entradas)
// num1 = num;
// num2 = num;

var num1 = prompt('Ingrese el primer número', '');
num1 = parseInt(num1);
var num2 = prompt('Ingrese el segundo número', '');
num2 = parseInt(num2);

// Función (lógica)

if (num1 > num2) {
  var MayorOMenor = true;
} else {
  var MayorOMenor = false;
}

// Outputs (salida)
// mensaje: 'num1 es mayor a num2' o 'num2 es mayor a num1'

if (MayorOMenor == true) {
  window.alert(num1 + ' es mayor a ' + num2);
} else {
  window.alert(num2 + ' es mayor a ' + num1);
}
