let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".btnreset");
let newGame  = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer")

let turnO =true;// plyrO



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
 
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],

    [2, 4, 6],
    [6, 7, 8],

];
const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) =>{
    box.addEventListener("click",  () =>{
if (turnO){
    turnO = false;
    box.innerText = "O"
 }else{
    turnO = true;
    
    box.innerText = "X"
 }
   box.disabled = true;
   checkWinner();
   
    })
     
});
const disabledboxes = () =>{
    for (let box of boxes){
        box.disabled =true;
    }
};
const enableboxes = () =>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
}


const showWinner = (winner) =>{
  msg.innerText = `Winner is ${winner}`
  msgcontainer.classList.remove("hide");
  disabledboxes();
 
  
}

const checkWinner = (winner) =>{
    for (let pattern of winPatterns){
       
       
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="", pos2Val && pos2Val !="", pos3Val != ""){
         if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);

            showWinner (pos1Val);
         }
         
        }
    }
};
newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)

