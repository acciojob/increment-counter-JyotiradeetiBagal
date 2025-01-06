//your JS code here. If required.
let btn=document.getElementById("incrementBtn");
let count=document.getElementById("counter");
let i=0;
btn.addEventListener("click",()=>{
	alert(i);
	count.innerHTML = ++i;

});
