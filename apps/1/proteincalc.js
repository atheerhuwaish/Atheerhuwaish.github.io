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
			{food1.innerHTML =" please enter the food amount between 10 and 9999";
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
			{food1.innerHTML ="Please enter a body weight between 12 and 150";
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
			
			foodproteincontent.innerHTML = "<br>Protein content is <span class='proteincontent'></span>%<br>"
			let proteincontentelem = document.querySelector(".proteincontent");
			let proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="The food item was not found. Please correct, enter or select one, or press CE and try again";
								}
								else {food1.style.color ="black";}	
				

			let bodyweight = bodyweightelem.value;
			
			resultelem.style.display="inline";
			foodamountelem.style.display="inline";
			
			
			foodamountelem.style.display="inline";
			
			food1.innerHTML = "<span id='gincludes'>g* include </span>";
 
		
			
			let dailyrequirementingram = Math.round(factor * bodyweight);
			
			
			proteinsubtotal= Math.floor(foodamountelem.value * proteincontent / dailyrequirementingram);
			
			
				
			food1.insertAdjacentHTML("beforeend", `<span id='proteinsubtotal'>${proteinsubtotal}</span>`);
			
			food1.insertAdjacentHTML("beforeend", ` <span id='ofdailyreq'>of the daily protein requirement </span><span( id='dailyrequirementingram'>(${dailyrequirementingram} g)</span>`);
			

			aftercookingelem.innerHTML = "<hr>* <span id='aftercooking'>Enter the weight of food in raw state before soaking or cooking for foods that absorb liquids as they will have much less protein content, e.g. beans and lentils</span>";
			
			aftercookingelem.style.display="inline";
			
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
