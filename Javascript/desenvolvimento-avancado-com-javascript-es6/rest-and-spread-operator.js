//rest operator

function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(soma(5, 5, 3, 2))


const soma = (a, b, ...rest) => {
    console.log(a, b, rest)

} 

console.log(soma(5, 5, 3, 2))

//

//spread operator

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const soma =  (...rest) => {
    return multiply(...rest)
}

console.log(soma(5, 5, 3, 2))

//spread operator pode ser usado em: strings, array, objeto iteraveis, objetos literais

const str = 'Digital Inovation One';
const arr = [1, 2, 3]
const arr2 = [...arr, 4, 5, 6]

function logArgs(...args) {
    console.log(args)
}
console.log(...arr2)

const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2)

const obj3 = {
    test: 123,
    subObj: {
        test: 123
    }
}

const obj4 = {...obj3};

obj4.subObj.test = 456

console.log(obj3)