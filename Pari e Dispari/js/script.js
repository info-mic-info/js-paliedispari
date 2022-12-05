// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



let par_disp = prompt(`scrivi "pari" o "dispari"`)
console.log(`La tua scelta è: ` + par_disp)


// let insert_number= parseInt(prompt (`inserisci un numero da 1 a 5`))

// let number_pc= Math.floor(Math.random() * 5 + 1);

// console.log(number_pc)

// let sum= insert_number + number_pc

// console.log(sum)

// if (sum % 2 == 0){

//     console.log( sum +`il numero è pari`)
// }

// else{
//     console.log(sum +`il numero è dispari`)
// }



let insert_number= parseInt(prompt (`inserisci un numero da 1 a 5`))
console.log (`il tuo numero` + insert_number)

let number_pc= Math.floor(Math.random() * 5 + 1);

console.log(`Numero del computer` + number_pc)

let sum= insert_number + number_pc

console.log(`Somma`+ sum)

if (sum % 2 == 0 && par_disp== "pari"){

    console.log( sum +`hai vinto`)
}

else if (sum % 2 == 1 && par_disp== "dispari"){

    console.log(sum + ` hai vinto`)
}

else{
    console.log(sum +` hai perso`)
}