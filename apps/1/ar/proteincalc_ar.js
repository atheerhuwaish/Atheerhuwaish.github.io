var datalist = document.getElementById("fooditems1");
var mbutton = document.getElementById("foodbutton");
var food1 = document.getElementById("food1");
var datalist = document.getElementById("fooditems1");
var mreset = document.getElementById("reset");
var foodinput = document.getElementById("foodinput");


function grayinputborder(){foodinput.style.borderColor="gray";
						   bodyweightelem.style.borderColor="gray";}

window.addEventListener("load", grayinputborder);

function redinputborder(){foodinput.style.borderColor="red";}


	
var bodyweightelem = document.querySelector("#bodyweight");
	
bodyweightelem.addEventListener("input", verifyweight);
	
function verifyweight(){
	if (bodyweightelem.value < 1  ||  bodyweightelem.value > 600 
								  || bodyweightelem.value.length < 1 )
		{food1.innerHTML ="الرجاء اختيار أو تصحيح وزن الجسم";
		food1.style.color ="red";
		bodyweightelem.style.borderColor="red";
		return false}
		
		else 
		{
		bodyweightelem.style.borderColor="gray";
		proteincalculate();
		}
}
	
	


function proteincalculate (){
	
	food1.innerHTML = "<br>محتوى البروتين: <input type='number' class='proteincontent' min='0' max='100'>%<br>"
	
	var proteincontentelem = document.querySelector(".proteincontent");
	var proteincontent = proteincontentfunc();
	proteincontentelem.setAttribute("value", proteincontent);
	
	
	if (!proteincontent) {redinputborder();
						food1.style.color ="red";
						return food1.innerHTML ="لم يتم العثور على المادة الغذائية، الرجاء اختيار واحدة أو الضغط على مسح وإعادة المحاولة";
						}
						else {food1.style.color ="black";}	
		
		
	food1.innerHTML += "<input type='number' class='foodamount' value='100' min='0' max='9999'> غرامات تحتوي على ";
	var bodyweight = bodyweightelem.value;
	
	
	var foodamountelem= document.querySelector(".foodamount");
	var foodamount = foodamountelem.value;
	foodamountelem.setAttribute("value", foodamount);
	
	proteinsubtotal= parseInt(foodamount * proteincontent / (1.1 * bodyweight)  );
											
	food1.innerHTML += "<span id='proteinsubtotal'>" + proteinsubtotal + "</span>";
	
	food1.innerHTML += " من كمية البروتين الضرورية يوميا للشخص .";
	

}

	
function proteincontentfunc(){
	
	
	switch (foodinput.value) {

	case "لوز" : 
	return proteincontent = 19.35;

	case "فاصوليا مطهية" : 
	return proteincontent = 5.2;
	
	case "خبز/صمون" : 
	return proteincontent = 7.9;
	
	case "حبوب الشيا" : 
	return proteincontent = 18.29;
	
	case "حمص" : 
	return proteincontent = 8.75;
	
	case "جبنة تشيدر" : 
	return proteincontent = 25.4;	
	
	case "جبنة القريشة" : 
	return proteincontent = 12.6;	
	
	case "رقائق الذرة" : 
	return proteincontent = 7.5;
	
	case "بيض" : 
	return proteincontent = 12.5;
	
	case "حبوب الكتان" : 
	return proteincontent = 18.29;
	
	case "بندق" : 
	return proteincontent = 14.1;
	
	case "kidney فاصوليا" : 
	return proteincontent = 6.9;
	
	case "شوفان" : 
	return proteincontent = 11.2;
	
	case "عدس أحمر" : 
	return proteincontent = 7.6;
	
	case "رز / تمن" : 
	return proteincontent = 6.67;
	
	case "بروتين القمح/ سيتان" : 
	return proteincontent = 19.05;
	
	case "فول الصويا" : 
	return proteincontent = 38.55;
	
	case "حليب الصويا" : 
	return proteincontent = 2.6;

	case "صلصة أو صوص الصويا" : 
	return proteincontent = 8.14;
	
	case "توفو" : 
	return proteincontent = 9.41;
	
	case "جوز" : 
	return proteincontent = 14.7;
	
	case "دقيق أو طحين القمح" : 
	return proteincontent = 12.6;
	
	case "حليب كامل الدسم" : 
	return proteincontent = 3.3;
	
	case "لبن حليب كامل الدسم" : 
	return proteincontent = 5.7;
	
	default: proteincontent = false;
	}
	}
	



function fooddetailsclick (){
	if ( foodinput.value.length > 0 ) {
	grayinputborder()
	verifyweight();
    }
	else if  (foodinput.value.length <= 0) {redinputborder()}
}
	
function fooddetailskey (event) {
	if ( foodinput.value.length > 0 && event.which === 13 ) {
	grayinputborder()
	verifyweight();
    }
	else if (foodinput.value.length <= 0) {redinputborder()}
}

foodinput.addEventListener ("keyup", fooddetailskey);
mbutton.addEventListener ("click", fooddetailsclick);

	

mreset.addEventListener ("click", function () {
food1.innerHTML = "";
foodinput.value = "";
})
