let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const userWin=((userScore)=>{
    userScorePara.innerText=userScore;
});

const compWin = ((compScore)=>{
    compScorePara.innerText=compScore;
})

const genCompChoice = (()=>{
    const options = ["rock", "paper","scissor"];
    const op = Math.floor(Math.random()*3);
    return options[op];
});

const drawGame = (()=>{
    msg.innerText="Game Draw!-Play Again!";
    msg.style.backgroundColor="black";
    console.log("Game Draw");
});

const showWinner = ((winGame, userChoice, compChoice)=>{
    if(winGame)
    {
        userScore++;
        userWin(userScore);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        console.log("You win!");
    }
    else{
        compScore++;
        compWin(compScore);
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        console.log("You Lost!");
    }
});

const playGame = ((userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let winGame = true;
        if(userChoice==="rock")
        {
            winGame=compChoice==="paper"?false:true;
        }
         else if(userChoice==="paper")
        {
            winGame=compChoice==="scissor"?false:true;
        }
        else {
            winGame=compChoice==="rock"?false:true;
        }
        showWinner(winGame, userChoice, compChoice);
    }
});


choices.forEach((choice)=>{ 
    choice.addEventListener("click", ()=>{
        const userId = choice.getAttribute("id");
        playGame(userId);
    });
});
