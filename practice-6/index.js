let name = prompt("Enter your name");
let Enterpin = prompt("Enter your pin\npin:12345");
pin=12345;
balance=1000;
if (pin===Number(Enterpin)){
    let option = prompt("What do you want\n1:Chehck balance\n2:withdraw\n3:Deposite");
if(Number(option)===1){
    alert("your balance is"+balance)
}
else if (Number(option)===2){
    let withdraw = Number(prompt("How much ammount do you want to withdraw"));
if (withdraw>0 && withdraw<balance){
    alert("sucessfully withdraw " + withdraw)
    alert("New balance is "+(balance-withdraw))
}else{
    alert("Invalid ammount")
}
}
else if (Number(option)===3){
    let Deposite = Number(prompt("how much ammount do you want to deposite"))
if(Deposite>0){
    alert("Congratulation Sucessfull "+Deposite)
    alert("Now your balance is " + (Deposite+balance))
}else{
    alert("invalid ammount")
}
}else {
    alert("Invalid Option");
}
}else{
    alert("Invalid password")
}


console.log(name  , Password  ,balance);


