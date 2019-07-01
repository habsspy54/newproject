var numcolors=6;
var colors=generaterandom(numcolors);
var square=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var mode=document.querySelectorAll(".mode");


for(var i=0;i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");	
		this.classList.add("selected");
		this.textContent === "Easy" ? numcolors = 3: numcolors = 6;
		resett();
	});
}
function resett(){
	colors=generaterandom(numcolors);
	pickedcolor=pickcolor();
	colorDisplay.textContent=pickedcolor;
	message.textContent="";
	reset.textContent="New colors";
	for(var i=0;i<square.length;i++)
	{
		if(colors[i]){
			square[i].style.display="block";
			square[i].style.backgroundColor=colors[i];
		}
		else{
			square[i].style.display="none";
		}
	}	
	h1.style.backgroundColor="steelblue";
}

colorDisplay.textContent=pickedcolor;
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor){
			changecolor(clickedcolor);
			message.textContent="Right";	
			h1.style.backgroundColor=clickedcolor;
			reset.textContent="Play Again?"; 
		}else{
			this.style.backgroundColor="#232323";
			message.textContent="Try again";
		}
	});
}
function changecolor(color)
{
	for(var i=0;i<square.length;i++){
		square[i].style.background=color;
	}

 }
function pickcolor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandom(num)
{
 var arr=[];
 for(var i=0;i<num;i++)
 {
 	arr.push(randomcolor())
 }
 return arr;
}
function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
reset.addEventListener("click",function(){
	resett();
});





















