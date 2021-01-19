// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)
const bici = [
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

let biciLeggera = bici[0]

for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i]
  }
}

console.log(biciLeggera)

const {nome,peso} = biciLeggera

document.getElementById('container').innerHTML =
`<ul>
<li>${nome}</li>
<li>${peso}</li>
</ul>`
