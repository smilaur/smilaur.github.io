var kginput = document.getElementById("kginput");
var lbinout = document.getElementById("lbinput");
var lbbutton = document.getElementById("lbbutton");
var kgbutton = document.getElementById("kgbutton");

lbbutton.addEventListener("click", function() {
  convertToLb();
});

kgbutton.addEventListener("click", function() {
  convertToKg();
});

function convertToKg() {
  var result = Math.floor(lbinput.value / 2.2);
  kginput.value = result;

  if (result <= 20) {
    document.body.style.backgroundImage= "url('http://pngimg.com/upload/rat_mouse_PNG2467.png')";
} 
  
  else if (result > 20 && result <= 97000000) {
document.body.style.backgroundImage = "url(http://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440/MA_00077427_yjtgnj.jpg)";
  } 
  
  else {
document.body.style.backgroundImage = "url(http://www.jeffhead.com/worldwideaircraftcarriers/nimitz68-01.jpg)";
  }
}

function convertToLb() {
  if (kginput.value <= 20) {
    document.body.style.backgroundImage = "url(http://pngimg.com/upload/rat_mouse_PNG2467.png)";
} 
  
  else if (kginput.value <= 97000000 && kginput.value > 20) {
document.body.style.backgroundImage = "url(http://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440/MA_00077427_yjtgnj.jpg)";
  } 
  
  else {
document.body.style.backgroundImage = "url(http://www.jeffhead.com/worldwideaircraftcarriers/nimitz68-01.jpg)";
  }
  
  var result = Math.floor(kginput.value * 2.2);
  lbinput.value = result;
}