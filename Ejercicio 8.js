// Simula una pasarela de pago, tomando en cuenta lo siguiente:
// 1) Tendrás 3 tipo de productos: alimento, limpieza y belleza.
// 2) Si el producto es de tipo alimento, aplica un 20% de descuento
// 3) Si el producto es de tipo limpieza, aplica un bonus de $25 MXN a la cuenta del usuario
// 4) Si el producto es de tipo belleza, aplica un decuento de 40% y agrega 10 puntos a su tarjeta de regalo
// Imprime la información del usuario, la información del pago y los cambios realizados.

var tipoProducto = prompt('Ingrese el tipo del producto (alimento, limpieza o belleza): ', '');
var costoProducto = prompt('Ingrese el costo del producto: ', '');
var res = pasarelaPago(tipoProducto, costoProducto);

console.log('Tipo de producto comprado: ' + tipoProducto);
console.log('Costo del producto: ' + costoProducto);
console.log('Descuento aplicado: ' + res[3] + '%');
console.log('Costo del producto con el descuento: ' + res[0]);
console.log(' ----------------------------------------- ');
console.log('Bonus: ' + res[1]);
console.log('Saldo en la tarjeta de regalo: ' +res[2])


var bonus = 0;
var descuento = 0;
var tarjeta = 0;
var desApli = 0;

function pasarelaPago(array, num)
{
  if(array == 'alimento')
  {
    descuento = num * 0.20;
    desApli = 20;
    num = num - descuento;
    bonus = 0; 
    tarjeta = 0;
    return [num, bonus, tarjeta, desApli];
  }
  else if(array == 'limpieza')
  {
    desApli = 0;
    bonus = 25;
    tarjeta = 0;
    return [num, bonus, tarjeta, desApli];
  }
  else if(array == 'belleza')
  {
    descuento = num * 0.40;
    desApli = 40;
    num = num - descuento;
    bonus = 0;
    tarjeta = 10;
    return [num, bonus, tarjeta, desApli];
  }
}