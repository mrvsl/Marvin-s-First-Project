function display(){
  document.getElementById("displayText").innerHTML = "A cat is a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.";
}
function displayAlert(){
  alert("gobble gobble gobble");
}

function future() {
  var name = prompt("What's your name?");
  var number = prompt("Enter a number from 1-10");
  var celebrity = prompt("Who is your favorite celebrity?");
  var location = prompt("What is your favorite place in the world?");

  var message = "Congratulations " + name + ", in " + number + " years, you will meet " + celebrity + " in " + location + ".";

  document.getElementById("futureText").innerHTML = message;

  var image = new Image();
  image.src = "cat.jpeg";
  image.width = "100";
  image.height = "80";

  document.getElementById("futureImage").appendChild(image);

  // console.log(message);
}






















function dogs(){

  var name = prompt("What is your name?");

  if(name == "Marvin"){
    document.getElementById("dogsText").innerHTML = "Welcome back Marvin, you have a REALLY fun dog";
  } else{
    document.getElementById("dogsText").innerHTML = name + ", you have a fun dog";
  }
}


function mileCalculator(){
  var totalMiles = prompt("How many miles did you run");
  var timePerMile = prompt("How many minutes did each mile take?");
  totalMiles = parseFloat(totalMiles);
  timePerMile = parseFloat(timePerMile);
  var result = totalMiles * timePerMile;

  console.log("You spent " + result + " minutes running.");

  document.getElementById("resultText").innerHTML = "You spent " + result + " minutes running.";
}

function main(){
  mileCalculator();
  var userAnswer = prompt("Do you want to play again? Y/N")
  if(userAnswer == "Y"){
    main();
  }else{
    console.log("Thank you for using my calculator");
  }
}