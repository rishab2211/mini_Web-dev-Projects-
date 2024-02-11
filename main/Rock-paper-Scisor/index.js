const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");



function play(chosenOption){
    let random = Math.floor(Math.random() * 3) +1;

    player.textContent = `YOU CHOSE : ${chosenOption}`;
    
    switch(random){
        case 1:
            computer.textContent = `COMPUTER CHOSE : Rock`
            if(chosenOption == "Rock"){
                result.textContent ="You Won!";
                result.style.color = "green";               
            }else{
                result.textContent = "Lose! Better luck next time.";
                result.style.color = "red";
                
             }
             break;
        case 2:
            computer.textContent = `Computer chose Paper`
            if(chosenOption == "Paper"){
                result.textContent ="You Won!";
                result.style.color = "green"; 
                             
            }else{
                result.textContent = "Lose! Better luck next time.";
                result.style.color = "red";
             }
             break;
        
        case 3:
            computer.textContent = `Computer chose Scisor`
            if(chosenOption == "Scisor"){
                result.textContent ="You Won!";
                result.style.color = "green"; 
                            
            }else{
                result.textContent = "Lose! Better luck next time.";
                result.style.color = "red";
             }
             break;
        default:
            console.log("something went wrong");

    }

}