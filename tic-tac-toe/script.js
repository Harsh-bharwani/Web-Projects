let turn="O"; // X 
let boxes=document.querySelectorAll("button");
let resetButton=document.querySelector("#reset-button");
// let newGame=document.querySelector("#new-game-button");
let winMsg=document.querySelector(".msg-container");
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

boxes.forEach((box)=>{
    if(box.getAttribute("id")!=="reset-button"){
        box.addEventListener("click", ()=>{
            if(turn==="O") {
                box.innerText="O";
                turn="X";
            }
            else{
                box.innerText="X"; 
                turn="O";
            }
            box.disabled=true;
            checkWinner();
        });
    }
});
resetButton.addEventListener("click", ()=>{
    for(box of boxes){
        if(box.getAttribute("id")!="reset-button")
        box.innerText="";
        box.disabled=false;
    }
    turn="O";
});

function printWinner(arg){
    winMsg.innerText=`Congratulations, winner is ${arg}`;
    winMsg.classList.remove("hide");
}
function checkWinner(){
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[0]].innerText== boxes[pattern[1]].innerText && boxes[pattern[1]].innerText== boxes[pattern[2]].innerText ) {
            printWinner(boxes[pattern[0]].innerText);
            resetButton.click();
            break;
        }
    }
}
