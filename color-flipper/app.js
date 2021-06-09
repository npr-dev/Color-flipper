const colors = ["red", "green", "blue", "black"];

const mybtn = document.getElementById("btn");

// EVENT LISTENER
mybtn.addEventListener("click", function(){
  // function is to get a random number based on the length of the array(colors)
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
   
});
function getRandomNumber(){
  return Math.floor(Math.random()* colors.length);
}
