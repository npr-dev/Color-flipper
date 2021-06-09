const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];

const mybtn = document.getElementById("btn");
const colorid = document.querySelector(".color");


// event listener
// we put the # as a variable and we make # + hex that randomly chooses indexes from hex.
mybtn.addEventListener("click", function(){
  let hexColor = "#";
  for(let i=0; i<6; i++){
    hexColor += hex[getRandonmNumber()];
  }
  colorid.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandonmNumber(){
  return Math.floor(Math.random()* hex.length);
}