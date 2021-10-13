const users = ['Fernando', 'Natalia', 'Pedro', 'Julia'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol ('W')
}

const persons = [
    {
        name: 'Fernando',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Natalia',
        age: 20,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 25,
        gender: gender.MAN
    },
    {
        name: 'Julia',
        age: 17,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Items: ', persons.length)

//Verificar se é um array
console.log('A variavel persons é um array:', Array.isArray(persons))

//Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nApenas homens', mens)

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript ES6'
    return person;
})

console.log('\nPessoas com a adição de cursos', personsWithCourse)

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;

}, 0)

console.log('\nSoma de idades das pessoas', totalAge)


//Juntatndo operações
const totalEvenAges = persons.filter(person => person.age % 2 === 0).reduce((age, person) =>{
    age += person.age;
    return age;
}, 0)

console.log('\nSoma de idades das pessoas que tem idade par', totalEvenAges)