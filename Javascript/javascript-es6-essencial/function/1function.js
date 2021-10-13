function fn(){
    return 'Code here'
}

const arrowFN = () =>'Code here arrow';

const arrowFN2 = () => {
    //mais expressoes
    return 'Code here';
}

//Funções tambem são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn());
console.log(fn.prop)

//Receber parametros
const logValue = value => console.log(value);
const logFNResult = fnParam => console.log(fnParam());

logFNResult(fn);

//Receber e retornar funções arrow
const controlFnExec => fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);
handleFnExecution();

//Exemplo acima agora com function
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
            fnParam();
        }
    }
}