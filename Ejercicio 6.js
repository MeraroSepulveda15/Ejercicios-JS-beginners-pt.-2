//6. Desarrolla una función que ejecute una función secundaria después de n segundos ingresados por el usuario.

// Inputs (entradas)
// n segundos

var segundo = prompt('Ingrese el tiempo de espera de respuesta en segundos: ', '');
var tiempo = segundo * 1000;
principal(tiempo);

// Función (logica)

function principal(num)
{
  setTimeout(saludos, num);
}

// Outputs
// Mensaje: Hola Mundo

function saludos()
{
  console.log("Hola Mundo"):
}
