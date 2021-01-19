/*
TRACCIA
----------- Creare un array di oggetti:
----------- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
----------- Stampare a schermo la bici con peso minore
*/

/*

// --------------- MIA SOLUZIONE NON SONO RIUSCITO ---------------

var biciclettaUno = {
  nome: 'bici1',
  pesoKg: 15
}

var biciclettaDue = {
  nome: 'bici2',
  pesoKg: 30
}

var biciclettaTre = {
  nome: 'bici3',
  pesoKg: 20
}

var negozio = {
  magazzino: [biciclettaUno, biciclettaDue, biciclettaTre]
}

for (var x = 0; x < negozio.magazzino.length; x++) {

  var bilancia = negozio.magazzino[x].pesoKg

  console.log(bilancia)
}

// --------------- FINE MIA SOLUZIONE NON SONO RIUSCITO ---------------

*/


// -------- SOLUZIONE --------

var bici = [
  {
    nome: 'Masciarelli',
    peso: 10
  },
  {
    nome: 'bianchi',
    peso: 8
  },
  {
    nome: 'anaconda',
    peso: 3
  },
  {
    nome: 'peppaPigCycle',
    peso: 12
  },
]

var biciLeggera = bici[0]

for(var x = 1; x < bici.length; x++) { // ciclo l'array
  if(bici[x].peso < biciLeggera.peso) {
    biciLeggera = bici[x]
  }
}

console.log(biciLeggera)
