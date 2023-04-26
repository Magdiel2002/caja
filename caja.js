// JavaScript Document
window.onload = function(){
	
var pos = 0, pos2 = 0, pos3 = 0;

var box = document.getElementById("box");
var a = setInterval(move, 1);

var box2 = document.getElementById("box2");
var b = setInterval(move2, 1);

var centro = document.getElementById("centro");
var c = setInterval(fijo,1);

/*
function fijo(){ //caja gris
	if(pos3 >= 50)
	   right = false;
	else if(pos3 <= 0)
	   right = true;
	if(!right){
		pos3--;
		centro.style.right = pos3+"px";
	} 
	else{
		pos3++;
		centro.style.right = pos3+"px";
	}
}
*/

function move(){
	if(pos >= 150)
		right = false;
	else if(pos <= 0)
		right = true;
	if(!right){
		pos--;
		box.style.left = pos+"px";
	}
	else{
		pos++;
		box.style.left = pos + "px";
	}
 }



 function move2(){
	if(pos2 >= 150)
		right = false;
	else if(pos2 <= 0)
		right = true;
	if(!right){
		pos2--;
		box2.style.right = pos2+"px";
	}
	else{
		pos2++;
		box2.style.right = pos2 + "px";
	}
 } 

};