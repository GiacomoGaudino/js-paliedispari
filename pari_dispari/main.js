//Pari e Dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
function askEvenOrOdd() {
    const input = prompt("Scegli 'pari' o 'dispari'").toLowerCase().trim();
    if (input === "pari" || input === "dispari") {
        return input;  // input valido, lo restituiamo
    } else {
        alert("Per favore, scrivi solo 'pari' o 'dispari'.");
        return askEvenOrOdd();  // richiamo ricorsivo finché non va bene
    }
}

const evenOrOdd = askEvenOrOdd();
console.log("Hai scelto:", evenOrOdd);
const user_number = prompt("inserisci un numero da 1 a 5");
console.log(user_number);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const num_random = getRndInteger(1, 5);
console.log(num_random);
//Sommiamo i due numeri
let sum = Number(user_number) + num_random;
console.log(sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(sum) {
    return sum % 2 === 0
}
function isOdd(sum) {
    return sum % 2 !== 0
}

//Dichiariamo chi ha vinto.
if (evenOrOdd === "pari" && isEven(sum)) {
    alert("hai vinto")
} else if (evenOrOdd === "dispari" && isOdd(sum)) {
    alert("hai vinto")
} else {
    alert("il pc ha vinto")
}


