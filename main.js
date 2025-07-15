// Palidroma

// Chiedere all’utente di inserire una parola
let user_word = prompt("inserisci una parola").toLowerCase()

// Creare una funzione per capire se la parola inserita è palindroma
function reverseWord(user_word) {
    let wordReverse = ""
    for (let i = user_word.length - 1; i >= 0; i--) {
        const thisWordReverse = user_word[i];
        wordReverse += thisWordReverse;
    }
    return wordReverse;
}
const wordReverse = reverseWord(user_word);
console.log(wordReverse);

if (user_word === wordReverse) {
    console.log("la parola è palindroma");
    alert("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
    alert("la parola non è palindroma");
}


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

