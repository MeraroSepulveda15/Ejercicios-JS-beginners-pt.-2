// 3. Imprime la siguiente figura en consola
// Inputs (entradas)
// Función (lógica)

var num = '_54321';
for(i = 0; i < 5; i++){
  var newNum = num.slice(1);
  num = newNum;
  console.log(newNum);
}

// Outputs (salida)
