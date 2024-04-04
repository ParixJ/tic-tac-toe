
//Select class/element for logic :
let boxes = document.querySelectorAll(".box");
let para = document.querySelector(".para");
let btn = document.querySelector(".reset");
let game = document.querySelector(".game");
//Variable for total number of winning posiblities :
const pattern = [
        [0,1,2],
        [2,5,8],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [0,4,8] ];
let winner;
let turnx = true;

//Function to enable boxes after match winner is decided or the match is draw :
function enable_reset_Boxes() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.removeAttribute("disabled","");
        para.innerText = "";
    })
}
//Enable boxes after match and resets turn :
function reset_game() {
    //reset turn to X :
    turnx = true;
    enable_reset_Boxes();
}
//Add an event listener on click of reset button :
btn.addEventListener("click",() => {
    reset_game();
})

//Select each box from boxes variable with foreach loop :
boxes.forEach((box) => {

    box.addEventListener("click" ,() => {

        //Disable All boxes after match winner is declared :
        function sect() {
            if(box.textContent !== "")
            {
                box.setAttribute("disabled","")
            }
        }

        //Disable individual box after click :
        let disable_box = () => {
            for(let box of boxes){
            box.setAttribute("disabled","")
            }
        }

        //Function to select winner after a winnning possiblity is occured : 
        function win() {
            for(let patt of pattern)
            {
                //Check each position of pattern array with boxes if all the boxes have same character :
                let p1 = boxes[patt[0]].innerText;
                let p2 = boxes[patt[1]].innerText;
                let p3 = boxes[patt[2]].innerText;
                //Statement occurs if all the box position are not empty :
                if(p1 !== "",p2 !== "",p3 !== "")
                {
                    //If statement for checking if all box position have saame turn :
                    if (p1 === p2 && p2 === p3)
                    {
                        //Stores winning symbol in winners variable :
                        winner = p1;
                        //Display winner in a paragraph in html file : 
                        para.textContent = `The Winner Is ${winner}`;
                        //disable all the boxes  for no further action :
                        disable_box();
                    }
                }
            }
            
        }

        //Statement to check who's turn it is :
        if(turnx == true)
        {
            //Display symbol of current turn :
            box.textContent = "X";
            //Flip turn variable's bullion value to let other symnol's turn :  
            turnx = false;
        }
        else {
            box.textContent = "O";
            turnx = true;
        }

        sect();
        win();
    })

});

