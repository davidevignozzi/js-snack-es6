// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function between(minimo, array, massimo){
  var roba =[];

  for (var i = minimo; i <= massimo; i++) {
    roba.push(array[i])
  }

  console.log(roba);
  return roba;
}

var arrayBetween = ['matita', 'penna', 'mouse', 'tastiera', 'computer', 'accendino', 'sigarette', 'filtri', 'cartine'];

between(2, arrayBetween, 6);
