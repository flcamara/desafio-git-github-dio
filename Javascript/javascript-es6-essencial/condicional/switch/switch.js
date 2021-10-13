const fruit = 'abacaxi';

switch(fruit){
    case 'banana':
        console.log('R$ 3,00 / kg');
        break;
    case 'maça':
        console.log('R$ 4,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 5,00 / kg')
        break;
    default:
        console.log('Produto não existe no estoque');
    break
}