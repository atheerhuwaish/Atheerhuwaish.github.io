let datalist = document.getElementById("fooditems1");
let food1 = document.getElementById("food1");
let mreset = document.getElementById("reset");
let foodinput = document.getElementById("foodinput");
let foodproteincontent =document.querySelector("#foodproteincontent");
let factorvalueactivitieselem = document.querySelector("#factorvalueactivities");
let resultelem = document.querySelector("#result");

let	aftercookingelem = document.querySelector("#aftercooking")

factorvalueactivities= factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value;
let factor = factorvalueactivities;
let foodamountelem = document.querySelector("#foodamount");

let foodamount= foodamountelem.value;



factorvalueactivitieselem.addEventListener("change", verifyweight);


foodamountelem.addEventListener("input", verifyfoodamount);

function verifyfoodamount(){
		if (foodamountelem.value < 10  
			||  foodamountelem.value > 9999 
			|| foodamountelem.value.length < 2
			|| foodamountelem.value.length > 4	)
			{food1.innerHTML =" bitte die Menge des Lebensmittels zwischen 10 und 9999 eingeben";
			food1.style.color ="red";
			foodamountelem.style.borderColor="red";
			
			}
			
				else 
				{
				foodamountelem.style.borderColor="lightgray";
			
				proteincalculate();
				
				return true;
				}
}






function factorvalueactivitiesfunc() {
		switch (factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value) {
		case "none" :  return factor = 1;
			
		case	"rare" : return factor =1.2;
			
		case	"middle" : return factor = 1.4;

		case	"rel_high" :  return factor = 1.6;
			
		case	"high" :  return factor = 1.8;
			
		case	"very_high" : return factor = 2;
			
		default : return factor = false;
}
}


function lightgrayinputborder(){foodinput.style.borderColor="lightgray";
							   bodyweightelem.style.borderColor="lightgray"
							   foodamountelem.style.borderColor="lightgray";}







function redinputborder(){foodinput.style.borderColor="red";}


foodinput.addEventListener("input", verifyweight);



	
let bodyweightelem = document.querySelector("#bodyweight");
	
bodyweightelem.addEventListener("input", verifyweight);
	
function verifyweight(){
		if (bodyweightelem.value < 12  
			||  bodyweightelem.value > 150 
			|| bodyweightelem.value.length < 1 
			|| bodyweightelem.value.length > 3)
			{food1.innerHTML ="bitte ein Körpergewicht zwischen 12 und 150 eingeben";
			foodamountelem.style.display="none";
			aftercookingelem.style.display="none";
			resultelem.style.display="none";
			food1.style.color ="red";
			bodyweightelem.style.borderColor="red";
			}
			
				else 
				{
				bodyweightelem.style.borderColor="lightgray";
				
				foodamountelem.style.display="inline";
			
				if (verifyfoodamount() === true){
				
				proteincalculate();
				}
				}
}
	
	


function proteincalculate (){
	
			factor= factorvalueactivitiesfunc();
			resultelem.style.display="none";
			foodamountelem.style.display="none";
			
			foodproteincontent.innerHTML = "<br>Eiweißgehalt ist <span class='proteincontent'></span>%<br>"
			let proteincontentelem = document.querySelector(".proteincontent");
			let proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="Nahrungsmittel nicht gefunden, bitte korrigieren, eingeben oder CE wählen und nochmals versuchen";
								}
								else {food1.style.color ="black";}	
				

			let bodyweight = bodyweightelem.value;
			
			resultelem.style.display="inline";
			foodamountelem.style.display="inline";
			
			

			foodamountelem.style.display="inline";
			
			food1.innerHTML = "<span>g* beinhalten </span>";
 
		
			
			let dailyrequirementingram = Math.round(factor * bodyweight);
			
			
			proteinsubtotal= Math.floor(foodamountelem.value * proteincontent / dailyrequirementingram);
			
			
			food1.insertAdjacentHTML("beforeend", `<span id='proteinsubtotal'>${proteinsubtotal}</span>`);
			
			food1.insertAdjacentHTML("beforeend", `<span> des täglichen Eiweißbedarfs </span><span id='dailyrequirementingram'>(${dailyrequirementingram} g)</span>`);
			
			

			aftercookingelem.innerHTML = "<hr>* <span id='aftercooking'>Gewicht vor dem Einweichen und Kochen für Lebensmittel eingeben, die Flüssigkeit aufsaugen, da sie danach viel weniger Eiweißgehalt haben, z.B. Bohnen und Linsen</span>";
			
			aftercookingelem.style.display="inline";
			
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

		case "ackerbohne (dicke-, favabohne)" : 
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
		
		case "kürbiskerne" : 
		return proteincontent = 29.49;
				
		case "quinoa" : 
		return proteincontent = 14.12;
		
		
		default: proteincontent = false;
		}
	}



mreset.addEventListener ("click", () => {
		resultelem.style.display="none";
		aftercookingelem.style.display="none";
		foodamountelem.value= 100;
		foodamountelem.style.display="none";
		food1.innerHTML = "";
		foodinput.value = "";
		foodproteincontent.innerHTML ="";
		lightgrayinputborder()
})




/*
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
*/
