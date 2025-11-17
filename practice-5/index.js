let total= prompt("Enter your total marks that you got your exam")
total=Number(total)
if(total>=1000){
    let pass = alert("you are pass");
    document.querySelector(".show").innerHTML= "pass";
}else{
    let fail = alert("you are fail");
     document.querySelector(".show").innerHTML= "fail";
}