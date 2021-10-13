//Maneiras de criar um array

//forma padrao
const arr = [1, 2, 3];
const arr2 = new Array (1, 2, 3);

//Array Of
const arr3 = Array.of(1, 2, 3);
const arr4 = Array.of(1, 2, 'Fernando', 'Ronaldo');

//Array
const arr5 = Array(3);
//retronar um array com 3 espaços vazios
const arr6 = Array(3, 2);
// [3, 2]


//Array from - trasnforma NodeList em array
const divs = document.querySelectorAll('div');
const arraydiv = Array.from(divs);

//Inserir elementos em um array

//PUSH - add no final

const arr7 = ['banana', 'maça']
console.log(arr7)
//['banana', 'maça']
const add = arr7.push('abacaxi')
console.log(add)
//[3]
console.log(arr7)
//['banana', 'maça', 'abacaxi']


//unshift - adiciona no inicio

const arr7 = ['banana', 'maça']
console.log(arr7)
//['banana', 'maça']
const add = arr7.unshift('abacaxi')
console.log(add)
//[3]
console.log(arr7)
//['abacaxi', 'banana', 'maça']



//Remover elementos de um array

//POP - Remove o ultimo elemento do array

const arr8 = ['banana', 'maça', 'abacaxi']
const removeItem = arr7.pop();

console.log(removeItem);
// 'abacaxi'
console.log(arr8)
//['banana', 'maça']


//shift - Remove no inicio

const arr8 = ['banana', 'maça', 'abacaxi']
const removeItem = arr7.shift();

console.log(removeItem);
// 'banana'
console.log(arr8)
//['abacaxi', 'maça']


//Interação

//Concat - imutavel

const frutas = ['banana', 'melancia']
const salgados = ['coxinha', 'kibe', 'esfirra']

const alimentos = frutas.concat(salgados)

console.log(alimentos)
//['banana', 'melancia', 'coxinha', 'kibe', 'esfirra']

console.log(frutas)
//['banana', 'melancia']

console.log(salgados)
//['coxinha', 'kibe', 'esfirra']


//Slice - corta/fatia o array

const arr = [1, 2, 3, 4, 5]

arr.slice(0, 2);
//[1, 2]

arr.slice(2)
//[3,4,5]

arr.slice(-1);
//[5]

arr.slice(-3);
//[3,4,5]


//Spice - Remove item e adicona tambem

const arr = [1, 2, 3, 4, 5]

arr.splice(2)
//[3,4,5]

console.log(arr);
//[1,2]

arr.splice(0, 0, 'first'); //apartir da posicação 0, remova 0 itens, adicione 'first'
//[]

console.log(arr)
['first', 1, 2]