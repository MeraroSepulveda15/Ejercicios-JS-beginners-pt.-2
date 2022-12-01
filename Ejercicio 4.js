// 4. Desarrolla una función que reciba como parámetro grados Fahrenheit, realiza la conversión a grados Celsius, y según sea el caso, aparezca lo siguiente en consola:
// Si oF está entre 14 y 32, imprime “Temperatura baja”
// Si oF está entre 32 y 68, imprime “Temperatura adecuada”
// Si oF está entre 68 y 96, imprime “Temperatura alta”
// Si no está entre ningún caso anterior, imprime “Temperatura desconocida”

// Inputs (entradas)
// gradosFahrenheit = number

var grados = prompt('Ingrese la temperatura en grados Fahrenheit:', '');
var res = conversionFaC(grados);

// Función (lógica)
// gradosCelsius = (gradosFahrenheit - 32) / 1.8;

function conversionFaC(gradosFahrenheit)
{
  var gradosCelsius = (gradosFahrenheit - 32) / 1.8;
  if(gradosFahrenheit >= 14 && 32 >= gradosFahrenheit){
    console.log('Temperatura baja');
  }
  else if(gradosFahrenheit > 32 && 68 >= gradosFahrenheit){
    console.log('Temperatura adecuada');
  }
  else if(gradosFahrenheit > 68 && 96 >= gradosFahrenheit){
    console.log('Temperatura alta');
  }
  else{
    console.log('Temperatura desconocida');
  }
  return gradosCelsius;
}
// Outputs
// Mensaje: "x" grados Fahrenheit son: "y" grados Celsius
console.log(grados + ' grados Fahrenheit son ' + res + ' grados Celsius');
