const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Lucas',
        grade: 5
    },
    {
        name: 'Ana',
        grade: 9
    },
    {
        name: 'Nicole',
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos Aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);