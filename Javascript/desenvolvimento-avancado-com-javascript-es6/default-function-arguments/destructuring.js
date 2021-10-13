var arr = ['Apple', 'Orange']
var obj = {
    name: 'Celso',
    props: {
        age: 20,
        favoriteColors: ['black', 'blue', 'white']
    }
};

var age = obj.props.age

// Destruturing Assignment

var { name: name2 } = obj
var [fruit1, fruit2] = arr
var {
    props: {
    age : age2,
    favoriteColors: [color1, color2, color3]
    }
} = obj

console.log(fruit2)


var arr = [{name: 'Apple', type: 'fruit'}]

var fruit1 = arr[0].name

let [{ name : namefruit}] = arr
console.log(namefruit)

// functions

function soma([a, b] = []) {
    return a + b
}

console.log(soma([5, 6]))