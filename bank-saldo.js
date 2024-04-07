const bankAccounts = [
    {
        id: 1,
        name: "Jansen",
        accountNr: 'NL23INGBO3468356991',
        pin: 3450,
        saldo: 10800,
    },
    {
        id: 2,
        name: "Smit",
        accountNr: 'NL23INGBO5458463038',
        pin: 4570,
        saldo: 457,
    }
];

const givenAccountNr = 'NL23INGBO3468356991';
const givenPin = 3450;

for (let i = 0; i < bankAccounts.length; i++) {
    if (bankAccounts[i].accountNr === givenAccountNr) {
        if (bankAccounts[i].pin === givenPin) {
            console.log(`Welkom ${bankAccounts[i].name}. Uw saldo is € ${bankAccounts[i].saldo},-`);
        } else {
            console.error(`De pincode is onjuist.`);
        }
    } else {
        console.error(`Rekeningnummer is niet bekend.`);
    }
}