var datalist = document.getElementById("fooditems1");
var food1 = document.getElementById("food1");
var datalist = document.getElementById("fooditems1");
var mreset = document.getElementById("reset");
var foodinput = document.getElementById("foodinput");
var foodproteincontent =document.querySelector("#foodproteincontent");
var factorvalueactivitieselem = document.querySelector("#factorvalueactivities");

factorvalueactivities= factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value;
var factor = factorvalueactivities;
var foodamount = 100;



factorvalueactivitieselem.addEventListener("change", factorvalueactivitiesfunc);
factorvalueactivitieselem.addEventListener("change", proteincalculate);
factorvalueactivitieselem.addEventListener("change", verifyweight);




function factorvalueactivitiesfunc() {
		switch (factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value) {
		case "none" :  return factor = 1.1;
			
		case	"rare" : return factor =1.2;
			
		case	"middle" : return factor = 1.3;

		case	"rel_high" :  return factor = 1.5;
			
		case	"high" :  return factor = 1.7;
			
		case	"very_high" : return factor = 2.3;
			
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
			
				proteincalculate();
				}
}
	
	


function proteincalculate (){
	
			factor= factorvalueactivitiesfunc();
			
			
			foodproteincontent.innerHTML = "<br>Eiweißgehalt ist <span class='proteincontent'></span>%<br>"
			var proteincontentelem = document.querySelector(".proteincontent");
			var proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="Nahrungsmittel nicht gefunden, bitte korrigieren, eingeben oder CE wählen und nochmals versuchen";
								}
								else {food1.style.color ="black";}	
				

			food1.innerHTML = "<span id='result'></span><span id='foodamount'></span>";
			var bodyweight = bodyweightelem.value;
			
			var result = document.querySelector("#result");
			result.innerHTML = "Ergebnis:";
			
			var foodamountelem = document.querySelector("#foodamount");
			
			foodamountelem.innerHTML = ` ${foodamount}g beinhalten `;
 
		
			
			var dailyrequirementingram = Math.round(factor * bodyweight);
			
			
			proteinsubtotal= Math.floor(foodamount * proteincontent / dailyrequirementingram);
			
			
				
			food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
			
			food1.innerHTML += " des täglichen Eiweißbedarfs (<span id='dailyrequirementingram'>" + dailyrequirementingram + "g</span>)";
					
			
			lightgrayinputborder();

}


	
function proteincontentfunc(){	
	
		switch (foodinput.value.toLowerCase()) {

		case "mandeln" : 
		return proteincontent = 21.15;

		case "schwarze bohnen" : 
		return proteincontent = 21.6;

		case "briekäse" : 
		return proteincontent = 20.75;	

		case "dicke bohnen (favabohnen)" : 
		return proteincontent = 26.12;	

		case "cashew/kaschunuss" : 
		return proteincontent = 18.22;	

		case "chiasamen" : 
		return proteincontent = 16.54;
		
		case "kichererbsen" : 
		return proteincontent = 20.47;
		
		case "cheddarkäse" : 
		return proteincontent = 24.25;	
			
		case "maiskorn" : 
		return proteincontent = 9.42;
		
		case "eier" : 
		return proteincontent = 12.56;

		case "walnuss" : 
		return proteincontent = 15.23;

		case "fester tofu" : 
		return proteincontent = 10.92;
		
		case "leinsamen" : 
		return proteincontent = 18.29;

		case "grüne erbsen" : 
		return proteincontent = 5.42;
		
		case "haselnuss" : 
		return proteincontent = 14.95;
		
		case "kidneybohnen" : 
		return proteincontent = 23.58;
		
		case "linsen" : 
		return proteincontent = 24.63;

		case "mozzerella" : 
		return proteincontent = 22.17;	

		case "hafermehl" : 
		return proteincontent = 14.66;

		case "erdnüsse" : 
		return proteincontent = 25.8;	

		case "pistazien" : 
		return proteincontent = 20.16;	
		
		case "reis" : 
		return proteincontent = 7.23;
		
		case "sojabohnen" : 
		return proteincontent = 36.49;
		
		case "sojamilch" : 
		return proteincontent = 2.47;

		case "sojasauce" : 
		return proteincontent = 10.51;

		case "wiecher tofu" : 
		return proteincontent = 6.38;
		
		case "weizen, weich, weiß" : 
		return proteincontent = 10.69;

		case "weizen, hart, weiß" : 
		return proteincontent = 11.31;

		case "weiße bohnen" : 
		return proteincontent = 21.11;
		
		case "vollmilch" : 
		return proteincontent = 3.15;
		
		case "vollmilch joghurt" : 
		return proteincontent = 3.47;
		
		case "brot, weizen" : 
		return proteincontent = 10.67;
		
		case "cornflakes" : 
		return proteincontent = 7.5;

		case "sesam" : 
		return proteincontent = 20.45;
		
		case "bulgur" : 
		return proteincontent = 12.29;
				
		case "couscous/kuskus" : 
		return proteincontent = 12.76;
		
		default: proteincontent = false;
		}
	}



mreset.addEventListener ("click", function () {
		food1.innerHTML = "";
		foodinput.value = "";
		foodproteincontent.innerHTML ="";
		lightgrayinputborder()
})




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
