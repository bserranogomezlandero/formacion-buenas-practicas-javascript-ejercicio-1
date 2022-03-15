// Añade en cada console.log vacío un string con el valor que saldrá por consola en el anterior console.log. El resultado se mostrará al pulsar el botón y deberá aparecer por consola cada resultado por duplicado

document
  .getElementById('showResultsBtn')
  .addEventListener('click', showResults);

let result1 = 'Primer resultado';
let result2 = 'Segundo resultado';
let result3 = 'Tercer resultado';
let result4 = 'Cuarto resultado';

function getResult1() {
  let result1 = 'Este es el primer resultado';
  console.log(getResult1Aux(result1));
  console.log(); // Añade aquí que valor saldrá por el console.log anterior.
}

function getResult1Aux(value) {
  result1 = value;
  return result1;
}

function getFuncResult2() {
  const result2 = 'Este es el segundo resultado';
  function getResult2Aux() {
    return getResult1Aux(result2);
  }
  return getResult2Aux;
}

function getResult2() {
  result2Aux = getFuncResult2();
  console.log(result2Aux());
  console.log(); // Añade aquí que valor saldrá por el console.log anterior.
}

function getResult3() {
  let result3 = 'Este es el tercer resultado';
  result3Aux = getResult3Aux(result3);
  console.log(result3Aux);
  console.log(); // Añade aquí que valor saldrá por el console.log anterior.
}

function getResult3Aux() {
  return result3;
}

function getResult4() {
  let result3 = 'Este es el cuarto resultado';
  result3Aux = getResult4Aux(result3);
  const getResult4Aux = function () {
    return result4;
  };
  console.log(result3Aux);
  console.log(); // Añade aquí que valor saldrá por el console.log anterior.
}

function showResults() {
  try {
    getResult1();
    getResult2();
    getResult3();
    getResult4();
  } catch (e) {
    console.log('Error relacionado con la inicialización...');
  }
}
