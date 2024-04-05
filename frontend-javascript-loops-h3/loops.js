// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomst:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

console.log("Opdracht 1");

for (let i = 0; i < 3; i++) {
    console.log("Hoera!");
}

// ==========================================
// Opdracht 2. Maak een for-loop die tijdens iedere herhaling de waarde van i logt in de zin: "De waarde van i is [nummer]"
// Verwachte uitkomst:
// De waarde van i is: 0
// De waarde van i is: 1
// De waarde van i is: 2
// De waarde van i is: 3
// De waarde van i is: 4
// ==========================================

console.log(" ");
console.log("Opdracht 2");

for (let i = 0; i < 5; i++) {
    console.log("De waarde van i is", i);
}


// ==========================================
// Opdracht 3a. Maak een for-loop die de waarde van i logt. De loop begint bij 2 (!) en loopt tot en met 10.
// Verwachte uitkomst:
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// ==========================================


console.log(" ");
console.log("Opdracht 3a");

for (let i = 2; i < 11; i++) {
    console.log(i);
}


// ==========================================
// Opdracht 3b. Gebruik dezelfde for-loop uit 3a, maar log nu de waarde van i vermenigvuldigd met 7.
// Verwachte uitkomst:
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ==========================================


console.log(" ");
console.log("Opdracht 3b");

for (let i = 2; i < 11; i++) {
    console.log(i * 7);
}


// ==========================================
// Opdracht 3c. Gebruik dezelfde for-loop uit 3b, maar zorg dat de volgende zin wordt gelogd: "Wanneer een hond [x] jaar is, staat dat gelijk aan [y] mensenjaren." Tip: 1 hondenjaar staat gelijk aan 7 mensenjaren.
// Verwachte uitkomst:
// Wanneer een hond 2 jaar is, staat dat gelijk aan 14 mensenjaren.
// Wanneer een hond 3 jaar is, staat dat gelijk aan 21 mensenjaren.
// Wanneer een hond 4 jaar is, staat dat gelijk aan 28 mensenjaren.
// Wanneer een hond 5 jaar is, staat dat gelijk aan 35 mensenjaren.
// Wanneer een hond 6 jaar is, staat dat gelijk aan 42 mensenjaren.
// Wanneer een hond 7 jaar is, staat dat gelijk aan 49 mensenjaren.
// Wanneer een hond 8 jaar is, staat dat gelijk aan 56 mensenjaren.
// Wanneer een hond 9 jaar is, staat dat gelijk aan 63 mensenjaren.
// Wanneer een hond 10 jaar is, staat dat gelijk aan 70 mensenjaren.
// ==========================================


console.log(" ");
console.log("Opdracht 3c");

for (let i = 2; i < 11; i++) {
    console.log("Wanneer een hond", i, "jaar is, staat dat gelijk aan", i * 7, "mensenjaren.");
}


// ==========================================
// Bonusopdracht. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal EVEN of ONEVEN is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip 1: Het is mogelijk om beslissingsstructuren te gebruiken binnen de {} van een for-loop!
// Tip 2: Een getal is EVEN als je het deelt door 2 en er blijft niets over... Doet dit nog geen belletje rinkelen? Google dan eens naar 'MDN webdocs remainder operator'.
// ==========================================

console.log(" ");
console.log("Opdracht Bonus");

for (let i = 1; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is oneven");
    }
}