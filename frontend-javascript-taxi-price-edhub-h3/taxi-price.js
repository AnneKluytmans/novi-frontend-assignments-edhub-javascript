const chosenService = "Uber Black";
const chosenKm = 23;

let price = '';

if (chosenService === "Uber Black") {
    price = chosenKm * 5;
    console.log(`De gekozen service is Uber Black`);
} else if (chosenService === "Uber X") {
    price = chosenKm * 2;
    console.log(`De gekozen service is Uber X`);
} else if (chosenService === "Uber Van") {
    price = chosenKm * 4;
    console.log(`De gekozen service is Uber Van`);
} else {
    console.log(`Er is geen geldige optie gekozen.`);
}

console.log(`Uw ritprijs is ${price},-. Wilt u de rit bevestigen?`);