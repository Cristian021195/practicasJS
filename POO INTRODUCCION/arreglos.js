const familia = ['Cristian','Maria', 'Isac', 'David']
let frase = 'Este texto debemos invertirlo';
let clave = ['H','o','l','a'];
let fraseArr = []
let union = []
let mezcla = []



//forEach
familia.forEach(integrante => {
    console.log(integrante)    
});

//split: separa en caracteres el string
fraseArr = frase.split('');
console.log(fraseArr)
fraseArr = fraseArr.reverse();
console.log(fraseArr)

//union arreglos
union = fraseArr.join('')
console.log(union)

//mezcla: 'hola', 'aloh' --> haolloah
let claveAux = clave.reverse();
//console.log(`Contenido de clave: ${clave} || Contenido de claveAux: ${claveAux}`)
for(i = 0; i < (clave.length); i++){
    mezcla.push(clave[i])
    mezcla.push(claveAux[i])
}

let resultado = mezcla.join('');
let buffer = new Buffer(resultado).toString('base64');
console.log(buffer)
