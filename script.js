const lamp =document.getElementById("lamp");
const onBtn = document.getElementById("on");
const offBtn = document.getElementById("off");

onBtn.addEventListener("click", function () {
	lamp.src = "./images/pic_bulbon.gif";
});

offBtn.addEventListener("click", function () {
	lamp.src = "./images/pic_bulboff.gif";
	
});

