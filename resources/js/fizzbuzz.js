function askName() {
    //let person = prompt("Please enter your name", "Harry Potter");
    let person = 'Charles';
    if (person != null) {
    document.getElementById("fName").value = person;
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
function submit() {
    //Grab max number
    let maxNumber = document.getElementById("fMaxNum").value;
    //Grab Username
    let player = document.getElementById("fName").value;
    //Debug Message
    console.log(`Game Start! \nMax Number is ${maxNumber}\nPlayer is ${player}`)
    swapBoxes();
}