//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei  numeri da indovinare sono stati individuati.

//Collego la DOM
let numbersCont = document.querySelector('.numbersCont');
let startButton = document.querySelector('.startButton');
let resetButton = document.querySelector('.resetButton')

//Creo le variabili
let numeri = [];
let numeriUtente = [];
let risultato = "";

//Funzioni per generazione
generatoreNumeri (1, 10);

//Funzione di click per la generazione
startButton.addEventListener('click', () => {
    
    //Genero i numeri e li stampo
    numeri = generatoreNumeri (1, 10);

    //Do lo 0 come primo numero, per mostrare tutto
    numbersCont.innerText = numeri;

    //Al termine del countdown mostro tutto
    setTimeout(() => {

    alert("Hai visto 5 numeri, li ricordi?")
    numbersCont.innerHTML = "";

    }, 30000);

    //Chiedo di inserire i 5 numeri
    setTimeout (()=> {

        for (let i = 0; i < 5; i++) {
        
            numeriUtente.push(parseInt(prompt("Scrivi i numeri che ricordi:")));
        
        }

        //Controllo in log
        console.log("Hai scritto ", numeriUtente);

        //Valido i numeri
        let numeriGiusti = numeriUtente.filter((numb) => {
        
            return numeri.includes(numb);
            
      })

      //Verifica
      console.log('Numeri uguali: ', numeriGiusti);

      //Verifico i risultati
      risultato = alert(`Hai azzeccato ${numeriGiusti}`);

    }, 30000)
    
});

//Pulsante di restart e reset
resetButton.addEventListener('click', () => {

    numbersCont.innerHTML = 0;

})

//Funzione matematica genera numeri random
function generatoreNumeri(min, max) {

    let numeri = [];

    for (let i = 0; i < 5; i++) {
        numeri.push(Math.floor(Math.random() * max) + min);
    }

    return numeri;
}