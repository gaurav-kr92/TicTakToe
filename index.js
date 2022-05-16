console.log("Welcome to Tic Tac Toe")
let Turn= new Audio("ting.mp3")
let Gameover= new Audio("gameover.mp3")
let turn="X"
let gameover= false;


//function change the value of turn from X to 0 and 0 to X.

const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

//function to check win 

const checkWin=()=>{
  let boxtext= document.getElementsByClassName('symbol');
  let wins =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ]
  wins.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
          document.querySelector('.info').innerText= boxtext[e[0]].innerText + " Won";
          gameover = true
          if(gameover){
              Gameover.play();
              document.querySelector('.imgbox').getElementsByTagName('img')[0].style.visibility = "visible"
          }
      }
  })
}

//Game logic 

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.symbol');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='' && !gameover){
            boxtext.innerText = turn;
            turn= changeTurn();
            Turn.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

//Add onclick listener to reset button 
let Reset=document.getElementsByClassName('reset')[0]
 Reset.addEventListener('click',()=>{
    let boxtext= document.querySelectorAll('.symbol');
    Array.from(boxtext).forEach(element =>{
        element.innerText =""
    });
    turn = "X";
    gameover= false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.visibility = "hidden"
 })