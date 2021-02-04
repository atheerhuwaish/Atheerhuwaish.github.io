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
		case "none" :  return factor = 1;
			
		case	"rare" : return factor =1.2;
			
		case	"middle" : return factor = 1.4;

		case	"rel_high" :  return factor = 1.6;
			
		case	"high" :  return factor = 1.8;
			
		case	"very_high" : return factor = 2.2;
			
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
		if (bodyweightelem.value < 12  ||  bodyweightelem.value > 600 
									  || bodyweightelem.value.length < 1 )
			{food1.innerHTML ="Please enter a valid body weight number";
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
			
			
			
			
			foodproteincontent.innerHTML = "<br>Protein content is <span class='proteincontent'></span>%<br>"
			var proteincontentelem = document.querySelector(".proteincontent");
			var proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="Food item is not found, you can correct, enter or choose a food item or press CE and try again";
								}
								else {food1.style.color ="black";}	
				

			food1.innerHTML = "<span id='result'></span><span id='foodamount'></span>";
			var bodyweight = bodyweightelem.value;
			
			var result = document.querySelector("#result");
			result.innerHTML = "Result:";
			
			var foodamountelem = document.querySelector("#foodamount");
			
			foodamountelem.innerHTML = ` ${foodamount}g include `;

			
			
			var dailyrequirementingram = Math.round(factor * bodyweight);
			
			proteinsubtotal= Math.floor(foodamount * proteincontent / dailyrequirementingram);
				
				
			food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
			
			food1.innerHTML += " of the daily protein requirement (<span id='dailyrequirementingram'>" + dailyrequirementingram + "g</span>)";
					
			
			lightgrayinputborder();

}




	
function proteincontentfunc(){	
	
		switch (foodinput.value.toLowerCase()) {

		case "almonds" : 
		return proteincontent = 21.15;

		case "black beans" : 
		return proteincontent = 21.6;
		
		case "brie cheese" : 
		return proteincontent = 20.75;	

		case "broad beans (fava beans)" : 
		return proteincontent = 26.12;	

		case "cashew" : 
		return proteincontent = 18.22;	

		case "chia seeds" : 
		return proteincontent = 16.54;
		
		case "chickpeas" : 
		return proteincontent = 20.47;
		
		case "cheddar cheese" : 
		return proteincontent = 24.25;	
			
		case "corn grain" : 
		return proteincontent = 9.42;
		
		case "eggs" : 
		return proteincontent = 12.56;

		case "english walnuts" : 
		return proteincontent = 15.23;

		case "firm tofu" : 
		return proteincontent = 10.92;
		
		case "flaxseeds" : 
		return proteincontent = 18.29;

		case "green peas" : 
		return proteincontent = 5.42;
		
		case "hazelnuts" : 
		return proteincontent = 14.95;
		
		case "kidney beans" : 
		return proteincontent = 23.58;
		
		case "lentils - all types" : 
		return proteincontent = 24.63;

		case "mozzerella cheese" : 
		return proteincontent = 22.17;	

		case "oat flour" : 
		return proteincontent = 14.66;

		case "peanuts" : 
		return proteincontent = 25.8;	

		case "pistachio" : 
		return proteincontent = 20.16;	
		
		case "rice" : 
		return proteincontent = 7.23;
		
		case "soybeans" : 
		return proteincontent = 36.49;
		
		case "soymilk" : 
		return proteincontent = 2.47;

		case "soy sauce" : 
		return proteincontent = 10.51;

		case "soft tofu" : 
		return proteincontent = 6.38;
		
		case "wheat, soft white" : 
		return proteincontent = 10.69;

		case "wheat, hard white" : 
		return proteincontent = 11.31;

		case "white beans" : 
		return proteincontent = 21.11;
		
		case "whole milk" : 
		return proteincontent = 3.15;
		
		case "whole milk yogurt" : 
		return proteincontent = 3.47;
		
		case "bread, wheat" : 
		return proteincontent = 10.67;

		case "corn flakes" : 
		return proteincontent = 7.5;

		case "sesame" : 
		return proteincontent = 20.45;
		
		case "bulgur" : 
		return proteincontent = 12.29;
		
		case "peanus butter" : 
		return proteincontent = 22.5;
		
		case "couscous" : 
		return proteincontent = 12.76;
		
		case "pumpkin seeds" : 
		return proteincontent = 29.49;
				
		case "quinoa" : 
		return proteincontent = 14.12;
		
		
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
