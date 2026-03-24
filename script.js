console.log("Script started");

let guesses = 0;
let firstCardId = "";
let secondCardId = "";

//The parameter helps us use one function for multiple different things "CardId"
function flipCard(cardId) {
    let card = document.getElementById(cardId);
    card.style.color = "rgba(79, 82, 161, 0.66)";
    
    if (firstCardId == ""){
    firstCardId = cardId;
    } else if (cardId != firstCardId) {
        secondCardId = cardId;
        setTimeout(checkForMatch, 1000);
    }
    console.log(firstCardId);
    console.log(secondCardId); 
}

function checkForMatch(){
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);
    console.log(card1);
    console.log(card2);
    if (card1.innerText == card7.innerText){
        console.log("match");
        card1.style.backgroundColor = "green"
        card2.style.backgroundColor = "green"
    } else {
        card1.style.color = "white";
        card1.style.backgroundColor = "white";
        card2.style.color = "white";
        card2.style.backgroundColor = "white";
    }
    firstCardId = "";
    secondCardId = "";

}