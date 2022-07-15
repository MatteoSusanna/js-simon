/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che 
ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.*/


/*
1.faccio generare 5 numeri casuali   V
2.genero una funzione di settimeout
3.dopo 30 secondi richiama la funzione che mi fa sparire i numeri e apparire i prompt di confronto
4.Stampo i numeri confrontati solo se sono uguali a quelli casuali prima generati
*/

//creazione numeri casuali
let myArray = generaCasualiPush(1, 99);
//stampa numeri in HTML
let numeriDom = document.getElementById('numeri');
numeriDom.innerHTML = myArray;

setTimeout(svuota, 3000)
function svuota(){
    numeriDom.innerHTML = '';
}



setTimeout(promptfunction, 4000)
//funzione 5 prompt 
function promptfunction(){
    let num;
    let arrayprompt = [];
    for (let i = 0; i < 5; i++){
        num = prompt('inserisci numero');

        if(myArray.includes(num)){

            arrayprompt.push(num);
        }
    }
    
    

}










//funzione numeri casuali
function numeriCasuali (min, max){
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

//funzione numeri casuali non ripetuti
function generaCasualiPush(min, max){
    let myArray = []
    let numero = 0;

    for(i = 0; i < 5; i++ ){
        numero = numeriCasuali(min, max);

        while(myArray.includes(numero)){
            numero = numeriCasuali(min, max);
        }       
        myArray.push(numero);   
    }   
    return myArray;
}