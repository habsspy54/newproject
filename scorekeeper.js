var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2"); 
var p1score=0;
var p2score=0;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset=document.querySelector("#reset");
var winningscore=5;
var isgameover=false;
var numinput=document.querySelector("input");
var pa=document.querySelector("#abc");


p1button.addEventListener("click",function(){
	if(!isgameover){
		p1score++;
		if(p1score==winningscore)
		{
			isgameover=true;
			p1display.classList.add("winner");
		}
		p1display.textContent=p1score;

	}
});
p2button.addEventListener("click",function(){
	if(!isgameover){
		p2score++;
		if(p2score==winningscore)
		{
			isgameover=true;
			p2display.classList.add("winner");
		}
		p2display.textContent=p2score;

	}
	
});
reset.addEventListener("click",function(){
	resett();
});
function resett(){
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	isgameover=false;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");	
}
numinput.addEventListener("change", function(){
	pa.textContent = this.value;
	winningscore= Number(this.value);
	resett();
});