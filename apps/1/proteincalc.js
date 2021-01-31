var datalist = document.getElementById("fooditems1");
var mbutton = document.getElementById("foodbutton");
var food1 = document.getElementById("food1");
var datalist = document.getElementById("fooditems1");
var mreset = document.getElementById("reset");
var foodinput = document.getElementById("foodinput");

var factorvalueactivitieselem = document.querySelector("#factorvalueactivities");

var foodproteincontent =document.querySelector("#foodproteincontent");

// var factorvaluefemale = document.querySelectorAll(".factorvaluefemale");


function factorvalueactivities()
{return factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value;}



var factor = 1.3;


function factorvalueactivitiesfunc() {
switch (factorvalueactivities()) {
case "none" :  return factor = 1.1;
	
case	"rare" : return factor =1.2;
	
case	"middle" : return factor = 1.3;

case	"rel_high" :  return factor = 1.5;
	
case	"high" :  return factor = 1.8;
	
case	"very_high" : return factor = 2.4;
	
default : return factor = false;
}
}


function lightgrayinputborder(){foodinput.style.borderColor="lightgray";
						   bodyweightelem.style.borderColor="lightgray";}

window.addEventListener("load", lightgrayinputborder);

function redinputborder(){foodinput.style.borderColor="red";}


foodinput.addEventListener("input", verifyweight);



	
var bodyweightelem = document.querySelector("#bodyweight");
	
bodyweightelem.addEventListener("input", verifyweight);
	
function verifyweight(){
	if (bodyweightelem.value < 1  ||  bodyweightelem.value > 600 
								  || bodyweightelem.value.length < 1 )
		{food1.innerHTML ="Please enter a valid body weight number";
		food1.style.color ="red";
		bodyweightelem.style.borderColor="red";
		}
		
		else 
		{
		bodyweightelem.style.borderColor="lightgray";
		factorvalueactivitiesfunc();
		proteincalculate();
		}
}
	
	


function proteincalculate (){
	
	factor= factorvalueactivitiesfunc();
	
	
	foodproteincontent.innerHTML = "<br>Protein content is <input type='text' class='proteincontent'>%<br>"
	var proteincontentelem = document.querySelector(".proteincontent");
	var proteincontent = proteincontentfunc();
	proteincontentelem.setAttribute("value", proteincontent);
			
		
	if (!proteincontent) {redinputborder();	
						food1.style.color ="red";
						foodproteincontent.innerHTML = "";	
						return food1.innerHTML ="Food item is not found, you can correct, enter or choose a food item or press CE and try again";
						}
						else {food1.style.color ="black";}	
		
		
	food1.innerHTML = "<input type='text' class='foodamount' value='100'>g include ";
	var bodyweight = bodyweightelem.value;
	
	
	var foodamountelem= document.querySelector(".foodamount");
	var foodamount = foodamountelem.value;
	foodamountelem.setAttribute("value", foodamount);
	
		
	
	var dailyrequirementingram = parseInt(factor * bodyweight);	
	
	
	
	proteinsubtotal= parseInt(foodamount * proteincontent / dailyrequirementingram  );
		
	food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
	
	food1.innerHTML += " of the daily protein requirement (" + dailyrequirementingram + "g)";
			
	
	lightgrayinputborder();

}



	
function proteincontentfunc(){	
	
	switch (foodinput.value.toLowerCase()) {

	case "almonds" : 
	return proteincontent = 19.35;

	case "baked beans" : 
	return proteincontent = 5.2;
	
	case "bread" : 
	return proteincontent = 7.9;
	
	case "chia seeds" : 
	return proteincontent = 18.29;
	
	case "chickpeas" : 
	return proteincontent = 8.75;
	
	case "cheddar cheese" : 
	return proteincontent = 25.4;	
	
	case "cottage cheese" : 
	return proteincontent = 12.6;	
	
	case "cornflakes" : 
	return proteincontent = 7.5;
	
	case "eggs" : 
	return proteincontent = 12.5;
	
	case "flaxseeds" : 
	return proteincontent = 18.29;
	
	case "hazelnuts" : 
	return proteincontent = 14.1;
	
	case "kidney beans" : 
	return proteincontent = 6.9;
	
	case "oatmeal" : 
	return proteincontent = 11.2;
	
	case "red lentils" : 
	return proteincontent = 7.6;
	
	case "rice" : 
	return proteincontent = 6.67;
	
	case "seitan" : 
	return proteincontent = 19.05;
	
	case "soy nuts" : 
	return proteincontent = 38.55;
	
	case "soy milk" : 
	return proteincontent = 2.6;

	case "soy sauce" : 
	return proteincontent = 8.14;
	
	case "tofu" : 
	return proteincontent = 9.41;
	
	case "walnuts" : 
	return proteincontent = 14.7;
	
	case "wheat flour" : 
	return proteincontent = 12.6;
	
	case "whole milk" : 
	return proteincontent = 3.3;
	
	case "whole milk yogurt" : 
	return proteincontent = 5.7;
	
	default: proteincontent = false;
	}
	}
	



mreset.addEventListener ("click", function () {
food1.innerHTML = "";
foodinput.value = "";
foodproteincontent.innerHTML ="";
lightgrayinputborder()
})



// factorvalueactivitieselem.addEventListener("input", proteincontentfunc);


function fooddetailsclick (){
	if ( foodinput.value.length > 0 ) {
	lightgrayinputborder();
	factorvalueactivitiesfunc();
	verifyweight();
    }
	else if  (foodinput.value.length <= 0) {redinputborder()}
}
	
function fooddetailskey (event) {
	if ( foodinput.value.length > 0 && event.which === 13 ) {
	lightgrayinputborder();
	factorvalueactivitiesfunc();
	verifyweight();
    }
	else if (foodinput.value.length <= 0) {redinputborder()}
}


foodinput.addEventListener ("keyup", fooddetailskey);
mbutton.addEventListener ("click", fooddetailsclick);
