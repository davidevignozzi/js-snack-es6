// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// FUNZIONI
//funzione numero random
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
// FINE FUNZIONI

const campionato = [
  {
    nome: 'juventus',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'inter',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'milan',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'roma',
    puntiFatti: 0,
    falliSubiti: 0
  },
]

// assegnare a puntiFatti e falliSubiti un numero random

for(let i = 0; i < campionato.length; i++){
  let squadra = campionato[i]
  squadra.falliSubiti = randomNumber(0,10)
  squadra.puntiFatti = randomNumber(0,10)
}

console.log(campionato)

// creare un nuovo array di oggetti senza la proprietà puntiFatti
const nuovoCampionato = [];

for(let i = 0; i < campionato.length; i++){

  let vecchioCampionato = campionato[i]

  const {nome, falliSubiti} = vecchioCampionato;

  nuovoCampionato.push({
    nome, // nome: nome,
    falliSubiti, // falliSubiti: falliSubiti,
  })

// ----------------- ----------- es5 -------------
//  ---------------- nuovoCampionato.push({
//  ----------------  nome: vecchioCampionato.nome,
//  ----------------  falliSubiti: vecchioCampionato.falliSubiti
//  ---------------- })
}

console.log(nuovoCampionato)
