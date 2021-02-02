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
			
		case	"rare" : return factor =1.15;
			
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
			{food1.innerHTML ="الرجاء اختيار أو تصحيح وزن الجسم";
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
			
			
			foodproteincontent.innerHTML = "<br>محتوى البروتين هو <span class='proteincontent'></span>%<br>"
			var proteincontentelem = document.querySelector(".proteincontent");
			var proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="لم يتم العثور على المادة الغذائية، الرجاء التصحيح أو اختيار واحدة أو الضغط على مسح وإعادة المحاولة";
								}
								else {food1.style.color ="black";}	
				

			food1.innerHTML = "<span id='result'></span><span id='foodamount'></span>";
			var bodyweight = bodyweightelem.value;
			
			var result = document.querySelector("#result");
			result.innerHTML = "الناتج:";
			
			var foodamountelem = document.querySelector("#foodamount");
			
			foodamountelem.innerHTML = ` ${foodamount}غرام تحتوي على  `;

			
			
			var dailyrequirementingram = parseInt(factor * bodyweight);	
			
			
			
			proteinsubtotal= parseInt(foodamount * proteincontent / dailyrequirementingram  );
				
			food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
			
			  			 
			food1.innerHTML += " من كمية البروتين الضرورية يوميا (<span id='dailyrequirementingram'>" + dailyrequirementingram + "غرام</span>)";
					
			
			lightgrayinputborder();

}




	
function proteincontentfunc(){	
	
		switch (foodinput.value.toLowerCase()) {

		case "لوز" : 
		return proteincontent = 21.15;

		case "فاصوليا سوداء" : 
		return proteincontent = 21.6;

		case "جبن براي" : 
		return proteincontent = 20.75;	

		case "باقلاء عريضة (فول)" : 
		return proteincontent = 26.12;	

		case "كاجو/كاشو" : 
		return proteincontent = 18.22;	

		case "بذور الشيا" : 
		return proteincontent = 16.54;
		
		case "حمص" : 
		return proteincontent = 20.47;
		
		case "جبن شيدر" : 
		return proteincontent = 24.25;	
			
		case "ذرة" : 
		return proteincontent = 9.42;
		
		case "بيض" : 
		return proteincontent = 12.56;

		case "جوز" : 
		return proteincontent = 15.23;

		case "توفو قوي" : 
		return proteincontent = 10.92;
		
		case "بذور الكتان" : 
		return proteincontent = 18.29;

		case "بازلا خضراء" : 
		return proteincontent = 5.42;
		
		case "بندق" : 
		return proteincontent = 14.95;
		
		case "فاصوليا كيدني" : 
		return proteincontent = 23.58;
		
		case "عدس" : 
		return proteincontent = 24.63;

		case "جبنة موزريلا" : 
		return proteincontent = 22.17;	

		case "طحين الشوفان" : 
		return proteincontent = 14.66;

		case "فول سوداني" : 
		return proteincontent = 25.8;	

		case "فستق حلبي" : 
		return proteincontent = 20.16;	
		
		case "رز/ تمن" : 
		return proteincontent = 7.23;
		
		case "فول الصويا" : 
		return proteincontent = 36.49;
		
		case "حليب الصويا" : 
		return proteincontent = 2.47;

		case "صلصة أو صوص الصويا" : 
		return proteincontent = 10.51;

		case "توفو طري" : 
		return proteincontent = 6.38;
		
		case "قمح أبيض ناعم" : 
		return proteincontent = 10.69;

		case "قمح أبيض قوي" : 
		return proteincontent = 11.31;

		case "فاصوليا بيضاء" : 
		return proteincontent = 21.11;
		
		case "حليب كامل الدسم" : 
		return proteincontent = 3.15;
		
		case "لبن حليب كامل الدسم" : 
		return proteincontent = 3.47;
		
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
