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

var campionato = [
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

for(var i = 0; i < campionato.length; i++){
  var squadra = campionato[i]
  squadra.falliSubiti = randomNumber(0,10)
  squadra.puntiFatti = randomNumber(0,10)
}

console.log(campionato)

// creare un nuovo array di oggetti senza la proprietà puntiFatti
var nuovoCampionato = [];
for(var i = 0; i < campionato.length; i++){
  var vecchioCampionato = campionato[i]

  nuovoCampionato.push({
    nome: vecchioCampionato.nome,
    falliSubiti: vecchioCampionato.falliSubiti
  })
}

console.log(nuovoCampionato)
