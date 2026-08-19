let userSco = 0;
let comSco = 0;
let totalmo = 0;

let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userScore");
let comScore = document.querySelector("#comScore");
let msg = document.querySelector(".msg");
let totalmove = document.querySelector("#total-move");
let reset = document.querySelector(".reset");
let genComChoice = () =>{
    let option = ["rock" , "paper" , "scissor"];
    let ranIndx = Math.floor(Math.random() * 3);
    return option[ranIndx];
}

const showWinner = (userWin) =>{
    if(userWin){
        userSco++;
        userScore.innerText = userSco;
         msg.innerText ="Congratulations !! You Won";
         msg.style.backgroundColor ="green";
         totalmo++;
        totalmove.innerText = totalmo;

    }
    else {
        comSco++;
        comScore.innerText = comSco;
        msg.innerText ="You lose!!";
        msg.style.backgroundColor = "red";
        totalmo++;
        totalmove.innerText = totalmo;
    }
}
let playGame = (userChoice) =>{
    const comChoice = genComChoice();
    
    if(userChoice === comChoice){
        msg.innerText ="Game Draw!!";
        msg.style.backgroundColor = "#d36077";
        totalmo++;
        totalmove.innerText = totalmo;
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (comChoice == "paper") ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = (comChoice == "scissor") ? false : true;
        }
        else if(userChoice == "scissor"){
            userWin = (comChoice == "rock") ? false : true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
   
    playGame(userChoice);
  });
});

reset.addEventListener("click", () =>{
    msg.innerText ="Play Again!!";
    userSco = 0;
    userScore.innerText = 0;
    comSco = 0;
    comScore.innerText = 0;
    totalmo = 0;
    totalmove.innerText = 0;
});