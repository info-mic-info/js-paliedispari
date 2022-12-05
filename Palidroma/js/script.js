





 
function palindromo (word){

let word = prompt(`Inserisci una parola`)

let div_word= word.split("")
console.log(div_word)

let inverse_word = div_word.reverse()
console.log (inverse_word)

let string_inverse_word = inverse_word.join("")
console.log(string_inverse_word)

if (word===string_inverse_word ){
    console.log("palindrono")
}

else{
    console.log(`Non è palindroma`)
}

}


