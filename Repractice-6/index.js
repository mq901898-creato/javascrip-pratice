let name = prompt("What is your name");
let userpassword = Number(prompt("Enter your valid password"));
password=12345
balance=1000
password=Number(password);
if (userpassword===password){
    let option =Number(prompt("what do you want?\n1:check Balancen\n2:Deposite\n3:withdraw"));
if (option===1) {
    alert (name+" your Balnace is "+ balance);
}
else if(option===2){
    let Deposite=Number(prompt("How much ammount do want to deposite?"));
if (Deposite>0){
    alert("Sucessfully Deposite " + (Deposite+balance))
}else {
    alert("Enter a valid ammount")
}
}
else if (option===3){
    let withdraw = Number(prompt("How much ammount do you want to deposite?"))
    if (withdraw>0 && withdraw<balance) {
        alert("sucessfull withdraw " + withdraw)
        alert("Now your balance is " + (balance-withdraw))
    } else{
        alert("Invalid ammount")
    }
}else {
        alert("Invalid option")
    }
}else{
    alert("Invalid password");
}

console.log(name  , userpassword  , balance ,Deposite ,withdraw);
