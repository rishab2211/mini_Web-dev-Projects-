

function passwordGenerator(length,includesUpperchar,includesLowerchar,includeSymbols,includesNumbers){
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "~!@#$%^&*"

    let allowedChars = "";
    let passwordGenerated = "";

    allowedChars += includesUpperchar?upperCaseChar:"";
    allowedChars += includesLowerchar?lowerCaseChar:"";
    allowedChars += includeSymbols?symbols:"";
    allowedChars += includesNumbers?numbers:"";


    console.log(allowedChars);
    if(length<=0){
        console.log(`length of the password cannot be zero`);
    }
    if(allowedChars.length === 0){
        console.log("at least one set of characters needs to be selected");
    }

    for(let i=0;i<length;i++){
        let randInd = Math.floor(Math.random() * allowedChars.length)+1;
        passwordGenerated+=allowedChars[randInd];
    }
    return passwordGenerated;
}
function generatePassword(){
    const length =document.getElementById("length").value;
    const includeSymbols =true;
    const includesLowerchar =true;
    const includesNumbers = true;
    const includesUpperchar =true;


    document.getElementById("msg").textContent = "The Strongest PASSWORD is here!! 😈👽🤖";
    document.getElementById("msg").style.color = "green";
    document.getElementById("Password").textContent = passwordGenerator(length,includesUpperchar,includesLowerchar,includeSymbols,includesNumbers);

}





