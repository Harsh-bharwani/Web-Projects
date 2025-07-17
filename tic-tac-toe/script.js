let turn_container=document.querySelector(".turn-container");
let boxes=document.querySelectorAll("button");
let resetButton=document.querySelector("#reset-button");
let winMsg=document.querySelector(".msg-container");
let total_count=0;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const clickSound=new Audio("audio/clickSound.wav");
const winSound=new Audio("audio/winSound.wav");

let game=document.querySelector(".game");

function clickSoundPlay(){
    clickSound.play();
}
function winSoundPlay(){
    winSound.play();
}

game.addEventListener("click", (e)=>{
    clickSoundPlay();
    let box=e.target;   
    if(total_count==0) {
        enable_button();
    }
    if(box.getAttribute("class")!="game"){   // box.tagName==="BUTTON"
        let turn=document.querySelector("#turn"); 
        if(turn.innerText=="O") {
            box.innerText="O";
            turn.innerText="X";                
        }
        else{
            box.innerText="X"; 
            turn.innerText="O";
        }
        // Add the scaling effect
        box.classList.add("clicked");
        setTimeout(() => {
            box.classList.remove("clicked"); // Remove class after animation
        }, 300);
        box.disabled=true;
        checkWinner();
        total_count++;    
        if(total_count==9){
            drawMsg();   
        };
    };
});

function drawMsg(){
    winMsg.innerText=`It's a draw... 🤝`;
    total_count=0;
    disable_button();
    printResetMsg();
    winSoundPlay();
}
function printResetMsg(){
    turn_container.classList.add("print-reset-msg");
    turn_container.innerHTML="<marquee scrollamount='10' direction='left'>Please Reset the game!</marquee>";
}
function enable_button(){
    turn.innerText="O";
    winMsg.classList.add("hide");
    for(box of boxes){
        if(box.getAttribute("id")!="reset-button"){
            box.innerText="";
            box.disabled=false;
        }
    }
}
function disable_button(){
    turn.innerText="O";
    winMsg.classList.remove("hide");
    for(box of boxes){
        if(box.getAttribute("id")!="reset-button"){
            box.disabled=true;
        }
    }
}
resetButton.addEventListener("click", ()=>{
    clickSound.play();
    winMsg.classList.add("hide");
    total_count=0;
    turn_container.classList.remove("print-reset-msg");
    turn_container.innerHTML="<span>Turn: </span><div id='turn'>O</div>";
    enable_button();
    for(box of boxes){
        box.classList.remove("highlight");
    }
});

function printWinner(arg){
    winSoundPlay();
    winMsg.innerText=`Congratulations🏆, Winner is ${arg}...`;
    winMsg.classList.remove("hide");
    winMsg.classList.add("win-message");
    highlightPattern(pattern);
    total_count=0;
    disable_button();
    printResetMsg();
}

function highlightPattern(pattern){
    for(let ind of pattern){
        boxes[ind].classList.remove("clicked");
        boxes[ind].classList.add("highlight");
    }
}
function checkWinner(){
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText== boxes[pattern[1]].innerText && boxes[pattern[1]].innerText== boxes[pattern[2]].innerText ) {
            printWinner(boxes[pattern[0]].innerText);
            highlightPattern(pattern);
            break;
        }
    }
}


