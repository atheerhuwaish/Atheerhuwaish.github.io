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
		{food1.innerHTML ="bitte ein gültiges Körpergewicht eingeben";
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
	
	if (foodinput.value != "" )
	{	
	foodproteincontent.innerHTML = "<br>Eiweißgehalt (" + foodinput.value + "): <input type='text' class='proteincontent'>%<br>"
	
	var proteincontentelem = document.querySelector(".proteincontent");
	var proteincontent = proteincontentfunc();
	proteincontentelem.setAttribute("value", proteincontent);
	}
	
	if (!proteincontent) {redinputborder();
						food1.style.color ="red";
						return food1.innerHTML ="Nährstoff nicht gefundem, bitte korrigieren, eingeben/wählen oder CE drücken und nochmals versuchen";
						}
						else {food1.style.color ="black";}	
		
		
		
	food1.innerHTML = "<input type='text' class='foodamount' value='100'>g beinhalten ";
	var bodyweight = bodyweightelem.value;
	
	
	var foodamountelem= document.querySelector(".foodamount");
	var foodamount = foodamountelem.value;
	foodamountelem.setAttribute("value", foodamount);
	
	
	
	var dailyrequirementingram = parseInt(factor * bodyweight);	
	
	
	
	proteinsubtotal= parseInt(foodamount * proteincontent / dailyrequirementingram  );
		
	food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
	
	food1.innerHTML += " des täglichen Eiweißbedarfs (" + dailyrequirementingram + "g)";
			
	
	lightgrayinputborder();

}
	
	
		
function proteincontentfunc(){
	
	
	switch (foodinput.value.toLowerCase()) {

	case "gebackene bohnen" : 
	return proteincontent = 5.2;
	
	case "mandeln" : 
	return proteincontent = 19.35;
	
	case "brot" : 
	return proteincontent = 7.9;
	
	case "chiasamen" : 
	return proteincontent = 18.29;
	
	case "cheddarkäse" : 
	return proteincontent = 8.75;
	
	case "hüttenkäse" : 
	return proteincontent = 25.4;	
	
	case "cornflakes" : 
	return proteincontent = 12.6;	
	
	case "kichererbsen" : 
	return proteincontent = 7.5;
	
	case "eier" : 
	return proteincontent = 12.5;
	
	case "leinsamen" : 
	return proteincontent = 18.29;
	
	case "haselnüsse" : 
	return proteincontent = 14.1;
	
	case "kidneybohnen" : 
	return proteincontent = 6.9;
	
	case "hafer" : 
	return proteincontent = 11.2;
	
	case "rote linsen" : 
	return proteincontent = 7.6;
	
	case "reis" : 
	return proteincontent = 6.67;
	
	case "seitan" : 
	return proteincontent = 19.05;
	
	case "sojabohnen" : 
	return proteincontent = 38.55;
	
	case "sojamilch" : 
	return proteincontent = 2.6;

	case "sojasauce" : 
	return proteincontent = 8.14;
	
	case "tofu" : 
	return proteincontent = 9.41;
	
	case "walnüsse" : 
	return proteincontent = 14.7;
	
	case "weizenmehl" : 
	return proteincontent = 12.6;
	
	case "vollmilch" : 
	return proteincontent = 3.3;
	
	case "vollmilch joghurt" : 
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
