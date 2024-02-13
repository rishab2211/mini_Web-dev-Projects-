function rollingDice(){
    //  selecting each elements by their id's to manipulate later
    const Numselect = document.getElementById("NumSelect").value;
    const Num = document.getElementById("Num");
    const diceImg = document.getElementById("diceImgs")
    let vals= [];
    let imgs = [];


    //this funciton generates number from 1 to 6
function RandomNum(){
    let num = Math.floor(Math.random()*6)+1;
    return num;
}
    //with this loop we firstly generates random number in each iteration and pushes it to output number vals
    //and pushes images to every corresponding image
for(let i=0;i<Numselect;i++){
    let val=RandomNum();
    vals.push(val);
    imgs.push(`<img src="./assets/${val}.png ">`);
}

Num.textContent = `Rolling dice RESULT : ${vals.join(", ")}`;
diceImg.innerHTML = imgs.join(" ");

}
