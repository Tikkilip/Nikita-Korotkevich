let array = [
    {name: "Ivan", salary: 1000},
    {name: "Anton", salary: 2000},
    {name: "Nikita", salary: 3000},
];

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].salary;
    }

    console.log(`Сумма зарплат сотрудников: ${sum}`);
    return sum;
}

getSum(array);