
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
    let num = 0;
    let arrayprompt = [];
    for (let i = 0; i < 5; i++){
        num = parseInt(prompt('inserisci numero'));

        if(myArray.includes(num)){
            arrayprompt.push(num);
        }
        numeriDom.innerHTML = arrayprompt;
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