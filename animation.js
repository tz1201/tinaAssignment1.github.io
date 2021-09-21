let myVariable;

myVariable = "Hello!";

console.log(myVariable);

if(2+2>3){
  console.log("haha!");
}else{
  console.log("it shouldn't happen");
}

let orangeParagraph = document.getElementById("orange-paragraph");
orangeParagraph.addEventListener('click',() => {
  if (orangeParagraph.style.color=="orange"){
    orangeParagraph.style.color="black";
  }else{
    orangeParagraph.style.color="orange";
  }
})

let greetingElement = document.getElementById("greetingElement");

let makeGhostText = () =>{
  document.getElementById("amghost").innerText = "I am a ghost";
}

let makeGhostTextDisappear = () =>{
  setTimeout(()=> {
    document.getElementById("amghost").innerText = "";
  },5000)
}

greetingElement.addEventListener('mouseenter',makeGhostText)

greetingElement.addEventListener('mouseleave',makeGhostTextDisappear)
