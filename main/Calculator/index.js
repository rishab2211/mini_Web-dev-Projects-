
const display= document.getElementById("display");

function inDisplay(inp){
    display.value += inp;
}

function equalsTo(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = error;
    }
}

function clearDisplay(){
    display.value = "";
}

// function deleting(){
//    let toClear =display.value;
//    console.log(deleting());
// }