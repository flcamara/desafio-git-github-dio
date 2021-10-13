const frutas = ['melancia', 'acerola', 'laranja'];

frutas.forEach(fruta => console.log(fruta))
//melancia
//acerola
//laranja

frutas.forEach((fruta, index) => console.log(index, fruta))
//0 'melancia'
//1 'acerola'
//2 'laranja'

frutas.map((fruta, index) => `${index} - ${fruta}`)
//["0 - melancia", "1 - acerola", "2 - laranja"]

frutas =  ['melancia', 'acerola', 'laranja'];


const arr = [1, 2, [3, 4]]
arr.flat();
//[1, 2, 3, 4]


const arr = [1, 2, 3, 4]

arr.flatMap(value => [value *2]);
//[2, 4, 6, 8]

arr.flatMap(value => [[value * 2]])
// [[2], [4], [6], [8]]

const arr = [1, 2, 3, 4]

const arrIterator = arr.keys();

arrIterator.next()
//{value: 0, done: false}

arrIterator.next()
//{value: 1, done: false}

arrIterator.next()
//{value: 2, done: false}

arrIterator.next()
//{value: 3, done: true}


const arrIterator = arr.value();

arrIterator.next()
//{value: 1, done: false}

arrIterator.next()
//{value: 2, done: false}

arrIterator.next()
//{value: 3, done: false}

arrIterator.next()
//{value: 4, done: true}

const arrIterator = arr.entries();

arrIterator.next()
//{value: [0, 1], done: false}

arrIterator.next()
//{value: [1, 2], done: false}

arrIterator.next()
//{value: [2, 3], done: false}

arrIterator.next()
//{value: [3, 4], done: false}



const arr = [1, 2, 3, 4]

const maiorquedois = arr.find(value => value > 2)

console.log(maiorquedois)
//3

const arr = [1, 2, 3, 4]

const maiorquedois = arr.findIndex(value => value > 2)

console.log(maiorquedois)
//2


const arr = [1, 2, 3, 4]

const todosmaiorquedois = arr.filter(value => value > 2)

console.log(todosmaiorquedois)
//[3, 4]


const arr = [1, 3, 3, 2, 3, 4]

const firstindexitem = arr.indexOf(3)

console.log(todosmaiorquedois)
//1

const arr = [1, 3, 3, 2, 3, 4]

const firstindexitem = arr.lastIndexOf(3)

console.log(todosmaiorquedois)
//4


//busca

const arr = [1, 3, 3, 4, 3]

const item1 = arr.includes(1)
//true

const item2 = arr.includes(6)
//false


const students = [
    {
        nome: 'Fernando',
        grade: 7
    },
    {
        nome: 'Daiane',
        grade: 5
    },
    {
        nome: 'Edgar',
        grade: 10
    },
]

students.some(students => students.grade >= 7)
//true

students.find(students => students.grade >= 7)
//{nome: Fernando , grade: 7}

students.every(students => students.grade >= 7)
//false

//ORDENAR

students.sort((current, next) => current.grade - next.grade)
/*
    {
        nome: 'Daiane',
        grade: 5
    },
    {
        nome: 'Fernando',
        grade: 7
    },
    {
        nome: 'Edgar',
        grade: 10
    },

*/

students.sort((current, next) => next.grade - current.grade)

/*
    {
        nome: 'Edgar',
        grade: 10
    },
    {
        nome: 'Fernando',
        grade: 7
    },
    {
        nome: 'Daiane',
        grade: 5
    },

*/

const arr = [1, 2, 3]

arr.reverse();
[3, 2, 1]

const arr = [1, 2, 3]

arr.join('-');
// "1-2-3"

const arr = [1, 2, 3]
arr.reduce((total, value) => total += value, 0);
//6