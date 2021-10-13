const name = 'Guilherme';

//Não podemos alterar o valor

/* name = 'Guilherme'; */

/* const user = {
    name = 'Guilherme'
}; */

//Mas se for um objeto (funcao), podemos trocar suas propriedades

//user.name = 'Ronaldo'

//Não podemos fazer o objeto "apontar" para um outro lugar

/* user = {
    name: 'Guilherme'
}; */


//Já de adicionar como um array, é possivel alterar diretamente, adicionar e remover itens

const persons = ['Guilherme', 'Pedro','Jennifer'];

//Podemos adicionar novos itens
persons.push('João');

//Remover item
persons.shift();

//Alterar diretamente
persons[1] = 'James';

console.log(`\nArray após as alterações `, persons)
