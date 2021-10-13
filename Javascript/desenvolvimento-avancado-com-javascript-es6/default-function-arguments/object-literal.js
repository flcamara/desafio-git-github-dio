//ocultamento da function (soma: function (a, b)), coloando ja seu atributo soma

var obj = {
    soma (a, b) {
        return a + b
    }
}

console.log(obj.soma(1,5))

//

var Propname = 'Nome'

var obj = {}

obj[Propname] = 'Nome 1'

console.log(obj)