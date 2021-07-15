var a = prompt(" ender frist variable :")
var b = prompt(" ender second variable :")



function setup() {

 var b2= createButton("click here to swap:")
 b2.mousePressed(swap)
}

function draw() {
  background(220);
}
function swap(){
  [a,b]=[b,a]
  console.log("value of a after swaping: "+a)
  console.log("value of b after swaping: "+b)
}