// 7. Desarrolla una función que almacene valores en un arreglo, según el usuario los vaya ingresando

// Inputs (entradas)
// carro
// perro
// 54
// true
// [0, 2, 3, 5]

const palabras = [];

var max = prompt('¿Cuantos valores desea ingresar? : ', '');
for(i = 0; i < max; i ++){
  var palabra = prompt('Ingrese la palabra ' + (i+1) + ':');
  var res = agrupar(palabra, i);
}

// Función (logica)
// palabras += palabras

function agrupar(array, num)
{
  palabras[num] = array 
  return palabras;
}

// Ouputs
// ['carro', 'perro', 54, true, [0,2,3,5]]

console.log(res);
