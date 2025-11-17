let num1=prompt("Enter your first Number")
let sign=prompt("Enter Your sign ,+,-,*,%,/")
let num2=prompt("Enter your Secound Number")

num1=Number(num1);
num2=Number(num2);
document.querySelector("#design h2").innerHTML =  "num1"+sign+"num2" ;