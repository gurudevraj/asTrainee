function enter1(){
	document.pic.src='pro_1.png';
	var x = document.getElementsByClassName("footer")[0];
    x.getElementsByClassName("footer1")[0].style.backgroundColor = "red";
	x.getElementsByClassName("footer1")[0].style.color = "white";
	x.getElementsByTagName("h4")[0].style.color = "white";
 }
 
 function leave(){
	 document.pic.src='pros.png';
	 var x = document.getElementsByClassName("footer")[0];
    x.getElementsByClassName("footer1")[0].style.backgroundColor = "white";
 }
 
 function enter2(){
	document.pic.src='pro_2.png';
	var x = document.getElementsByClassName("footer")[0];
    x.getElementsByClassName("footer1")[0].style.backgroundColor = "red";
 }
 
 function enter3(){
	document.pic.src='pro_3.png';
 }
 
 function enter4(){
	document.pic.src='pro_4.png';
 }
 
 function enter5(){
	document.pic.src='pro_5.png';
 }