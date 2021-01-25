// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


// ------------ PERO' FUNZIONAVA
// function between(minimo, array, massimo){
//   var roba =[];
//
//   for (var i = minimo - 1; i <= massimo; i++) {
//     roba.push(array[i])
//   }
//
//   console.log(roba);
//   return roba;
// }
//
// var arrayBetween = ['matita', 'penna', 'mouse', 'tastiera', 'computer', 'accendino', 'sigarette', 'filtri', 'cartine'];
//
// between(2, arrayBetween, 6);


//  ------ CORREZIONE

var min = parseInt(prompt('inserisci il minimo'))
var max = parseInt(prompt('inserisci il massimo'))
var array = ["Pippo", "Pluto", "Topolino", "Paperino", "Archimede"]


function arrayFilter(numeroMinimo, numeroMassimo, arrayDiNomi){

  var newArray = [];

  for(var i = 0; i < arrayDiNomi.length; i++){

    if (i >= numeroMinimo && i <= numeroMassimo) {
      newArray.push(arrayDiNomi[i])
    }
  }
  return newArray;
}

console.log(arrayFilter(min, max, array))
