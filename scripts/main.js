//User Choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 'paper' || 'scissors'){
        return userInput;
    } else {
        console.log('ERROR');
    }
}

//TEST User Choice Function
//console.log(getUserChoice('ROCK')); //returns : rock

//Computer Choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console.log('ERROR');
    }
}

//TEST Computer Choice Functiom
console.log(getComputerChoice()); //returned: scissors
console.log(getComputerChoice()); //returned: paper
console.log(getComputerChoice()); //returned: rock
console.log(getComputerChoice()); //returned: rock
console.log(getComputerChoice()); //returned: scissors
console.log(getComputerChoice()); //returmed: rock