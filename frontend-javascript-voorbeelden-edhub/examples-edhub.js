//novi frontend edhub examples javascript
//test node and nodemon

console.log("Hoera, hij doet het!");
console.log("Hoera, nodemon doet het ook!");
console.log("Nog een check voor de fun!");



//difference const vs let

const school = "Novi Hogeschool";
console.log(school);

let counter = 0;
console.log(counter);

//hier komen wat acties die de gebruiker uitvoert

counter = 1;
console.log(counter);

//hier komen wat acties die de gebruiker uitvoert

counter = 2;
console.log(counter);



//isNaN gebruik je om gebruikers input van numerieke waardes te controleren

const waarde = parseInt("geen getal");
if (isNaN(waarde)) {
    console.log("De waarde is geen geldig getal.");
} else {
    console.log("De waarde is:" + waarde);
}



//voorbeelden logische operatoren

if ((ingredients !== undefined) && (ingredients.length > 3)) {
    console.log("We kunnen boodschappen doen!");
}

const text = "";

if (!text) {
    console.log("De string is leeg");
} else {
    console.log("De string is niet leeg");
}



//voorbeelden if-else-statement

//voorbeeld 1
if (grade >= 5.5) {
    // het eerste blok wordt uitgevoerd als de conditie true is
    console.log("Je hebt het gehaald!");
} else {
    // het tweede blok wordt uitgevoerd als de conditie false is
    console.log("Je hebt het niet gehaald..");
}


//voorbeeld 2
let recipe = 'Spaghetti';

if (recipe !== undefined) { // Als recipe al toegewezen is...
    // print dan de naam van het recept
    console.log("Vandaag maken we het recept: " + recipe);
} else {
    recipe = "Spinazie lasagne"; // en anders… wijs recipe toe
}


//voorbeelden switch-statement

//voorbeeld 1
const fruit = "Appels";

switch (fruit) {
    case 'Bananen':
        console.log('Het zijn bananen!');
        break;
    case 'Appels':
        console.log('Het zijn appels!');
        break;
    case 'Citroenen':
        console.log('Het zijn citroenen!');
        break;
    default:
        console.log('Er is geen vrucht gekozen');
}


//voorbeeld 2
const browser = 'Chrome';

switch (browser) {
    case 'Edge':
        console.log('Gelukkig gebruik je geen Internet Explorer meer!');
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Deze browser wordt ondersteund!');
        break;

    default:
        console.log('Hmmm... Hopelijk ziet de pagina er nog ok uit.');
}



// voorbeelden arrays en objecten

const weer = ["zonnig", "regen", "wind"];
weer[0];
weer[0] = "onweer";



const recipe = {
    name: 'Spinazie lasagne',
    cookingTime: 45,
    isGlutenFree: false,
    ingredients: ['Lasagne bladen', 'Spinazie', 'Kaas'],
    printInfo: () => {
        console.log('Dit recept is niet glutenvrij.');
    }
};

if (recipe.isGlutenFree) {
    console.log('Bevat geen gluten!');
}



const soccerInfo = {
    players: [
        {
            name: 'Davy Klaassen',
            position: 'middenvelder',
            club: 'Ajax',
            goals: ['18-04-2022', '28-02-2018', '04-01-2018'],
            yellowCards: [
                {
                    competitor: 'FR',
                    date: '23-04-2022',
                },
                {
                    competitor: 'IT',
                    date: '23-04-2022',
                },
            ],
        },
        {
            name: 'Memphis Depay',
            position: 'aanvaller',
            club: 'FC Barcelona',
            goals: ['23-04-2022', '18-04-2022', '12-04-2022', '28-02-2018', '04-01-2018'],
            yellowCards: [
                {
                    competitor: 'EN',
                    date: '23-04-2022',
                },
            ],
        },
        {
            name: 'Daley Blind',
            position: 'verdediger',
            club: 'Ajax',
            goals: ['23-04-2022', '28-02-2018', '04-01-2018'],
            yellowCards: [],
        },
    ],
};


// Voorbeelden for-loop

const names = ["red", "blue", "green"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


const words = ["huis", "landing", "kin", "paraplu"];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        console.log(words[i]);
    }
}






// Voorbeeld gebruik van '' of "" binnen een string

  // Optie 1 m.b.v. \

const singleQuote = '"We don\'t make mistakes. We just have happy accidents." - Bob Ross'
console.log(singleQuote);
// output: "We don't make mistakes. We just have happy accidents." - Bob Ross

const doubleQuote = "\"We don't make mistakes. We just have happy accidents.\" - Bob Ross"
console.log(doubleQuote);
//output: "We don't make mistakes. We just have happy accidents." - Bob Ross

  // Optie 2 m.b.v. ``

const accentGrave = ` "We don't make mistakes. We just have happy accidents." - Bob Ross`
console.log(accentGrave);
//output: "We don't make mistakes. We just have happy accidents." - Bob Ross




// Voorbeeld gebruik van enters en tabs binnen een string

   // Optie 1 m.b.v. \n en \

const addressTab =
    'Homer J. Simpson\
    742 Evergreen Terrace\
    Springfield'

console.log(addressTab);
//Output: Homer J. Simpson  742 Evergreen Terrace  Springfield

const addressEnter =
    'Homer J. Simpson\n' +
    '742 Evergreen Terrace\n' +
    'Springfield'

console.log(addressEnter);
//Output:
// Homer J. Simpson
// 742 Evergreen Terrace
// Springfield

   // Optie 2 m.b.v. ``

const addressAccentGrave = `Homer J. Simpson
742 Evergreen Terrace
Springfield`

console.log(addressAccentGrave);
//Output:
// Homer J. Simpson
// 742 Evergreen Terrace
// Springfield



// Voorbeeld combineren van datatypes -> gebruik `` en ${methodes}

const sum = (x, y) => x + y
const x = 5
const y = 100

console.log(`The sum of ${x} and ${y} is ${sum(x, y)}.`);


// Gebruikers input

const userInput = prompt('Hoi! Hoe heet je?');
console.log(userInput);


// Javascript code weergeven op webpagina

document.getElementById('id-van-bijbehorende-html-tag').textContent = 'wat je wil tonen';


// Errors loggen en weergeven

console.error(`Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`);
document.getElementById('error-message').textContent = 'Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.';
