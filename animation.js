
// header color change

let colorChangeTo = () =>{
  document.getElementById("mouse-move").style.backgroundColor = "grey";
};

let colorChangeBack = () =>{
  document.getElementById("mouse-move").style.backgroundColor = "black";
};

let headerBox_1 = document.getElementById("mouse-move");
console.log(headerBox_1);
headerBox_1.onmouseover = colorChangeTo;
headerBox_1.onmouseout = colorChangeBack;

let headerBox_2 = document.getElementById("mouse-move-profile");
console.log(headerBox_2);
headerBox_2.onmouseover = () =>{
  document.getElementById("mouse-move-profile").style.backgroundColor = "grey";
};
headerBox_2.onmouseout = () =>{
  document.getElementById("mouse-move-profile").style.backgroundColor = "black";
};

let headerBox_3 = document.getElementById("mouse-move-gallery");
console.log(headerBox_3);
headerBox_3.onmouseover = () =>{
  document.getElementById("mouse-move-gallery").style.backgroundColor = "grey";
};
headerBox_3.onmouseout = () =>{
  document.getElementById("mouse-move-gallery").style.backgroundColor = "black";
};

let headerBox_4 = document.getElementById("mouse-move-story");
console.log(headerBox_4);
headerBox_4.onmouseover = () =>{
  document.getElementById("mouse-move-story").style.backgroundColor = "grey";
};
headerBox_4.onmouseout = () =>{
  document.getElementById("mouse-move-story").style.backgroundColor = "black";
};
// end of header color change


//Profile introduction
let TinaProfile = document.getElementById("Tina-profile");

function ChangeTinaProfile(){
  if(document.getElementById("Tina-profile").style.fontSize=='20px'){
    document.getElementById("Tina-profile").innerHTML="Tina";
    document.getElementById("Tina-profile").style.fontSize='1.1em';
    document.getElementById("Tina-profile").style.lineHeight='160px';
  }else{
    document.getElementById("Tina-profile").style.fontSize='20px';
    document.getElementById("Tina-profile").style.lineHeight='40px';
    document.getElementById("Tina-profile").innerHTML="A NYUSH Senior<br/>From Sichuan, China<br/>Major in Data Science<br/>Minoring in IMA and Mathmatics";
  }
}

let YasminProfile = document.getElementById("Yasmin-profile");

function ChangeYasminProfile(){
  if(document.getElementById("Yasmin-profile").style.fontSize=='20px'){
    document.getElementById("Yasmin-profile").innerHTML="Yasmin";
    document.getElementById("Yasmin-profile").style.fontSize='1.1em';
    document.getElementById("Yasmin-profile").style.lineHeight='160px';
  }else{
    document.getElementById("Yasmin-profile").style.fontSize='20px';
    document.getElementById("Yasmin-profile").style.lineHeight='40px';
    document.getElementById("Yasmin-profile").innerHTML="A NYUAD Junior<br/>From Dubai, UAE<br/>Major in Interactive Media<br/>Minoring in Visual Arts";
  }
}

let MayaProfile = document.getElementById("Maya-profile");

function ChangeMayaProfile(){
  if(document.getElementById("Maya-profile").style.fontSize=='20px'){
    document.getElementById("Maya-profile").innerHTML="Maya";
    document.getElementById("Maya-profile").style.fontSize='1.1em';
    document.getElementById("Maya-profile").style.lineHeight='160px';
  }else{
    document.getElementById("Maya-profile").style.fontSize='20px';
    document.getElementById("Maya-profile").style.lineHeight='40px';
    document.getElementById("Maya-profile").innerHTML="A NYUAD Junior<br/>From South Korea<br/>Major in Computer Science<br/>Minoring in IM and Arabic";
  }
}
