// 2. Desarrolla una función dónde el usuario ingrese el nombre del mes y se le devuelvan los días correspondientes a ese mes.

// Inputs (entradas)
// Mes = Febrero 

var mes = prompt('Ingrese un mes:', '');
var res = meses(mes);

// Función (lógica)

function meses(array)
{

  while(array == 'Enero','enero', 'Marzo','marzo', 'Mayo','mayo', 'Julio','julio', 'Agosto','agosto', 'Octubre','octubre', 'Diciembre','diciembre' ){
    numDias = 31;
    return numDias
  }
  while(array == 'Febrero','febrero'){
    numDias = 28;
    return numDias
  }
  while(array == 'Abril','abril', 'Junio','junio', 'Septiembre','septiembre', 'Noviembre','noviembre'){
    numDias = 30;
    return numDias
  }
  
}

// Outputs
// 28 días
console.log(mes + ' tiene ' + res + ' días');
