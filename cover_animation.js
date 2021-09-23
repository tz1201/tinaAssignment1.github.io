// cover animation

let changeSocketTo = () =>{
  document.getElementById("socket1").src="socket_2.png";
  document.getElementById("socket1").style.width="600px";
  document.getElementById("socket2").src="";
}

let changeSocketBack = () =>{
  document.getElementById("socket1").src="socket_1_2.png";
  document.getElementById("socket1").style.width="300px";
  document.getElementById("socket1").style.marginTop="10%";
  document.getElementById("socket1").style.marginLeft="5%";
  document.getElementById("socket2").src="socket_1_1.png";
  document.getElementById("socket2").style.float="right";
  document.getElementById("socket2").style.width="600px";
}

let socket = document.getElementById("looseSocket")
socket.onmouseover = changeSocketTo;
socket.onmouseout = changeSocketBack;

function JumpTo(){
  self.location = "cover.html";
}
