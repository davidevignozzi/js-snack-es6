const studenti = [
  {
    nome: 'Davide',
    cognome: 'Vignozzi',
    classe: 4,
    promosso: true
  },
  {
    nome: 'Fabiana',
    cognome: 'Sirico',
    classe: 4,
    promosso: false
  },
  {
    nome: 'Alessia',
    cognome: 'Pellicoro',
    classe: 2,
    promosso: true
  },
  {
    nome: 'Alessia',
    cognome: 'Lippolis',
    classe: 1,
    promosso: false
  },
  {
    nome: 'Gabriele',
    cognome: 'Donatone',
    classe: 5,
    promosso: true
  },
]

// Utilizzare il filter per creare un nuovo array di oggetti, con solo gli studenti bocciati.
// bocciati
const bocciati = studenti.filter((element) => {
  return element.promosso === false
})
console.log(bocciati)

//Aumentermo di 1 (con il map) il numero incrementale della classe, solo se lo studente è stato promosso. (dal primo liceo c'è chi passa al secondo e così via)
// promossi
let classeSuccessiva = studenti.map((element, index, array) => {
  if (element.promosso === true) {
    element.classe += 1
  }
  return element
})
console.log(classeSuccessiva)

// Eliminare dal nuovo array tutti coloro che hanno fatto l'esame di maturità e non sono più in quella scuola.
// diplomati
const diplomati = studenti.filter((element) => {
  if (element.classe > 5 && element.promosso === true) {
    return element
  }
})
console.log(diplomati)

// elimino i diplomati dai ragzzi della classe successiva
classeSuccessiva.pop(diplomati)
console.log(classeSuccessiva)

/*
-------------------------------------------------------------------------------- SOLUZIONE
-------------------------------------------------------------------------------- classeSuccessiva = classeSuccessiva.filter((element) => {
--------------------------------------------------------------------------------    return element.classe < 6
-------------------------------------------------------------------------------- })
-------------------------------------------------------------------------------- console.log(classeSuccessiva)
*/

/*
################################################################################
let classeSuccessiva = studenti.map((element, index, array) => {
  if (element.promosso === true) {
    element.classe += 1
  }
  if (element.classe < 6) {
    return element
  }
}) ----------------------------------------------------------------------------- // arrivaati a questo punto ci sono tutti gli studenti fino a classe 5, dal 6 in poi è undefined

console.log(classeSuccessiva)

classeSuccessiva = classeSuccessiva.filter((element) => {
  return typeof element !== 'undefined'
}) ----------------------------------------------------------------------------- // ritorno tutti gli studenti che non siano di tipo undefined

console.log(classeSuccessiva)
################################################################################
*/
