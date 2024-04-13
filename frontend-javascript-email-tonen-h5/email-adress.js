// Voorbeeld functies en methoden: e-mailadres tonen op basis van de naam

const teachers = [
    {
        name: 'Edson',
        email: 'e.dagraca@novi.nl',
    },
    {
        name: 'Marieke',
        email: 'm.elsinga@novi.nl',
    },
    {
        name: 'Mattie',
        email: 'm.valk@novi.nl',
    },
    {
        name: 'Robert',
        email: 'r.doornbos@novi.nl',
    },
];

const searchInput = 'Marieke';

function searchEmailAdress(employees, nameOfEmployee) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase() === nameOfEmployee.toLowerCase()
        || employees[i].name.toLowerCase().includes(nameOfEmployee.toLowerCase())
        ) {
            return employees[i].email;
        } else {
            console.log('Nope...');
        }
    }
}

const emailAdress = searchEmailAdress(teachers, searchInput);
console.log(emailAdress);


