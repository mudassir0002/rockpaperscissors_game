let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWinner,userChoice,compChoice) =>{
    if(userWinner){
        console.log("YOU WON!!!");
        msg.innerText = `YOU WON!!! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        console.log("YOU LOSE");
        msg.innerText = `YOU LOSE computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    if(compChoice===userChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor , paper
            userWin = compChoice=== "paper" ? false : true;
        }else if (userChoice==="paper"){
            //rock scissors
            userWin = compChoice=== "scissors" ? false : true;
        }else if(userChoice==="scissors"){
            // rock paper
            userWin = compChoice=== "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("Id");
    playGame(userChoice);
    })
})


