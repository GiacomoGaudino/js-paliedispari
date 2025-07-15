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




