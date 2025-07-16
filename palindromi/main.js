// Palidroma

// Chiedere all’utente di inserire una parola
let user_word = prompt("inserisci una parola o una frase").toLowerCase();
let user_word_without_space = user_word.replace(/ /g, "");
console.log(user_word_without_space);

// Creare una funzione per capire se la parola inserita è palindroma
function reverseWord(word) {
    let wordReverse = ""
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
    }
    return wordReverse;
}
const wordReverse = reverseWord(user_word_without_space);
console.log(wordReverse);

if (user_word_without_space === wordReverse) {
    console.log("la parola è palindroma");
    alert("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
    alert("la parola non è palindroma");
}




