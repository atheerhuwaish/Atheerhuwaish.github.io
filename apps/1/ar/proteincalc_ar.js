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
			{food1.innerHTML =" الرجاء إدخال وزن الجسم بالأرقام بين 12 و 150 وليس ۱۲-١٥٠";
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
	
	



foodamountelem.addEventListener("input", verifyfoodamount);

function verifyfoodamount(){
		if (foodamountelem.value < 10  
			||  foodamountelem.value > 9999 
			|| foodamountelem.value.length < 2
			|| foodamountelem.value.length > 4	)
			{food1.innerHTML =" الرجاء إدخال وزن المادة الغذائية بالأرقام بين 10 و 9999 وليس ١٠-٩٩٩٩ ";
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




function proteincalculate (){
	
			factor= factorvalueactivitiesfunc();
			resultelem.style.display="none";
			foodamountelem.style.display="none";
			
			foodproteincontent.innerHTML = "<br>محتوى البروتين هو <span class='proteincontent'></span>%<br>"
			let proteincontentelem = document.querySelector(".proteincontent");
			let proteincontent = proteincontentfunc();
			proteincontentelem.innerHTML = proteincontent;
					
				
			if (!proteincontent) {redinputborder();	
								food1.style.color ="red";
								foodproteincontent.innerHTML = "";	
								return food1.innerHTML ="لم يتم العثور على المادة الغذائية. الرجاء التصحيح أو الضغط على مسح وإعادة المحاولة";
								}
								else {food1.style.color ="black";}	
				

			let bodyweight = bodyweightelem.value;
			
			resultelem.style.display="inline";
			foodamountelem.style.display="inline";
			
			
		
			foodamountelem.style.display="inline";
			
			food1.innerHTML = "<span>غرام* تحتوي على </span>";
 
		
			
			let dailyrequirementingram = Math.round(factor * bodyweight);
			
			
			proteinsubtotal= Math.floor(foodamountelem.value * proteincontent / dailyrequirementingram);
			
					
				
			
			food1.insertAdjacentHTML("beforeend", `<span id='proteinsubtotal'>${proteinsubtotal}</span>`);
			
			food1.insertAdjacentHTML("beforeend", `<span> من الحاجة اليومية للبروتين </span><span id='dailyrequirementingram'>(${dailyrequirementingram}غرام)</span>`);
			
						

			aftercookingelem.innerHTML = "<hr>* <span id='aftercooking'>إدخال وزن المادة الغذائية قبل النقع والطبخ إذا كانت تمتص السوائل حيث ينخفض محتوى البروتين فيها كثيرا بعد الطبخ مثل البقوليات والعدس</span>";
			
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
