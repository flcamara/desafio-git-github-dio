let user = {
    name: 'Fernando'
};

console.log('\n', user)

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log('\n', user)

user['name'] = 'Outro nome 2';
console.log('\n', user)

const prop = 'name'
console.log('\n', prop)

user[prop] = 'Outro nome 3';
console.log('\n', prop)

//Criando uma propriedade
user.lastName = 'Alves Camara'
console.log(`\n`,user)

//Deletando uma propriedade
delete user.name;
console.log(`\n`, user)