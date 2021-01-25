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

// Utilizzare il filter per creare un nuovo array di oggetti, con solo gli studenti promossi.
// promossi
const promossi = studenti.filter((element) => {
  return element.promosso === true
})
console.log(promossi)

// numero random
function numeroRandom(min, max){
 var result = Math.floor(Math.random() * (max + 1 - min) + min);
 return result;
}

// selzeiono un numero casuale da 1 a 3
const num = numeroRandom(0,2)

// se la posizione nei promossi è === al numero selezionato
// crea un array con come unico oggetto l'oggetto in posizione === al numero selezionato
const capitano = promossi.filter((element, index) => {
  return index === num
})
console.log(capitano)
