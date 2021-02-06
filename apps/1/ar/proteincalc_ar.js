var datalist = document.getElementById("fooditems1");
var food1 = document.getElementById("food1");
var datalist = document.getElementById("fooditems1");
var mreset = document.getElementById("reset");
var foodinput = document.getElementById("foodinput");
var foodproteincontent =document.querySelector("#foodproteincontent");
var factorvalueactivitieselem = document.querySelector("#factorvalueactivities");
var resultelem = document.querySelector("#result");

var	aftercookingelem = document.querySelector("#aftercooking")

factorvalueactivities= factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value;
var factor = factorvalueactivities;
var foodamountelem = document.querySelector("#foodamount");

var foodamount= foodamountelem.value;


factorvalueactivitieselem.addEventListener("change", proteincalculate);
factorvalueactivitieselem.addEventListener("change", verifyweight);
// factorvalueactivitieselem.addEventListener("change", factorvalueactivitiesfunc);


foodamountelem.addEventListener("input", verifyfoodamount);

function verifyfoodamount(){
		if (foodamountelem.value < 10  ||  foodamountelem.value > 9999 
									  || foodamountelem.value.length < 2
									  || foodamountelem.value.length > 4	)
			{food1.innerHTML =" الرجاء إدخال وزن المادة الغذائية بين 10 و 9999";
			food1.style.color ="red";
			foodamountelem.style.borderColor="red";
			
			}
			
				else 
				{
				foodamountelem.style.borderColor="lightgray";
			
				proteincalculate();
				}
}






function factorvalueactivitiesfunc() {
		switch (factorvalueactivitieselem.options[factorvalueactivitieselem.selectedIndex].value) {
		case "none" :  return factor = 1;
			
		case	"rare" : return factor =1.2;
			
		case	"middle" : return factor = 1.4;

		case	"rel_high" :  return factor = 1.6;
			
		case	"high" :  return factor = 1.9;
			
		case	"very_high" : return factor = 2.2;
			
		default : return factor = false;
}
}


function lightgrayinputborder(){foodinput.style.borderColor="lightgray";
						   bodyweightelem.style.borderColor="lightgray"
						   foodamountelem.style.borderColor="lightgray";}




// window.addEventListener("load", lightgrayinputborder);




function redinputborder(){foodinput.style.borderColor="red";}


foodinput.addEventListener("input", verifyweight);



	
var bodyweightelem = document.querySelector("#bodyweight");
	
bodyweightelem.addEventListener("input", verifyweight);
	
function verifyweight(){
		if (bodyweightelem.value < 12  ||  bodyweightelem.value > 150 
									  || bodyweightelem.value.length < 1 
									  || bodyweightelem.value.length > 3)
			{food1.innerHTML ="الرجاء إدخال وزن الجسم بين 12 و 150";
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
			
				proteincalculate();
				}
}
	
	


function proteincalculate (){
	
			factor= factorvalueactivitiesfunc();
			resultelem.style.display="none";
			foodamountelem.style.display="none";
			
			foodproteincontent.innerHTML = "<br>محتوى البروتين هو <span class='proteincontent'></span>%<br>"
			var proteincontentelem = document.querySelector(".proteincontent");
			var proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="لم يتم العثور على المادة الغذائية. الرجاء التصحيح أو الضغط على مسح وإعادة المحاولة";
								}
								else {food1.style.color ="black";}	
				

			var bodyweight = bodyweightelem.value;
			
			resultelem.style.display="inline";
			foodamountelem.style.display="inline";
			
			
		//	var foodamountelem = document.querySelector("#foodamount");
			foodamountelem.style.display="inline";
			
			food1.innerHTML = "غرام* يحتوي على ";
 
		
			
			var dailyrequirementingram = Math.round(factor * bodyweight);
			
			
			proteinsubtotal= Math.floor(foodamountelem.value * proteincontent / dailyrequirementingram);
			
			
				
			food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
			
			food1.innerHTML += " من الحاجة اليومية للبروتين (<span id='dailyrequirementingram'>" + dailyrequirementingram + "g</span>)"
			
//			var aftercookingelem = document.querySelector("#aftercooking")
			aftercookingelem.innerHTML = "<hr>* <span id='aftercooking'>إدخال وزن المادة الغذائية قبل الطبخ إذا كانت تمتص الماء عند الطبخ حيث ينخفض محتوى البروتين فيها بنسبة قد تصل إلى 70% مثل البقوليات والعدس</span>";
			
			aftercookingelem.style.display="inline";
			
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
		
		case "حمص (حب قبل الطبخ)" : 
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
		
		case "خبز/ صمون قمح، حنطة" : 
		return proteincontent = 10.67;
		
		case "رقائق الذرة" : 
		return proteincontent = 7.5;

		case "سمسم" : 
		return proteincontent = 20.45;
		
		case "برغل" : 
		return proteincontent = 12.29;
				
		case "كسكس" : 
		return proteincontent = 12.76;
		
		case "بذور اليقطين" : 
		return proteincontent = 29.49;
				
		case "كينوا" : 
		return proteincontent = 14.12;
		
		default: proteincontent = false;
		}
	}




mreset.addEventListener ("click", function () {
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
