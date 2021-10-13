//Lazy Evaluation

function randomNumber () {
    console.log("Gerando valor aleatorio")
    return Math.random () * 10
}



function multiply (a, b = randomNumber()){ 
    return a * b;
}

console.log(multiply(5))
console.log(multiply(5, 2))