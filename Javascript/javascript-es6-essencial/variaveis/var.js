var teste = 'exemplo';

(() => {
    console.log(`Valor dentro da função: "${teste}"`);

    if(true){
        var teste = 'exemplo'
        console.log(`Valor dentro do if: "${teste}"`);
    }

    console.log(`Valor apos a execução do if: "${teste}"`)
})();