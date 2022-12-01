// 10. Generar los primeros N números primos, donde n es ingresado por el usuario.

// Inputs (entradas)
// Cantidad de números primos = num
var cantidad = prompt('Ingresa la cantidad de número de primos a imprimir: ', '');
var res = numerosPrimos(cantidad);

// Función (logica)

function primo(num1) {
  for (let i = 2; i <= num1 / 2; i++) 
  {
    if (num1 % i == 0)
    {
      return false;
    }
  }
  return true;
}

function numerosPrimos(num) {
  const cadenaPrimos = [];
  var i = 2;
  while (cadenaPrimos.length < num) {
    if (primo(i)) 
    {
      cadenaPrimos.push(i);
    }
    i = i == 2 ? i + 1 : i + 2;
  }
  return cadenaPrimos;
}
// Ouputs (Salidas)
// 2, 3, 5, 7, ... 
console.log('Los primeros ' + cantidad + ' números primos son: ' + res):
