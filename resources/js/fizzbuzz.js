let currentNumber = 0;
let lastNumbers = [0,0,0,0,0,0,0,0,0,0];
let score = 0;
let maxNumber = 0;

function askName() {
    //let person = prompt("Please enter your name", "Harry Potter");
    let person = 'Charles';
    if (person != null) {
    document.getElementById("fName").value = person;
    document.getElementById("fMaxNum").value = 50;
    }
}
function swapBoxes() {
    //if small box is hidden, make visable and vice versa
    console.log(window.getComputedStyle(document.getElementById("smallBox"),null).visibility);
    if( window.getComputedStyle(document.getElementById("smallBox"),null).visibility === 'visible')
    {
        //HIDE Small Box
        document.getElementById("smallBox").style.visibility='hidden';
        document.getElementById("smallBox").style.display='none';
        //Show Numbers Box
        document.getElementById("numbersBox").style.visibility='visible';
        document.getElementById("numbersBox").style.display='flex';

    }else{
        //HIDE Small Box
        document.getElementById("smallBox").style.visibility='visible';
        document.getElementById("smallBox").style.display='flex';
        //Show Numbers Box
        document.getElementById("numbersBox").style.visibility='hidden';
        document.getElementById("numbersBox").style.display='none';
    }
}
function startGame() {
    //Grab max number
    maxNumber = document.getElementById("fMaxNum").value;
    //Grab Username
    let player = document.getElementById("fName").value;
    //Debug Message
    console.log(`Game Start! \nMax Number is ${maxNumber}\nPlayer is ${player}`)
    swapBoxes();
    //Set up gameboard
    document.getElementById("currentNumbers").innerHTML=`Current Number: ${currentNumber}`;
    document.getElementById("lastNumbers").innerHTML = `Last Numbers: ${lastNumbers[0]}..${lastNumbers[1]}..${lastNumbers[2]}..${lastNumbers[3]}..${lastNumbers[4]}..${lastNumbers[5]}..${lastNumbers[6]}..${lastNumbers[7]}..${lastNumbers[8]}..${lastNumbers[9]}..`;

}
function determineFizzBuzz() {
    if(currentNumber % 3 == 0 && currentNumber % 5 == 0){
        return('FIZZBUZZ');
    }
    else if(currentNumber % 3 == 0){
        return('FIZZ');
    }
    else if(currentNumber % 5 == 0) {
        return('BUZZ')
    }
    else {
        return(currentNumber);
    }
}
//Function for FIZZ
function FIZZ() {
    if(determineFizzBuzz() == 'FIZZ'){
        console.log("CORRECT");
        score++;
    }
    updateNumbers();
}
//Function for FIZZ BUZZ
function FIZZBUZZ() {
    if(determineFizzBuzz() == 'FIZZBUZZ'){
        console.log("CORRECT");
        score++;
    }
    updateNumbers();
}
//Function for BUZZ
function BUZZ() {
    if(determineFizzBuzz() == 'BUZZ'){
        console.log("CORRECT");
        score++;
    }
    updateNumbers();
}
//Function for Reg Num
function regNum() {
    if(determineFizzBuzz() == currentNumber){
        console.log("CORRECT");
        score++;
    }
    updateNumbers();
}
//Function for Reload
function resultMsg()   {
    if(determineFizzBuzz() == 'BUZZ') {
        return(`${currentNumber} is divisable by 5!`)
    } else if (determineFizzBuzz() == 'FIZZ'){
        return(`${currentNumber} is divisable by 3!`)
    } else if (determineFizzBuzz() == 'FIZZBUZZ'){
        return(`${currentNumber} is divisable by 3 and 5!`)
    } else {
        return(`${currentNumber} is not divisable by 3 or 5!`)
    }
}
//Funciton for updating last numbers
function updateNumbers() {
    document.getElementById("result").innerHTML = determineFizzBuzz();
    document.getElementById("resultExplain").innerHTML = resultMsg();

    lastNumbers.unshift(determineFizzBuzz())
    if(currentNumber < maxNumber){
    currentNumber++;
    }
    else {alert('GAME OVER!')
        document.getElementById("btnFIZZ").setAttribute("disabled",true);
        document.getElementById("btnBUZZ").setAttribute("disabled",true);
        document.getElementById("btnFIZZBUZZ").setAttribute("disabled",true);
        document.getElementById("btnRegNum").setAttribute("disabled",true);        
    }
    document.getElementById("currentNumbers").innerHTML=`Current Number: ${currentNumber}`;
    document.getElementById("lastNumbers").innerHTML = `Last Numbers: ${lastNumbers[0]}..${lastNumbers[1]}..${lastNumbers[2]}..${lastNumbers[3]}..${lastNumbers[4]}..${lastNumbers[5]}..${lastNumbers[6]}..${lastNumbers[7]}..${lastNumbers[8]}..${lastNumbers[9]}..`;
    document.getElementById("score").innerHTML = score;
}