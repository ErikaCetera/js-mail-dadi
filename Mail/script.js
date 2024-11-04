// INPUT
const listMail = ['aldo@gmail.com', 'giovanni@outlook.it', 'giacomo@hotmail.it'];

// RACCOLTA DATI
const userMail = prompt("Inserisci la tua mail per accedere");


// ESECUZIONE
let message;

// Per ogni elemento dell' array partendo dall'indice 0
for (let i = 0; i < listMail.length; i++) {
    const curMail = listMail[i];

    // Verifico che la mail inserita dall'utenet è uguale ad una presente nel ciclo
    if ( curMail === userMail) {
        message = ('Accedi');
        // Se è presente dico al ciclo di stampare il messaggio e fermarsi
        break;
        // Altrimenti stampo altro messaggio
    } else {
        message = ('la mail non è presente, registrati.');
    }
}

// OUTPUT
console.log(message);
