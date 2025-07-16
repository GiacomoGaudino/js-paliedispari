// Palidroma

// Chiedere all’utente di inserire una parola
let user_word = prompt("inserisci una parola o una frase").toLowerCase();
user_word_without_space = user_word.replace(/ /g, "");
console.log(user_word_without_space);

// Creare una funzione per capire se la parola inserita è palindroma
function reverseWord(user_word_without_space) {
    let wordReverse = ""
    for (let i = user_word_without_space.length - 1; i >= 0; i--) {
        const thisWordReverse = user_word_without_space[i];
        wordReverse += thisWordReverse;
    }
    return wordReverse;
}
const wordReverse = reverseWord(user_word_without_space);
const wordReverseWithoutSpace = wordReverse.replace(/ /g, "");
console.log(wordReverseWithoutSpace);

if (user_word_without_space === wordReverseWithoutSpace) {
    console.log("la parola è palindroma");
    alert("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
    alert("la parola non è palindroma");
}




