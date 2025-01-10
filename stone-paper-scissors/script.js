let box=document.querySelector(".options");
let userScore=0, computerScore=0;
let resetButton=document.querySelector("#reset-button");
box.addEventListener("click", (e)=>{
    let user=e.target.id;
    let computer=randomInt();
    computerVisual(computer);
    compare(user, computer);
    displayScore();
});

function randomInt(){
    let min = 1;
    let max = 3;
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}


function computerVisual(decision){
    let visual=document.querySelector("#computer-result-img");
    if(decision==1){
        visual.setAttribute("src", "images/rock.png");
    }
    else if(decision==2){
        visual.setAttribute("src", "images/paper.png");
    }
    else{
        visual.setAttribute("src", "images/scissors.png");
    }
}
function compare(user, computer){
    if(user==1 && computer==3 || user==2 && computer==1 || user==3 && computer==2) {
        userScore++;
    }
    else if(user==1 && computer==2 || user==2 && computer==3 || user==3 && computer==1){
        computerScore++;
    } 
}

function displayScore(){
    let your=document.querySelector("#your-score");
    let computer=document.querySelector("#computer-score");
    your.innerText=userScore;
    computer.innerText=computerScore;
}


resetButton.addEventListener("click", ()=>{
    userScore=0;
    computerScore=0;
    displayScore();
})