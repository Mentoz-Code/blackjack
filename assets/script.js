//variables
let cards = [] //                             array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = { //                            object
    name : "Mntz",
    chips : 0  
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function randomCard() {
    let ran = Math.floor(Math.random() * (11 - 2 + 1)) + 2
    return ran
}

function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    //render all cards

    for ( let i = 0 ; i < cards.length ; i++ )
    {
        cardsEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum

    //if statements
    if (sum <= 20) {
        message = "Draw a new card?"
        hasBlackJack = false
        isAlive = true
    } else if ( sum === 21 ) {
        message = "You got Blackjack!"
        hasBlackJack = true
        isAlive = true
        player.chips += 150
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "You lost"
        hasBlackJack = false
        isAlive = false
    }

    messageEl.textContent = message

}

function drawCard() {
    if ( isAlive === false || hasBlackJack === true || sum === 0 ){} else {
    let newCard = randomCard()
    cards.push(newCard)
    sum += newCard
    cardsEl.textContent += " " + newCard
    renderGame()
    sumEl.textContent = "Sum: " + sum
    }
}