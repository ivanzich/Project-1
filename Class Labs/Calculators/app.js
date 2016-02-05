console.log("linked");
window.onload = function(){
//basic calculator
//what does it do?
//get the input for basic-num-1
//get the operator
//get the input for basic-num-2
//assign answer to a variable
//how to achieve this
//variables assigned to input 1 and 2
//switch statement
//write 4 cases based on operator input value
//if input is +, add num1 and num 2
//assign added value to answer variable
//change the text in basic-answer-alert 
//to display the results of your switch statement
//Number(x)

function calculateNums (){
  var num1 = document.getElementById("basic-num-1").value;
  var num2 = document.getElementById("basic-num-2").value;
  var op = document.getElementById("basic-operation").value;
  var answer;
  console.log(num1);
  console.log(op);
  switch(op) {
    case "+": answer = Number(num1) + Number(num2);
    break;
    case "-": answer = num1 - num2;
    break;
    case "*": answer = num1 * num2;
    break;
    case "/": answer = num1 / num2;
    break;
  }
  document.getElementById("basic-answer-alert").innerHTML = answer;
}
document.getElementById("basic-calc").addEventListener("click", calculateNums);
//how to iterate on this
};

//trip calculator
//what does it do ? let's you calculate cost of the  trip, taking into account next arguments
//when the speed is less than 60, the formula is distance / mpg * cost
//when the speed is more than 60, the formula is `distance / (mpg - (speed - 60) * 2) * cost


function calculateTripCost() {
  var distance = document.getElementById("trip-distance").value;
  var mpg = document.getElementById("trip-mpg").value;
  var cost = document.getElementById("trip-cost").value;
  var speed = document.getElementById("trip-speed").value;
  var tripAnswer;

  if (speed < 60 ) {

    tripAnswer = distance / mpg * cost;
  }

  else if (speed > 60) {

    tripanswer  = distance / (mpg - (speed - 60) * 2) * cost;

  }
  document.getElementById("trip-answer-alert").innerHTML ;
  
}

document.getElementById("trip-calc").addEventListener("click",tripAnswer);



