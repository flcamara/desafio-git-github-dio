const user = {
    name: 'Fernando',
    lastName: 'Alves Camara'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log(`\nValores das propriedades do objeto user: `, Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log(`\nLista de Propriedades e valores:`, Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'Fernando Alves Camara'});

console.log(`\nAdiciona a propriedade fullName no objeto user`, user);
console.log(`\nRetorna um novo objeto mergeando dois ou mais objetos`, Object.assign({}, user,{age: 20}))

//Previne todas as alterações em um objeto
const newObj = {foo : 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
console.log(`\nVariavel newObj após as alterações 1: `, newObj);

delete newObj.foo;
console.log(`\nVariavel newObj após as alterações 2: `, newObj);

newObj.bar = 'foo';
console.log(`\nVariavel newObj após as alterações 3: `, newObj);

//Permite apenas alteração de propriedade existentes em um objeto, não permitindo criar ou deletar
const person = { name: 'Fernando' };
Object.seal(person);

person.name = 'Fernando Alves Camara'
delete person.name;
person.age = 18;

console.log(`\nVariavel person apos as alterações:`, person)