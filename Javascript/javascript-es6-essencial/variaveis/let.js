(() =>{
    let test = 'valor função';
    console.log(`Valor dentro da função: "${test}"`)

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if: "${test}"`)
    }

    if (true) {
        let test = 'valor de outro if';
        console.log(`Valor de outro if: "${test}"`)
    }

    console.log(`Valor apos a exevução do if: "${test}"`)
})();


//const se comportaria da mesma forma neste exemplo